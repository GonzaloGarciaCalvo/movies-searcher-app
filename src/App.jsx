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
import { getMoviesInFavsfromLS } from '../utilities/getMoviesInFavsFromLS';
import { useDispatch } from 'react-redux';
import {userLogin} from './components/store/actions'
/* import { addOrRemoveFavs } from '../utilities/addOrRemoveFavs' */

function App() {

  const [favorites, setFavorites] = useState([])
  //const dispatch = useDispatch();

  useEffect( ()=>{
    // trea los favs del localStorage y los setea al state si no existen
    const favsInLocalStorage = localStorage.getItem('favs')
    if(favsInLocalStorage != null) {
      const favsArr = JSON.parse(favsInLocalStorage)
      setFavorites(favsArr)
    }
  }, [])


  const tempMoviesInFavs = getMoviesInFavsfromLS()


  const addOrRemoveFavs = (e) => {
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
    //console. log("movieData", movieData)
    let movieIsInArray = tempMoviesInFavs.find(oneMovie => oneMovie.id === movieData.id);
    if (!movieIsInArray) {
      movieData.isFav=true
    tempMoviesInFavs.push(movieData) ;
    localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs));
    console.log('Se agregó la película');
    setFavorites(tempMoviesInFavs)
    } else { // Elimina de favs
    let moviesLeft = tempMoviesInFavs.filter(oneMovie => oneMovie.id !== movieData.id)
    //movieData.isFav=false // necesario??
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
              exact  path="/favoritos" 
              render={(props) => <Favorites favorites={favorites} addOrRemoveFavs={addOrRemoveFavs} {...props} />}
            />
            <Route
              exact path="/listado"
              render={(props) => <Listado addOrRemoveFavs={addOrRemoveFavs} favorites={favorites} {...props} />}
            />
            <Route path="/movie" component={ItemDateil} />
            <Route
              exact path="/results"
              render={(props) => <Results addOrRemoveFavs={addOrRemoveFavs} {...props} />}
            />
            
          </Switch>
        </main>
        <Footer />
    </>
	);
}

export default App
