// src/store/index.ts

import { combineReducers } from 'redux';
import dataReducer from './reducer';


const rootReducer = combineReducers({
  data:dataReducer
});

export default rootReducer;
