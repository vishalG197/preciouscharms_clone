import React, { useState } from 'react'
import { styled } from 'styled-components'
import B1 from "../Images/B2.jpg"
import {Link} from "react-router-dom"
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
  div {
   margin:auto;
   /* margin-left:30%; */
   position:static;
   
   width:500px;
   height:300px;
   h2 {
      margin-left:10px;
   }
   input[type="text"]{
   width:80%;
   height :40px;
  
margin:auto;
margin-bottom:20px;
   box-shadow: rgb(246, 248, 250) 0px 20px 30px -10px;
  }
  input[type="text"]::placeholder {
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
`;
const Loginpage = () => {
   const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Div>
      <h1>PRECIOUS CHARMS</h1>
      <h2>JWELLARY SHOP</h2>
<div>
<h2>LOGIN PAGE</h2>
<input type="text" placeholder='UserID'/>
<br />
<input type="text" placeholder='Password'/>
<br />
<input type="submit" value="LOGIN"/>
<br />
<br />
<span><Link to="/signup">create an account</Link> </span>
</div>

    </Div>
  )
}

export default Loginpage
