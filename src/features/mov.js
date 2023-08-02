import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../utilities/constants";


export const discoveryList = createAsyncThunk(  // modificar 
  "auth/login",
  async (asyncThunk) => {
    try {
      console.log("en userLogin")
      const response = await fetch(
        `${baseUrl}/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
        {signal}
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
    loading:false,
    fulfilled:false,
    movies: []
  }

  export const movSlice = createSlice({
    name: "mov",
    initialState,
    reducers:{},
    extraReducers: builder => {
      builder
      .addCase(discoveryList.pending, (state,action) => {
        state.loading = true
        console.log("en discoveryList.pending")
      })
      .addCase(discoveryList.fulfilled, (state, action) => {
        console.log("action.payload: ",action.payload)
        if (action.payload.error) {
          state.error = action.payload.error.message
        }
        state.loading = false
        state.token = action.payload.e
        console.log("en discoveryList.fulfilled")
        console.log("payload: ", action.payload)
        console.log("state: ", current(state))
        console.log("state.token: ", state.movies)
      })
      .addCase(discoveryList.rejected, (state, action) => {
        state.loading = false
        state.error = "Error at discoveryList"
      })
    }
  })

  export const {logout} = authSlice.actions;
export default movSlice.reducer