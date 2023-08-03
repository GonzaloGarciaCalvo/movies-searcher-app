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
import authReducer from '../features/auth'
import favsReducer from '../features/favs'
import movSliceReducer from '../features/mov'
import { useDispatch } from 'react-redux'

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 

const rootReducer = combineReducers({ // va configureStore
  auth: authReducer,
  favs: favsReducer,
  mov: movSliceReducer
});

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer:persistedReducer, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      /* serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }, */
    }),
});
const persistor = persistStore(store);

export { store, persistor}