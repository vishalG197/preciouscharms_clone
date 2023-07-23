import React, { useState,useEffect} from 'react'
import { styled } from 'styled-components'
import B1 from "../Images/B2.jpg"

import {Link, useLocation, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { RootauthState } from '../constrain'
import {  getUsers } from '../Redux/AuthReducer/action'
import { Dispatch } from 'redux'
import { ADMIN_SUCCESS, LOGIN_SUCCESS } from '../Redux/AuthReducer/actionType'
import { useToast } from '@chakra-ui/react'
import Navbar from '../Components/Navbar'

const Loginpage = () => {
   const toast = useToast();
   const [credentials,setCredentials] = useState({email:"",password:""});
   const dispatch: Dispatch<any> =useDispatch();
   const AllUser =useSelector((store:any)=>store.authReducer.Users);
   const navigate = useNavigate()
   const location = useLocation();
  console.log(location);
   useEffect(() => {
   
   dispatch(getUsers())
   // getUsers(dispatch)
   
   },[])
   // const store =useSelector((store)=>store)
   // console.log(store)
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
const {name,value} =e.target;
let newCredentials ={...credentials,[name]:value}
setCredentials(newCredentials);
  };

   const handleSubmit = ()=>{
// console.log("credential",credentials)
if(credentials.email==="admin123@gmail.com"&& credentials.password==="admin123"){
   dispatch({type:ADMIN_SUCCESS});
   navigate("/a/dashboard")
}else if(credentials.email===""|| credentials.password===""){
   // alert("Please enter valid data");
   toast({
      title: 'valid credentials',
      description: 'Please enter valid data.',
      status: 'warning', 
      duration: 2000,  
      isClosable: true, 
    });
 }
else {
   if (Array.isArray(AllUser)) {
   let isprasent = AllUser.find((el)=>{return el.email===credentials
   .email && el.password===credentials.password});
   if(isprasent){
   //   dispatch(Login({...isprasent}))
dispatch({type:LOGIN_SUCCESS,payload:{...isprasent}});
// alert("Login successfull")
toast({
   title: 'Login Success',
   description: ' successfully loged In.',
   status: 'success', 
   duration: 2000,  
   isClosable: true, 
 });
 
 if(location.state == null){
   navigate("/")
 }else{
   navigate(location.state,{replace:true});
 }
setCredentials({email:"",password:""})
   }
   else{
      toast({
         title: 'Wrong credentials',
         description: 'You already have a account with this email address.',
         status: 'error', 
         duration: 2000,  
         isClosable: true, 
       });
       setCredentials({email:"",password:""})
      // alert("Please enter valid credentials for login")
   }
}
   
}


   }
  return (<> 
   
    <Div>
      
      <h1>PRECIOUS CHARMS</h1>
      <h2>JWELLARY SHOP</h2>
<div>
<h2>LOGIN PAGE</h2>
<input type="email" name="email" placeholder='email'
onChange={handleChange} 
/>
<br />
<input type="password" name="password" placeholder='Password'  onChange={handleChange} />
<br />
<input type="submit" value="LOGIN" onClick={handleSubmit}/>
<br />
<br />
<span><Link to="/signup">create an account</Link> </span>
</div>

    </Div>
    </>
  )
}

export default Loginpage




const Div = styled.div`
padding-top:80px;
 background-image: url(${B1});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  margin-top:0; 
  border:1px solid black;
  color: black;
  text-align: center;
  h1{
  
   margin-bottom:20px;
   font-size:30px;
   font-weight:bold;
  }
  h2{
   margin-top:20px;
   margin-bottom:20px;
   font-size:20px;
   font-weight:bold;
  }
  div {
   margin:auto;
   /* margin-left:30%; */
   position:static;
   
   width:500px;
   height:300px;
   h2 {
      margin-left:10px;
   }
   input[type="email"],[type="password"]{
   width:80%;
   height :40px;
  
margin:auto;
margin-bottom:20px;
   box-shadow: rgb(246, 248, 250) 0px 20px 30px -10px;
  }
  input[type="email"],[type="password"]::placeholder {
   padding-left:20px;
  color: #999999; /* Placeholder text color */
  font-style: italic; /* Placeholder text style */
}
   /* border:1px solid white; */
  }
  input[type="submit"]{
   width: 80%;
  height: 40px;
  font-weight: bold;
  background-color: #f6f8f6;
  color: #090909;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  }
  input[type="submit"]:hover{
   border:2px solid black;
  }
  span {
   margin:20px;
   cursor: pointer;
   color:black;
   text-decoration: none;
   Link{
      color:black;
      border:none;
   }
  }
  span:hover{
   background-color:white;
  }
  :hover{
   box-shadow: rgba(255, 253, 253, 0.966) 0px 54px 55px, rgba(250, 249, 249, 0.966) 0px -12px 30px, rgba(251, 250, 250, 0.943) 0px 4px 6px, rgba(253, 252, 252, 0.916) 0px 12px 13px, rgba(249, 248, 248, 0.961) 0px -3px 5px;
   }
 `