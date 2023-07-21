// import { Img } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { ProductObject } from '../constrain';
import B4 from "../Images/B4.jpg"
const AddToCard = () => {
  const cartItem =useSelector((store:any)=>store.authReducer.ActiveUser.addToCart);
  console.log(cartItem)
  return (
    <Div>
     <div className='List'>
<div className="free">
<h1>GET FREE SHIPPING ON EVERY ORDER, EVERY TIME</h1>
<p>Non member get free shipping on the purchse above the rs.999</p>
</div>
<div className='cart'>
  <h1>YOUR CART(total)</h1>
</div>
<div>
{cartItem==undefined ||cartItem.length==0?<div className='emptycart'>YOUR BAG IS EMPTY</div>: cartItem?.map((el:ProductObject)=>{
  return <>{el.name}</>
 })}
</div>

     </div>
     <div className='checkout'>
      <div>
      <h1>SUMMARY</h1>
      </div>
      <div>
      <h1>DO YOU HAVE A PROMO CODE</h1>
      </div>
     <div id = "IK">
      <div >SUBTOTAL</div><div>RS 455</div>
     </div>
     <div id = "IK">
      <div>ESTIMATED SHIPPING CHARGES</div><div>RS 0.00</div>
     </div>
     <div id = "IK">
      <div>TAX</div><div>RS 0.00</div>
     </div>
     <div id="IK">
      <div>TOTAL</div><div>RS 0.00</div>
     </div>
     <div>
      <button>
        CHECKOUT
      </button>
     </div>
     </div>
    </Div>
  )
}

export default AddToCard


const Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-top :70px;
  .emptycart{
    border-radius:10px;
    background-image: url(${B4});
    height:600px;
    font-size:25px;
    text-align:center;
    
  }
  #IK {
    /* border:1px solid; */
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  }
.checkout{
  padding:25px;
  border-radius:10px;
  background-image: url(${B4});

}
.free{
  width:100%;
background-color:#e5dfdf;
border-radius:10px;
padding:20px;
}
.cart{
  width:100%;
background-color:#e5dfdf;
border-radius:10px;
padding:20px;
}
  h1 {
    font-size: 20px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    color: #555;
  }

  button {
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    background-color: black;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  div > div {
   
    margin-bottom: 10px;
  }
`;