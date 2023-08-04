import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { baseUrl } from "../utilities/constants";

export const discoveryList = createAsyncThunk(  
  "mov/discoveryList",
  async (asyncThunk) => {
    try {
      console.log("en userLogin")
      const response = await fetch(
        `${baseUrl}/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
        /* {signal} */
      );
      const dataRes = await response.json()
      const dataMovies = await dataRes.results
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

  const initialState = {
    movies: [],
    loading:false,
    error:false,
  }

  export const movSlice = createSlice({
    name: "mov",
    initialState,
    reducers:{},
    extraReducers: builder => {
      builder
      .addCase(discoveryList.pending, (state) => {
        state.loading = true
      })
      .addCase(discoveryList.fulfilled, (state, action) => {
        if (action.payload.error) {
          console.log("error: ", action.payload.error)
        }
        state.loading = false
        state.movies = action.payload
      })
      .addCase(discoveryList.rejected, (state, action) => {
        state.loading = false
        state.error = true
      })
    }
  })

export default movSlice.reducer