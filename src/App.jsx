import React, { useState, useEffect } from 'react'
import Login from './components/Login'
import Listado from './components/Listado'
import Header from './components/Header'
import Footer from './components/Footer'
import ItemDateil from './components/ItemDetailContainer'
import Results from './components/Results'
import Favorites from './components/Favorites'
import { Route, Switch, useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
/* import { addOrRemoveFavs } from '../utilities/addOrRemoveFavs' */

function App() {

  const [favorites, setFavorites] = useState([])
  useEffect( ()=>{
    // trea los favs del localStorage y los setea al state si no existen
    const favsInLocalStorage = localStorage.getItem('favs')
    if(favsInLocalStorage != null) {
      const favsArr = JSON.parse(favsInLocalStorage)
      setFavorites(favsArr)
    }
  }, [])

  const favMovies = localStorage.getItem('favs')
  let tempMoviesInFavs
  if (favMovies === null) {
    tempMoviesInFavs = []
  } else {
    tempMoviesInFavs = JSON.parse(favMovies)
  }
  console.log("tempMoviesInFavs en App:  ", tempMoviesInFavs)

  const addOrRemoveFavs = (e, id) => {
    const btn = e.currentTarget;
    const parent = btn.parentElement; //Card
    const imgURL = parent.querySelector('img').getAttribute('src');
    const title = parent .querySelector('#movieTitle').innerText;
    const overview = parent.querySelector ('p').innerText;
    const movieData = {
      imgURL, 
      title, 
      overview,
      id:btn.dataset.movieId
    }
    /* console.log(btn.dataset) */
    console. log("movieData", movieData)
    let movieIsInArray = tempMoviesInFavs.find(oneMovie => oneMovie.id === movieData.id);
    if (!movieIsInArray) {
    tempMoviesInFavs.push(movieData) ;
    localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs));
    console.log('Se agregó la película');
    setFavorites(tempMoviesInFavs)
    } else {
    let moviesLeft = tempMoviesInFavs.filter(oneMovie => oneMovie.id !== movieData.id)
    localStorage.setItem('favs', JSON.stringify(moviesLeft));
    console.log('Se eliminó la pelicula');
    setFavorites(moviesLeft)
    }
  }
  
  return (
		<>
			<Header favQuantity={favorites.length}/>
			<main className="container-fluid">
				<Switch>
					<Route exact path="/" component={Login} />
          <Route 
            path="/favoritos" 
            render={(props) => <Favorites favorites={favorites} addOrRemoveFavs={addOrRemoveFavs} {...props} />}
          />
					<Route
						path="/listado"
						render={(props) => <Listado addOrRemoveFavs={addOrRemoveFavs} {...props} />}
					/>
					<Route path="/movie" component={ItemDateil} />
					<Route
						path="/results"
						render={(props) => <Results addOrRemoveFavs={addOrRemoveFavs} {...props} />}
					/>
          
				</Switch>
			</main>
			<Footer />
		</>
	);
}

export default App
