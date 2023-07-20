import axios from "axios";
import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from "./actionType";
import { Dispatch } from "redux";

export const fetchData:any = () => {
    return async (dispatch: Dispatch) => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Replace with your API endpoint
        dispatch({
          type: FETCH_DATA_SUCCESS,
          payload: response.data,
        });
      } catch (error) {
        dispatch({
          type: FETCH_DATA_FAILURE,
        
        });
      }
    };
  };