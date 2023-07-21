import {  applyMiddleware ,combineReducers,legacy_createStore} from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from './AdminReducer';
import { reducer as productReducer } from './ProductReducer/reducer';
import dataReducer from './AdminReducer/reducer';
const rootReducer=combineReducers({
    productReducer,
    data:dataReducer ,
    // authReducer,
})

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;