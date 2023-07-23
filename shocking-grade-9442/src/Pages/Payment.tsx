import React, { useState } from 'react';

import { styled } from 'styled-components';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export const Payment = () => {
  const [paymentOption, setPaymentOption] = useState<string>('cash');

  const handlePaymentOptionChange = (option: string) => {
    setPaymentOption(option);
  };

  return (
    <div>

 <Navbar/>
    <DIV  className="background-image" style={{ backgroundImage: `url("https://thegoldmarket.co.uk/wp-content/uploads/2017/01/jewellery-background.jpg")`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"800px",
     border:"1px solid black",
 }}>
    <div className="container">
      <h1>Payment Details</h1>
      
      <div className="payment-options">
        <button
          className={paymentOption === 'cash' ? 'active' : ''}
          onClick={() => handlePaymentOptionChange('cash')}
        >
          Cash on Delivery
        </button>
        <button
          className={paymentOption === 'netbanking' ? 'active' : ''}
          onClick={() => handlePaymentOptionChange('netbanking')}
        >
          Net Banking
        </button>
        <button
          className={paymentOption === 'card' ? 'active' : ''}
          onClick={() => handlePaymentOptionChange('card')}
        >
          Debit or Credit Card
        </button>
        </div>
      <div className="payment-content">
        {paymentOption === 'cash' && (
          <div>
       <p>Please keep the cash ready for delivery.</p>
       <button className='first'> Confirm Payment Option</button>
       </div>
        )
          
            
       
       }
        {paymentOption === 'netbanking' && <p>Please select your bank for net banking.</p>}
        {paymentOption === 'card' && <p>Please enter your card details below.</p>}
        {paymentOption === 'card' && (
          <form>
            <div className="form-group">
              <label >Card Number</label>
              <input type="text" id="cardNumber" placeholder="#### #### #### ####" />
            </div>
            <div className="form-group" >
              <label >Expiry Date</label>
              <input type="text" id="expiryDate" placeholder="MM/YY" />
            </div>
            <div className="form-group">
              <label >CVV</label>
              <input type="text" id="cvv" placeholder="123" />
            </div>
            <button  className='first'> Confirm Payment Option</button>
          </form>
        )}
      </div>
    </div>
    </DIV>
<Footer/>
    </div>
  );
}




const DIV=styled.div`


  font-family: Arial, sans-serif;
  margin: auto;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;


.container {
  margin: auto;
  background-color: #fff;
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 400px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-size: 20px;
  font-weight: bold;
}

.payment-options {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.payment-options button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.payment-options button.active {
  background-color: #0c0c0c;
  color: #fcfafa;
}

.payment-content {
  border-top: 1px solid #ccc;
  padding-top: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #666;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}
.first{
  color: white;
  background-color: black;
  height: 35px;
  width: 200px;
  border-radius: 2%;
  margin-top: 20px;
}




`
