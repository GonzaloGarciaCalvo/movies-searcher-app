/* import { types, logintypes } from "./types"; */
import { /* types,  */logintypes, favsTypes, discoverTypes } from "./types";
const {  ADD_REMOVE_FAVS, USER_LOGIN, USER_LOGOUT } = logintypes
const {ADDTOFAVS, REMOVEFROMFAVS } = favsTypes
const { GET_DiSCOVERY_LIST } = discoverTypes


/* export const addRemoveFavs = (e)=>({
  type: ADD_REMOVE_FAVS,
  e:e
}) */



const userLogin = (e) => {
  return async (dispatch) => {
    try {
      console.log("en userLogin")
      const response = await fetch("https://api.themoviedb.org/3/authentication/token/new", {
      headers:{
        /* Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGQwNjE0ODQzNjA0MTQ0YTFhNGY0MmZiOTk2ZGZlMiIsInN1YiI6IjY0NjdkYWUxZDE4NTcyMDBlNWEzOGY5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pCUXd8GVHXLUcQW4JzgK8WVFhI1e15XiVyrN1fAi75k', */
        Authorization: `${import.meta.env.VITE_AUTH_KEY}`,
        accept: 'application/json'
      }
      });
      const dataRes = await response.json()
      const token = await dataRes.request_token
      /* localStorage.setItem("moviesSearcherToken", token) */
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      dispatch({
        type: USER_LOGIN,
        token: token,
        //userId: data.localId,
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

const getDiscoveryList = () =>{
  return async (dispatch) => {
    try {
      console.log("en userLogin")
      const response = await fetch("https://api.themoviedb.org/3/authentication/token/new", {
      headers:{
        /* Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGQwNjE0ODQzNjA0MTQ0YTFhNGY0MmZiOTk2ZGZlMiIsInN1YiI6IjY0NjdkYWUxZDE4NTcyMDBlNWEzOGY5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pCUXd8GVHXLUcQW4JzgK8WVFhI1e15XiVyrN1fAi75k', */
        Authorization: `${import.meta.env.VITE_AUTH_KEY}`,
        accept: 'application/json'
      }
      });
      const dataRes = await response.json()
      const dataMovies = await dataRes.results
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      dispatch({
        type: GET_DiSCOVERY_LIST,
        dataMovies
      });
    } catch (error) {
      throw error;
    } 
  }
}


export {userLogin, userLogOut, addFavs, removeFavs, resetFavs, addRemoveFavs, getDiscoveryList}
/* export {userLogin, userLogOut} */