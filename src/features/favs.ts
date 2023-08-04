import { initialFavState } from "../types/favs.type";
import { movieType } from "../types/movie.type";
import { createSlice, current } from "@reduxjs/toolkit";



const initialState:initialFavState = {
  favorites: [],
  loading:false,
  error:false
}

export const favsSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    addFavs:(state,action) =>{
      let movie:movieType = action.payload
      //let movieIsInArrayAdd = state.favorites.find(oneMovie => oneMovie.id === movie.id);
      state.favorites.push(movie)
      console.log("favs: ", current(state.favorites))
    },
    removeFavs:(state,action) => {
      console.log("en removeFavs")
      let movieIsInArray = state.favorites.find(oneMovie => oneMovie.id === action.payload.id);
      if (movieIsInArray) { 
      let moviesLeft = state.favorites.filter(oneMovie => oneMovie.id !== action.payload.id)
      state.favorites = moviesLeft
      }
    },
    resetFavs:(state) => {
      state.favorites = []
    }
  } 
})

export const {addFavs, removeFavs, resetFavs} = favsSlice.actions;
export default favsSlice.reducer