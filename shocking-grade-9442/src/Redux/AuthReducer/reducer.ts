import { UserObject } from "../../constrain";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_SUCCESS, USER_FAILURE, USER_REQUEST, USER_SUCCESS } from "./actionType";

const initialState: {
   isLoading: boolean;
   isError: boolean;
   isAuth: boolean;
   Users: UserObject[];
   ActiveUser: {};
} ={
isLoading:false,
isError:false,
isAuth:false,
Users:[],
ActiveUser:{},

}
export function authReducer (state=initialState,{type,payload}:{type:string,payload:UserObject[] | UserObject}){
switch(type){

case LOGIN_REQUEST :{
   return {...state,isLoading:true}
}
case LOGIN_SUCCESS :{
   return {...state,isLoading:false,isAuth:true,ActiveUser:payload}
}
case SIGNUP_SUCCESS :{
return {...state, isLoading:false}
}
case LOGIN_FAILURE :{
   return {...state,isLoading:false,isError:true}
}
case USER_REQUEST:{
   return {...state,isLoading:true}
}
case USER_SUCCESS:{
   return {...state,isLoading:false,Users:payload}
}
case USER_FAILURE:{
   return {...state,isLoading:false,isError:true}
}
   default:return state;
}
}

// export {}