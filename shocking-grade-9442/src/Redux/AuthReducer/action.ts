// import { UserObject } from "../../constrain";
// import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, USER_FAILURE, USER_REQUEST, USER_SUCCESS } from "./actionType"
// import axios from "axios";
// const url = "/users"
// export const getUsers =()=>{
//    return async(dispatch)=>{
//       dispatch({type:USER_REQUEST});
//    axios.get(url).
//    then((response)=>{ dispatch({type:USER_SUCCESS,payload:response.data}); }).catch(()=>{
//     dispatch({type:USER_FAILURE});

//    });

//    }
// }

// const Login= (newUser:UserObject)(dispatch:{type:string,payload:UserObject[] | UserObject})=>{
//    dispatch<{type:string,payload:UserObject[] | UserObject}>({type:LOGIN_REQUEST});
//    axios.post(url,newUser).
//    then((response)=>{ dispatch<{type:string,payload:UserObject[] | UserObject}>({type:LOGIN_SUCCESS,payload:response.data}); }).catch(()=>{
//     dispatch<{type:string,payload:UserObject[] | UserObject}>({type:LOGIN_FAILURE});

//    });
// }


export {}