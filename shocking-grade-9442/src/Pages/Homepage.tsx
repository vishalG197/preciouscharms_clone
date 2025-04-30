import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import banner from '../home-image/bannerv1.jpg';
import best1 from '../home-image/best1.jpg';
import best2 from '../home-image/best2.jpg';
import best3 from '../home-image/best3.jpg';
import best4 from '../home-image/best4.jpg';
import gift from "../home-image/gift-wrap.jpeg"
import categoryimg from "../home-image/category.jpg"
import abtImg from "../home-image/home-about.png"
import meetImg from "../home-image/meet.jpeg"
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, useColorModeValue } from '@chakra-ui/react';

interface CustomNavLinkProps {
  to: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, onClick, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <motion.li 
      className={`navbar__item ${isActive ? 'active' : ''}`} 
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <NavLink to={to}>{children}</NavLink>
    </motion.li>
  );
};

const Homepage = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');

  return (
    <DIV>
      <Navbar />
      
      <motion.div 
        className="banner"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={banner} alt="Banner" />
      </motion.div>

      <motion.div 
        className="collectSection"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="newHead">
          <motion.p 
            className="newHead-Capt"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            New Collection
          </motion.p>
          <motion.p 
            className="newHead-desc"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Check out the New Collection of famous Brand
          </motion.p>
        </div>
        <motion.div 
          className="newCollection"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[best1, best2, best3, best4].map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              transition={{ duration: 0.3 }}
            >
              <img src={img} alt={`Collection ${index + 1}`} />
              <h4>Messika</h4>
              <p>Diamond Collection</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        className="categorySec"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="newHead">
          <motion.p 
            className="newHead-Capt"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Categories
          </motion.p>
          <motion.p 
            className="newHead-desc"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Discover Our Collection of Jewellery by Categories
          </motion.p>
        </div>

        <motion.div 
          className="catMainSec"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="catText">
            <div className="allcat">
              <ul>
                {[
                  { to: "/product/Jewelry?category=Rings", text: "Rings" },
                  { to: "/product/Jewelry?category=Brecelets", text: "Brecelets" },
                  { to: "/product/Jewelry?category=Earrning", text: "Earrings" },
                  { to: "/product/Jewelry?category=Necklaces+%26+Pendants", text: "Necklaces & Pendants" },
                  { to: "/product/Watches", text: "Watches" },
                  { to: "/product/Jewelry?category=Men's jewelry", text: "Men's Jewellery" }
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to={item.to}>{item.text}</Link>
                  </motion.li>
                ))}
              </ul>

              <motion.p 
                className="shoText" 
                style={{ color: textColor }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                A L L &nbsp;&nbsp; C A T E G O R I E S
              </motion.p>
            </div>
          </div>
          <motion.div 
            className="catImg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img src={categoryimg} alt="Categories" />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="giftSec"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <img src={gift} alt="Gifts" />
        <motion.div 
          className="gifttext"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="giftCapt">Gifts</p>
          <p className="giftdesc">
            Looking for the perfect Gift? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Alias facere repellendus provident
            nesciunt fuga? Sapiente nihil animi officia debitis non?Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Minima, excepturi
            blanditiis qui natus dolores similique voluptates! Quos adipisci
            porro sit!
          </p>
          <motion.p 
            className="shoText" 
            style={{ color: "#dfdfdf" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            S H O P &nbsp;&nbsp; G I F T S
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div 
        className="about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="abtMSec">
          <motion.div 
            className="abtText"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="abthead">
              <p className="newHead-Capt">About</p>
              <p className="newHead-desc">
                Precious Charms is more than just Gilding
              </p>
            </div>
            <div className='abtp'>
              <p>Our company is an exclusive supplier of jewelry from the world's
                best brands. We take pride in offering our customers only the
                highest quality products created from precious metals and stones
                by the most experienced master jewelers</p>
              <p>We are constantly expanding our range to meet the needs of our
                customers and offer them the latest and most fashionable trends
                in jewelry. We are confident that our collection of jewelry will
                allow everyone to express their individual style and create a
                unique image</p>
            </div>
          </motion.div>
          <motion.div 
            className="abtImg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img src={abtImg} alt="About Us" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="arrange"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="arrangeSec">
          <motion.div 
            className="arrimg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img src={meetImg} alt="Arrange Meeting" />
          </motion.div>
          <motion.div 
            className="arrText"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="abthead">
              <p className="newHead-Capt">Arrange a Meeting</p>
              <p className="newHead-Capt">with Personal Consultant</p>
              <p className="newHead-desc">
                Find a Boutique Near Your or Visit Our Flagship store
              </p>
              <br />
              <br />
              <br />
              <motion.p 
                className="shoText" 
                style={{ color: "#2d2c2c" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                L E A R N &nbsp;&nbsp; M O R E
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </DIV>
  );
};

export default Homepage;

const DIV = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');
  background-color: #f8f8f8;

  .banner img {
    width: 100%;
    transition: transform 0.3s ease;
  }

  .collectSection {
    padding: 100px 0;
  }

  .newCollection {
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
  }

  .newCollection div {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .newCollection div:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  .newCollection img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }

  .newHead-Capt {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
    color: #2d2c2c;
  }

  .newHead-desc {
    text-align: center;
    color: #666;
    margin-bottom: 30px;
  }

  .categorySec {
    padding: 50px 0;
  }

  .catMainSec {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding: 20px;
  }

  .catText {
    padding: 20px;
  }

  .allcat ul {
    list-style: none;
    padding: 0;
  }

  .allcat li {
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .allcat li:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .allcat a {
    text-decoration: none;
    color: #2d2c2c;
    font-size: 1.1rem;
  }

  .shoText {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
    cursor: pointer;
  }

  .giftSec {
    position: relative;
    margin: 50px 0;
  }

  .giftSec img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  .gifttext {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    padding: 30px;
    border-radius: 10px;
  }

  .giftCapt {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .giftdesc {
    margin-bottom: 20px;
    line-height: 1.6;
  }

  .about {
    padding: 50px 0;
  }

  .abtMSec {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding: 20px;
  }

  .abtText {
    padding: 20px;
  }

  .abtp p {
    margin: 20px 0;
    line-height: 1.6;
  }

  .abtImg img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
  }

  .arrange {
    padding: 50px 0;
  }

  .arrangeSec {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding: 20px;
  }

  .arrimg img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
  }

  .arrText {
    padding: 20px;
  }

  @media (max-width: 768px) {
    .catMainSec,
    .abtMSec,
    .arrangeSec {
      grid-template-columns: 1fr;
    }

    .newCollection {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    .gifttext {
      width: 90%;
    }
  }
`;
