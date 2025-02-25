
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { baseUrl } from "../utilities/constants";

const initialState = {
  token:null,
  loading:false,
  error:false
}


export const login = createAsyncThunk(
  "auth/login",
  async (e) => {
    try {
      const response = await fetch(`${baseUrl}/3/authentication/token/new`, {
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
      return token
    } catch (error) {
      throw error;
    } /* finally {
      () =>history.push('/listado')
    } */
  })



export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null
    }
  },
  extraReducers: builder => {
    builder
    .addCase(login.pending, (state,action) => {
      state.loading = true
      console.log("en login.pending")
    })
    .addCase(login.fulfilled, (state, action) => {
      console.log("action.payload: ",action.payload)
      if (action.payload.error) {
        state.error = action.payload.error.message
      }
      state.loading = false
      state.token = action.payload
      console.log("en login.fulfilled")
      console.log("payload en login.fulfilled: ", action.payload)
      console.log("state: ", current(state))
      console.log("state.token en fetures auth: ", state.token)
    })
    .addCase(login.rejected, (state, action) => {
      state.loading = false
      state.error = true
    })
  }
})

export const {logout} = authSlice.actions;
export default authSlice.reducer