import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {authReducer, favsReducer} from './reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  favs: favsReducer
});

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/* const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor }; */

/* export default createStore(rootReducer, applyMiddleware(thunk)); */
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);
export { store, persistor }