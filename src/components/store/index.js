import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers';

const rootReducer = combineReducers({
  auth: authReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));