import axios from "axios";
import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType"
import { useParams } from "react-router-dom";

/////Get Products
export const requestAction=()=>{
    return {type:PRODUCT_REQUEST}
  }
  export const getSuccessAction=(payload:any)=>{
  return {type:GET_PRODUCT_SUCCESS,payload}
  }
  export const failureAction=()=>{
    return {type:PRODUCT_FAILURE}
  }
  export const getProducts:any = (paramsObj:any) => (dispatch:any):void=>{
    // Complete get products functionality here
    // const{name}=useParams()
    // console.log(name)
    dispatch(requestAction())
    axios
    .get(`http://localhost:8080/products`,paramsObj)
    .then((res)=>{
      const totalPages = Math.ceil(res.headers['x-total-count'] / 12);
      // console.log(res.data)
      dispatch(getSuccessAction({product:res.data,totalPages:totalPages}))
    })
    .catch((err)=>{
      dispatch(failureAction());
      console.log(err)
    })
  
  };


