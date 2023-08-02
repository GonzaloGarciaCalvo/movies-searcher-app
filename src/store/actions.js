import { logintypes, discoverTypes } from "./types";

const { USER_LOGIN } = logintypes
const { GET_DiSCOVERY_LIST } = discoverTypes


const userLogin = () => {
  return async (dispatch) => {
    try {
      console.log("VITE_AUTH_KEY userLogin", import.meta.env.VITE_AUTH_KEY)
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
      console.log(error.message);
    } finally {
      () =>history.push('/listado')
    }
  };
};

const userLogOut= () => ({
  type: "USER_LOGOUT"
})


const addFavs = (e,movie) =>({
  type: "ADDTOFAVS",
  payload:{ e, movie}
})

const resetFavs = () => ({
  type: "RESETFAVS"
})

const removeFavs = (e, movie)=> ({
  type: "REMOVEFROMFAVS",
  payload: {e, movie}
})

const getDiscoveryList = (favoritesRedux, signal) =>{
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
        {signal}
      );
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
      console.log(error.message)
      throw error;
    } 
  }
}

export {userLogin, userLogOut, addFavs, removeFavs, resetFavs, getDiscoveryList}
