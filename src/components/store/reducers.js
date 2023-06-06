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


const favsInitialState = {
  favorites:  []
}

const favsReducer = (state = favsInitialState, action) => {
  const e= action.payload
  switch (action.type) {
    case ADDTOFAVS:
      const btnAdd = e.currentTarget;
      const parentAdd = btnAdd.parentElement; //Card
      const imgURLAdd = parentAdd.querySelector('img').getAttribute('src');
      const titleAdd = parentAdd.querySelector('#movieTitle').innerText;
      const overviewAdd = parentAdd.querySelector ('p').innerText;
      const movieDataAdd = {
        imgURLAdd, 
        titleAdd, 
        overviewAdd,
        id:btnAdd.dataset.movieId
      }
      let movieIsInArrayAdd = state.favorites.find(oneMovie => oneMovie.id === movieDataAdd.id);
      if (!movieIsInArrayAdd) {
        movieDataAdd.isFav=true
      }
      return {
        ...state, favorites:[...state.favorites, movieDataAdd]
      }
      case REMOVEFROMFAVS:
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
        let movieIsInArray = state.favorites.find(oneMovie => oneMovie.id === movieData.id);
        if (movieIsInArray) { // Elimina de favs
        let moviesLeft = state.favorites.filter(oneMovie => oneMovie.id !== movieData.id)
        console.log('Se eliminó la pelicula');
        return {...state, favorites: moviesLeft }
        }

    /* case ADD_REMOVE_FAVS:
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
      let movieIsInArray = state.favorites.find(oneMovie => oneMovie.id === movieData.id);
      if (!movieIsInArray) {
        movieData.isFav=true
      console.log('Se agregó la película');
 
      return {
        ...state, favorites:[...state.favorites, movieData]
      }
      } else { // Elimina de favs
      let moviesLeft = state.favorites.filter(oneMovie => oneMovie.id !== movieData.id)
      console.log('Se eliminó la pelicula');
      return {...state, favorites: moviesLeft }
      } */
    default:
      return state;
  }
}

export { authReducer, favsReducer };