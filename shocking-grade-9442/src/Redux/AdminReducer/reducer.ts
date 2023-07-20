// src/store/reducers.ts

import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actionType';

interface State {
  data: any[]; // Change 'any[]' to the actual data type you expect from the API
  error: string | null;
}

const initialState: State = {
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
    default:
      return state;
  }
};

export default dataReducer;
