import { createSlice } from "@reduxjs/toolkit";


  export interface initialLangState {
    lang:string;
    loading:Boolean;
    error:Boolean
  }
  const initialState:initialLangState = {
    lang: 'es',
    loading:false,
    error:false,
  }

  const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
      // Acción para cambiar el idioma
      setLang: (state, action) => {
        console.log("action.payload en setLang: ", action.payload)
        state.lang = action.payload;
      },
    },
  })

  export const {setLang} = langSlice.actions;
export default langSlice.reducer