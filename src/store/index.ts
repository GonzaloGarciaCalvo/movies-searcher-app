import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'

import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from '../features/auth'
import favsReducer from '../features/favs'
import movReducer from '../features/mov'
import movByGenreReducer from '../features/movByGenre';
import langReducer from '../features/lang';
import { useDispatch } from 'react-redux'

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 


const rootReducer = combineReducers({ 
  auth: authReducer,
  favs: favsReducer,
  mov: movReducer,
  movByGenre: movByGenreReducer,
  lang: langReducer,
});
export type RootState = ReturnType< typeof rootReducer >


const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer:persistedReducer, 
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const persistor = persistStore(store);

export { store, persistor}