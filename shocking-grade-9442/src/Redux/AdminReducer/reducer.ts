// src/store/reducers.ts

import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, USER_REQ, GET_USER_SUCCESS, SINGLE_USER_REQ, SINGLE_USER_SUCCESS } from './actionType';

interface State {
  data: any[]; // Change 'any[]' to the actual data type you expect from the API
  error: string | null;
  user:any[];
  isloading:boolean,
  singleuserLoad:boolean

  singleUser:any
}

const initialState: State = {
  data: [],
  error: null,
  user:[],  //userdata 
  isloading:false, //userdata loading
  singleuserLoad:false,
  singleUser:""
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

    case SINGLE_USER_REQ:{
      return {
        ...state,
        singleuserLoad:true
      }
    }

    case SINGLE_USER_SUCCESS:{
      return {
        ...state,
        singleuserLoad:false,
        singleUser:action.payload
      }
    }


    default:
      return state;
  }
};

export default dataReducer;
