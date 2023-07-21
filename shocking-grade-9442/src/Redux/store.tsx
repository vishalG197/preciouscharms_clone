import {  applyMiddleware ,combineReducers,legacy_createStore} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from "./AuthReducer/reducer"
import rootReducer from './AdminReducer';

const RootReducer= combineReducers({rootReducer,authReducer})

const store = legacy_createStore(RootReducer, applyMiddleware(thunk));

export default store;