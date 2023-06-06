import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
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


/* export default createStore(rootReducer, applyMiddleware(thunk)); */

const store = createStore(
  persistedReducer, 
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);
/* const store = createStore(presistedReducer, 
  composeWithDevTools(applyMiddleware(thunk))); 
  const persistor = persistStore(store);*/
export { store, persistor }