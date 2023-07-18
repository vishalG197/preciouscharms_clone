import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import logo from "../image/logo-white.png"
import styled from "styled-components"


interface CustomNavLinkProps {
  to: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, onClick, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className={`navbar__item ${isActive ? 'active' : ''}`} onClick={onClick}>
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <DIV>
    <nav className="navbar">
      {/* <div className="navbar__logo">
            <img src={logo} alt="" width="200px" />

      </div> */}

      <div
        className={`navbar__mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={handleMobileMenuToggle}
      >
        {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
      </div>

      <ul className={`navbar__menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <CustomNavLink to="/" onClick={closeMobileMenu}>
          Jwellery
        </CustomNavLink>
        <CustomNavLink to="/watches" onClick={closeMobileMenu}>
          Watches
        </CustomNavLink>
        <CustomNavLink to="/gifts" onClick={closeMobileMenu}>
          Gifts
        </CustomNavLink>

        <div className="navbar__logo">
            <img src={logo} alt=""  />

        </div>


      
        <CustomNavLink to="/contact" onClick={closeMobileMenu}>
          Contact Us
        </CustomNavLink>
        <CustomNavLink to="/account" onClick={closeMobileMenu}>
          Account
        </CustomNavLink>
        <CustomNavLink to="/bag" onClick={closeMobileMenu}>
          Bag
        </CustomNavLink>
      </ul>
    </nav>
    </DIV>
  );
};

export default Navbar;



const DIV = styled.section`
 .navbar__logo img{
  width:150px
 }
 

 .navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  position: fixed;
}

.navbar__logo {
  font-weight: bold;
  font-size: 24px;
}

.navbar__mobile-toggle {
  font-size: 24px;
  cursor: pointer;
  display: none; /* Hide by default */
}

.navbar__menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  justify-content: space-around;
}

.navbar__item {
  margin-left: 20px;
}

.navbar__item a {
  text-decoration: none;
  color: #f3f2f2;
}

.navbar__item a.active {
  border: 1px solid #8b80806b;
  padding: 4px 7px 4px 7px;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar__menu {
    display: flex;
    flex-direction: column;
    background-color: #f1f1f1;
    padding: 10px;
    transition: transform 0.3s ease-in-out;
    transform: translateY(-50%);
    opacity: 0;
    position: absolute;
    top: 80%;
    left: 0;
    width: 100%;
    z-index: 1;
  }

  .navbar__menu.active {
    transform: translateY(0);
    opacity: 1;
  }

  .navbar__mobile-toggle {
    display: block;
  }
}


 
`;