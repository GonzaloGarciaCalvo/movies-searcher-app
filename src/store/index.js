import { createStore, combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {/* authReducer,  *//* favsReducer, */ discoveryReducer} from './reducers';
import { authSlice/* , favsSlice, discoverySlice */ } from '../features/auth';
import authReducer from '../features/auth'
import favsReducer from '../features/favs'

const rootReducer = combineReducers({ // va configureStore
  auth: authReducer,
  /* auth:authSlice, */
  favs: favsReducer,
  mov: discoveryReducer
});

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  /* reducer:{
    auth: authReducer,
    favs: favsReducer,
  } */
  reducer:persistedReducer, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const persistor = persistStore(store);

export { store, persistor}