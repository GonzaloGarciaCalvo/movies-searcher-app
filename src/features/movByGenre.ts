import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { baseUrl } from "../utilities/constants";
import { movieType } from "../types/movie.type";

export const moviesByGenreList = createAsyncThunk(  
  "movByGenre/moviesByGenreList",
  async (url:string) => {
    try {
      console.log("en moviesByGenreList mov")
      const response = await fetch(url
        /* `${baseUrl}/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc` */,
        /* {signal} */
      );
      const dataRes = await response.json()
      const dataMovies = await dataRes.results
      console.log("data res en moviesByGenreList: ", dataRes)
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      return dataMovies
    } catch (error) {
      throw error;
    } /* finally {
      () =>history.push('/listado')
    } */
  })

  export interface initialMovState {
    movies:movieType[];
    genre:{
      id:Number | null,
      name:String
    }
    loading:Boolean;
    error:Boolean
  }
  const initialState:initialMovState = {
    movies: [],
    genre: {
      id:null,
      name:'' 
    },
    loading:false,
    error:false,
  }

  export const movByGenreSlice = createSlice({
    name: "movByGenre",
    initialState,
    reducers:{
      setGlobalGenre: (state, action) => {
        state.genre = action.payload
      }
    },
    extraReducers: builder => {
      builder
      .addCase(moviesByGenreList.pending, (state) => {
        state.loading = true
      })
      .addCase(moviesByGenreList.fulfilled, (state, action) => {
        if (action.payload.error) {
          console.log("error: ", action.payload.error)
        }
        state.loading = false
        state.movies = action.payload
      })
      .addCase(moviesByGenreList.rejected, (state, action) => {
        state.loading = false
        state.error = true
      })
    }
  })

export const {setGlobalGenre} = movByGenreSlice.actions;
export default movByGenreSlice.reducer