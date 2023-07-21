// src/store/reducers.ts

<<<<<<< HEAD
import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, DELETE_DATA_SUCCESS, DELETE_DATA_FAILURE } from './actionType';
=======
import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, USER_REQ, GET_USER_SUCCESS } from './actionType';
>>>>>>> main


export interface Product {
  id: number;
  name: string;
  // Add other properties if available from the API response
}

 export interface DataState  {
  data: Product[]; // Change 'any[]' to the actual data type you expect from the API
  error: string | null;
  user:any[];
  isloading:boolean,
  totalPages:number
}

  const initialState: DataState = {
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
<<<<<<< HEAD
      case DELETE_DATA_SUCCESS:
      
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
        error: null,
      };
    case DELETE_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
=======

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


>>>>>>> main
    default:
      return state;
  }
};

export default dataReducer;
