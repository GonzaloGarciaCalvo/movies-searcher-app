import { logintypes, favsTypes, discoverTypes } from "./types";

const {  ADD_REMOVE_FAVS, USER_LOGIN, USER_LOGOUT } = logintypes
const {ADDTOFAVS, REMOVEFROMFAVS } = favsTypes
const { GET_DiSCOVERY_LIST } = discoverTypes


const userLogin = (e) => {
  return async (dispatch) => {
    try {
      console.log("en userLogin")
      const response = await fetch("https://api.themoviedb.org/3/authentication/token/new", {
      headers:{
        Authorization: `${import.meta.env.VITE_AUTH_KEY}`,
        accept: 'application/json'
      }
      });
      const dataRes = await response.json()
      const token = await dataRes.request_token
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      dispatch({
        type: USER_LOGIN,
        token: token,
      });
    } catch (error) {
      throw error;
    } finally {
      () =>history.push('/listado')
    }
  };
};

const userLogOut= () => ({
  type: "USER_LOGOUT"
})

const addFavs = (e) =>({
  type: "ADDTOFAVS",
  payload: e
})
const resetFavs = () => ({
  type: "RESETFAVS"
})
const removeFavs = (e)=> ({
  type: "REMOVEFROMFAVS",
  payload: e
})
const addRemoveFavs = (e) =>({
  type: "ADD_REMOVE_FAVS",
  payload: e
})

const getDiscoveryList = (favoritesRedux) =>{
  return async (dispatch) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`);
      const dataRes = await response.json()
      const dataMovies = await dataRes.results
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      dispatch({
        type: GET_DiSCOVERY_LIST,
        dataMovies,
        favoritesRedux
      });
    } catch (error) {
      throw error;
    } 
  }
}

export {userLogin, userLogOut, addFavs, removeFavs, resetFavs, addRemoveFavs, getDiscoveryList}
