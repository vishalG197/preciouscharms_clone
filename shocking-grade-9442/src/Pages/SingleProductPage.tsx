import axios from 'axios';
import React, {useEffect,useState}from 'react'
import { useParams } from 'react-router-dom'
import { ProductObject } from '../constrain';
import { styled } from 'styled-components';
import { Button } from '@chakra-ui/react';

const SingleProductPage = () => {
  const {id} =useParams();
  const [product,setProduct]=useState<ProductObject>({id:0,name:"",price:0,about:"",category:"",brand:"",rating:0,avatar:""})
useEffect(()=>{
  axios.get(`http://localhost:8080/products/${id}`).then((res)=>{
    // console.log(res.data);
  setProduct(res.data)}).catch((err)=>{console.log(err)})
},[])

  return (
    <Div>
     <div>
   <img src={product.avatar} alt="" />
     </div>
     <div>
<h1>Precious Charms Love Collection</h1>
<p>{product.id%2===0?"Elegance Redefined, Precious Charms Jewelry. Timeless Beauty, Captivating Hearts. Embrace Luxury, Cherish Forever.":"Radiate Brilliance, Adorn Yourself with Exquisite Jewelry Crafted to Perfection"}</p>
<h1>{product.about}</h1>
<p>{product.brand}</p>
<p>₹{product.price}</p>
<p>{product.rating}★</p>
<Button bg="black" color="white" padding="30px" mr={6} w="200px">ADD TO BAG</Button>
<Button bg="white" color="black" padding="30px" mr={5} w="200px">BUY NOW</Button>
     </div>
    </Div>
  )
}

export default SingleProductPage


const Div =styled.div`
  display : flex;
  justify-content:space-between;
 padding-top:70px;
 
  div{
    width:50%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    
    img {
      width: 80%;
     
     
      height:auto;
     

    }
  }
  div {
    width:50%;
    padding:30px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    h1 {
      text-align:left;
      margin-bottom:20px;
font-size:25px;
font-weight:bold;
    }
    p{
      margin-bottom:10px;
    }
   :hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
   }
  }
`