// src/store/reducers.ts

import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, DELETE_DATA_SUCCESS, DELETE_DATA_FAILURE } from './actionType';


export interface Product {
  id: number;
  name: string;
  // Add other properties if available from the API response
}

 export interface DataState  {
  data: Product[]; // Change 'any[]' to the actual data type you expect from the API
  error: string | null;
}

  const initialState: DataState = {
  data: [],
  error: null,
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
    default:
      return state;
  }
};

export default dataReducer;
