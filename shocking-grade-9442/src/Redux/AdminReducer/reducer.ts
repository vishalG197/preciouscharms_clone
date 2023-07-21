// src/store/reducers.ts

import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, USER_REQ, GET_USER_SUCCESS } from './actionType';

interface State {
  data: any[]; // Change 'any[]' to the actual data type you expect from the API
  error: string | null;
  user:any[];
  isloading:boolean,
  totalPages:number
}

const initialState: State = {
  data: [],
  error: null,
  user:[],  //userdata 
  isloading:false, //userdata loading
  totalPages:0
};

const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        data: [],
        error: action.payload,
      };

    case USER_REQ:{
      return {
        ...state,
        isloading:true
      }
    }

    case GET_USER_SUCCESS:{
      return {
        ...state,
       user:action.payload
      }
    }


    default:
      return state;
  }
};

export default dataReducer;
