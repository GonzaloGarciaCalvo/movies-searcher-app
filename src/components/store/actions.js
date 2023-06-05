/* import { types, logintypes } from "./types"; */
import { /* types,  */logintypes, favsTypes } from "./types";
const {  ADD_REMOVE_FAVS, USER_LOGIN, USER_LOGOUT } = logintypes
const {ADDTOFAVS, REMOVEFROMFAVS }= favsTypes


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
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGQwNjE0ODQzNjA0MTQ0YTFhNGY0MmZiOTk2ZGZlMiIsInN1YiI6IjY0NjdkYWUxZDE4NTcyMDBlNWEzOGY5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pCUXd8GVHXLUcQW4JzgK8WVFhI1e15XiVyrN1fAi75k',
        accept: 'application/json'
      }
      });
      const dataRes = await response.json()
      const token = await dataRes.request_token
      localStorage.setItem("moviesSearcherToken", token)
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

const addFavs = () =>({
  type: "ADDTOFAVS"
})
const removeFavs = ()=> ({
  type: "REMOVEFROMFAVS"
})
const addRemoveFavs = (e) =>({
  type: "ADD_REMOVE_FAVS",
  payload: e
})

export {userLogin, userLogOut, addFavs, removeFavs}
/* export {userLogin, userLogOut} */