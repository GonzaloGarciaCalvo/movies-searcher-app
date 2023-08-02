import {  createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";


const initialState = {
  favorites:  []
}

export const favsSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    addFavs:(state,action) =>{
      let movie = action.payload
      let movieIsInArrayAdd = state.favorites.find(oneMovie => oneMovie.id === movie.id);
      /* if (!movieIsInArrayAdd) {
        action.payload.isFav=true
      }  */
      /* return {
        ...state, favorites:[...state.favorites, movie]
      } */
      state.favorites.push(movie)
      console.log("favs: ", current(state.favorites))
    },
    removeFavs:(state,action) => {
      console.log("en removeFavs")
      let movieIsInArray = state.favorites.find(oneMovie => oneMovie.id === action.payload.id);
      if (movieIsInArray) { 
      let moviesLeft = state.favorites.filter(oneMovie => oneMovie.id !== action.payload.id)
      /* action.payload.isFav=true */
      /* return {...state, favorites: moviesLeft }
      } */
      state.favorites = moviesLeft
      }
    },
    resetFavs:() => {
      state.favorites = []
    }
  } 
})

export const {addFavs, removeFavs, resetFavs} = favsSlice.actions;
export default favsSlice.reducer