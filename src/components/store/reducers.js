import { /* types,  */logintypes, favsTypes } from "./types";

/* const {ADD_REMOVE_FAVS} = types; */
const {USER_LOGIN, USER_LOGOUT} = logintypes
const {ADDTOFAVS, REMOVEFROMFAVS, ADD_REMOVE_FAVS} = favsTypes

const initialState = {
  token: null,
  //userEmail: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        token: action.token
      };
    case USER_LOGOUT:
      localStorage.favs=[];
      localStorage.moviesSearcherToken ="";
      console.log("dispatch")
      return {
        ...state, token:null
    }; 
    default:
      return state;
  }
};

/* const favInLS = JSON.parse( localStorage.getItem('favs') )|| null
console.log("favsInLSL ", favInLS) */
const favsInitialState = {
  favs:  []
}


const favsReducer = (state = favsInitialState, action) => {
  switch (action.type) {
    /* case ADDTOFAVS:
      return [
        ...state, action.item
      ];// favorites es array */
    case ADD_REMOVE_FAVS:
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
    return {
      ...state, movieData
    }
    /* setFavorites(tempMoviesInFavs) */
    } else { // Elimina de favs
    let moviesLeft = tempMoviesInFavs.filter(oneMovie => oneMovie.id !== movieData.id)
    //movieData.isFav=false // necesario??
    localStorage.setItem('favs', JSON.stringify(moviesLeft));
    console.log('Se eliminó la pelicula');
    return {
      ...moviesLeft
    }
    /* setFavorites(moviesLeft) */
    }
    default:
      return state;
  }
}

export { authReducer, favsReducer };