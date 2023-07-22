import axios from "axios";

import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS, GET_USER_SUCCESS, SINGLE_USER_REQ, SINGLE_USER_SUCCESS, USER_REQ ,DELETE_DATA_FAILURE, DELETE_DATA_SUCCESS} from "./actionType";


import { AnyAction, Dispatch } from "redux";
import { ThunkAction } from 'redux-thunk'; 
import { RootState } from ".";



export const fetchData:any = () => {
    return async (dispatch: Dispatch) => {
      try {
        const response = await axios.get('http://localhost:8080/products'); // Replace with your API endpoint
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


  type ThunkResult<R> = ThunkAction<R, RootState, undefined, AnyAction>;
  
  export const deleteData = (id: number):any => {
    return async (dispatch: Dispatch) => {
      try {
        await axios.delete(`http://localhost:8080/products/${id}`);
        dispatch({
          type: DELETE_DATA_SUCCESS,
          payload: id,
        });
      } catch (error) {
        dispatch({
          type: DELETE_DATA_FAILURE,
          
        });
      }
    };
  };

 export const fetchUserData:any=(dispatch: Dispatch)=>{
  dispatch({type:USER_REQ})

  axios.get(`http://localhost:8080/users`)
.then((res)=>{

  dispatch({type:GET_USER_SUCCESS,payload:res.data})
  })
 }


 export const SingleUserFetch:any=(id:number)=>(dispatch: Dispatch)=>{
  dispatch({type:SINGLE_USER_REQ})
  axios.get(`http://localhost:8080/users/${id}`)
  .then((res)=>{
console.log(res.data);

    dispatch({type:SINGLE_USER_SUCCESS,payload:res.data})
    })
 }


