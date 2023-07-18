import React from 'react';
import styled from 'styled-components';
import banner from '../image/banner11.jpg';
import best1 from '../image/best1.jpg';
import best2 from '../image/best2.jpg';
import best3 from '../image/best3.jpg';
import best4 from '../image/best4.jpg';
import gift from "../image/gift-wrap.jpeg"


const Homepage = () => {
  return (
    <DIV>
      <div className="banner">
        <img src={banner} alt="" />
      </div>

{/************************   new-collection-section-start  ********************* */}
<div className="collectSection">
      <div className="newHead">
        <p className="newHead-Capt">New Collection</p>
        <p className="newHead-desc">Check out the New Collection of famous Brand</p>
      </div>
      <div className="newCollection">
        <div>
          <img src={best1} alt="" />
          <h4>Messika</h4>
          <p>Diamond Collection</p>
        </div>
        <div>
          <img src={best2} alt="" />
          <h4>Messika</h4>
          <p>Diamond Collection</p>
        </div>
        <div>
          <img src={best3} alt="" />
          <h4>Messika</h4>
          <p>Diamond Collection</p>
        </div>
        <div>
          <img src={best4} alt="" />
          <h4>Messika</h4>
          <p>Diamond Collection</p>
        </div>
      </div>
</div>
  {/************************   new-collection-section-start-end  ********************* */}


  {/************************   gift-section-start  ********************* */}
<div className="giftSec">
  <img src={gift} alt="" />

  <div className="gifttext">

   Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, autem!
  </div>

</div>

  {/************************  gift-section-end  ********************* */}
    </DIV>
  );
};

export default Homepage;

const DIV = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');

  .banner img {
    width: 100%;
  }
.collectSection{
  padding: 100px 0;
}
  .newCollection {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }

  .newCollection div {
    width: 23%;
  }

  .newCollection div img {
    width: 100%;
  }

  .newHead {
    width: 90%;
    margin: 0 auto;
    padding: 10px 0px 25px 10px;
  }

  .newHead-Capt {
    font-family: 'Pathway Gothic One', sans-serif;
    font-size: 34px;
    font-weight: 600;
    color: #0a0a0a;
    margin: 0;
  }

  .newHead-desc {
    font-family: Arial,sans-serif;
    margin: 6px 0;
    color: #6a6a6a;
  }
  .newCollection div h4{
    color:#000;
    margin:15px 0 0 0;
  }
  .newCollection div p{
    font-size: 14px;
    color: #565555;
    margin: 0;
  }
  .giftSec{

  }

  .giftSec img{
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
`;
