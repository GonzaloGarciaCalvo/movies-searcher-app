import React, { useState, useEffect } from 'react'
import Login from './components/Login'
import DiscoverList from './components/DiscoverList'
import Header from './components/Header'
import Footer from './components/Footer'
import ItemDateil from './components/ItemDetailContainer'
import Results from './components/Results'
import Favorites from './components/Favorites'
import { Route, Switch, useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { getMoviesInFavsfromLS } from '../utilities/getMoviesInFavsFromLS';
import { useDispatch, useSelector } from 'react-redux';
import {userLogin} from './components/store/actions'
/* import { addOrRemoveFavs } from '../utilities/addOrRemoveFavs' */

function App() {


  const [favorites, setFavorites] = useState([])
  const favsRedux = useSelector( state => state.favs.favorites)
  console.log("favsRedux: ", favsRedux)
  //const dispatch = useDispatch();

  // useEffect( ()=>{
  //   // trea los favs del localStorage y los setea al state si no existen
  //   const favsInLocalStorage = localStorage.getItem('favs')
  //   if(favsInLocalStorage != null) {
  //     const favsArr = JSON.parse(favsInLocalStorage)
  //     setFavorites(favsArr)
  //   }
  // }, [])

  /* const tempMoviesInFavs = getMoviesInFavsfromLS() */

  // const addOrRemoveFavs = (e) => {
  //   const btn = e.currentTarget;
  //   const parent = btn.parentElement; //Card
  //   const imgURL = parent.querySelector('img').getAttribute('src');
  //   const title = parent .querySelector('#movieTitle').innerText;
  //   const overview = parent.querySelector ('p').innerText;
  //   const movieData = {
  //     imgURL, 
  //     title, 
  //     overview,
  //     id:btn.dataset.movieId
  //   }
  //   let movieIsInArray = tempMoviesInFavs.find(oneMovie => oneMovie.id === movieData.id);
  //   if (!movieIsInArray) {
  //     movieData.isFav=true
  //   tempMoviesInFavs.push(movieData) ;
  //   localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs));
  //   console.log('Se agregó la película');
  //   setFavorites(tempMoviesInFavs)
  //   } else { // Elimina de favs
  //   let moviesLeft = tempMoviesInFavs.filter(oneMovie => oneMovie.id !== movieData.id)
  //   localStorage.setItem('favs', JSON.stringify(moviesLeft));
  //   console.log('Se eliminó la pelicula');
  //   setFavorites(moviesLeft)
  //   }
  // }

  return (
    <>
        <Header favQuantity={favsRedux.length} favorites={favsRedux}/>
        <main className="container-fluid">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route 
              exact  path="/favoritos" 
              render={(props) => <Favorites {...props} />}
            />
            <Route
              exact path="/listado"
              render={(props) => <DiscoverList {...props} />}
            />
            <Route path="/movie" component={ItemDateil} />
            <Route
              exact path="/results"
              render={(props) => <Results  {...props} />}
            />
            
          </Switch>
        </main>
        <Footer />
    </>
	);
}

export default App
