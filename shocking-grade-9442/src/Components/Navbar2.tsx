import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import logo from "../home-image/logo-white.png"
import blackLogo from "../home-image/logo-black.png"
import styled from "styled-components"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { LOGOUT } from '../Redux/AuthReducer/actionType';
import { Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList ,Heading} from '@chakra-ui/react';
import "./Navbar.css";

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

const Navbar2: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isAuth =useSelector((store:any)=>store.authReducer.isAuth);
  const dispatch:any =useDispatch()
  const navigate=useNavigate()
  const name =useSelector((store:any)=>store.authReducer.ActiveUser.name);
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
      if (window.scrollY >= 200) {
          setColorchange(true);
      }
      else {
          setColorchange(false);
      }
  };
  window.addEventListener('scroll', changeNavbarColor);

  const handleLogout=()=>{
    dispatch({ type: LOGOUT })
  }
  const handleSignUp=()=>{
    navigate('/signup')
  }
  // console.log(isAuth,"name")
  const handleYourOrder=()=>{
    navigate("/your_order")
  }
  const handleLogin=()=>{
    navigate('/login')
  }

  return (
    <DIV>
    <nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
   


<div className="mobileNav">
      <div
        className={`navbar__mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={handleMobileMenuToggle}>
         {isMobileMenuOpen ? <MdClose color="#adacac"/> : <MdMenu color="#adacac" />}
      </div>

      <Link to='/'>
      <div className="mobile-logo">
            <img src={colorChange ? blackLogo : logo} alt=""  />
          </div>
          </Link>

</div>
    

      <ul className={`navbar__menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <CustomNavLink to="/product/Jewelry" onClick={closeMobileMenu}>
          Jwellery
        </CustomNavLink>
        <CustomNavLink to="/product/Watches" onClick={closeMobileMenu}>
          Watches
        </CustomNavLink>
        <CustomNavLink to="/gift" onClick={closeMobileMenu}>
          Gifts
        </CustomNavLink>

        <Link to='/'>
          <div className="navbar__logo">
            <img src={blackLogo} alt=""  />
          </div>
        </Link>
        


      
        <CustomNavLink to="/contact" onClick={closeMobileMenu}>
          Contact Us
        </CustomNavLink>

        {/* {isAuth?(
          <Box
            display="inline-block"
            position="relative"
            _hover={{
              '& button': { display: 'block' },
            }}
          >
            <Avatar name={name} size='xs' src='https://bit.ly/dan-abramov' />
            <Button display="none" position="absolute" top="100%" right="0" onClick={()=>{
              dispatch({type:LOGOUT})}}>
              Logout
            </Button>
          </Box>
        ) :<CustomNavLink to="/login" onClick={closeMobileMenu}>
          Account
        </CustomNavLink>} */}
         <Box className="Profile">
          <Menu >
            <CustomNavLink to="" onClick={toggleMobileMenu}>
            <MenuButton fontWeight={isAuth?'bold':'normal'}  marginTop={'-20px'}>
            {isAuth?name:' Profile'}
            </MenuButton>
            </CustomNavLink>
            <MenuList className={isMobileMenuOpen ? 'mobile-menu-open' : ''}>
              <MenuGroup color={isAuth?'red':'black'} fontWeight={'bold'} title={isAuth?`Welcome back ${name} !!`:' Profile'}>
                <MenuItem color={'#51504f'} onClick={isAuth?handleLogout:handleLogin}>{isAuth?'LogOut':'LogIn'}</MenuItem>
              </MenuGroup>
              <MenuDivider />
              {isAuth?  <Box>
              <Heading  size={'xs'} style={{marginLeft:'10px'}}>Order Placed</Heading>
              <MenuItem color={'#51504f'} onClick={handleYourOrder}>Your Order</MenuItem>
              </Box>:  <MenuItem color={'#51504f'} onClick={handleSignUp}>Sign Up</MenuItem>}
             
           </MenuList>
        </Menu>
        </Box>
        <Box className="Login">
          {isAuth?<Box>
            <CustomNavLink to="/your_order" >
              Your Order 
            </CustomNavLink>
            <CustomNavLink to=""  onClick={handleLogout}>
              {name}
            </CustomNavLink>

            {/* <CustomNavLink to="" onClick={toggleMobileMenu}>
            <MenuButton fontWeight={isAuth?'bold':'normal'}  marginTop={'-20px'}>
            {isAuth?name:' Profile'}
            </MenuButton>
            </CustomNavLink> */}

          </Box>:
          <CustomNavLink to="/login" >
              LogIn
            </CustomNavLink>}
        
        

        </Box>


        <CustomNavLink to="/cart" onClick={closeMobileMenu}>
          Bag
        </CustomNavLink>
      </ul>
    </nav>
    </DIV>
  );
};

export default Navbar2;



const DIV = styled.section`
 .navbar__logo img,.mobile-logo img{
  width:120px
 }
 
.mobile-logo{
  width:60%;
}
 .navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  position: fixed;
  z-index: 99999;
  background-color:#fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}
.colorChange{
  background-color:#fff;
  color:#2e2d2d;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.colorChange a {
    color: #2e2d2d!important;
}

.navbar__logo {
  font-weight: bold;
  font-size: 24px;
}

.navbar__mobile-toggle {
  width:40%;
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
  color: #211f1f;
}


.navbar__item a.active {
  border: 1px solid #8b80806b;
  padding: 4px 7px 4px 7px;
}

.Login{
  display: none;
}
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    background-color: white;
 
  }

  .navbar__menu {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 10px;
    /* border: 2px solid red; */
    transition: transform 0.3s ease-in-out;
    /* transform: translateY(-50%); */
    opacity: 0;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    z-index: 1;
    color:#fff;
  }

  .navbar__menu.active {
    transform: translateY(0);
    opacity: 1;
  }

  .navbar__mobile-toggle {
    display: block;
  }
}
@media (max-width: 768px) {
    .col_1 {
    display: none;
  }
  /* .active{
    border: 2px solid red;
  } */
  .Profile{
    display: none;
  }
  .Login{
    display: block;
  }
    .navbar {
      flex-direction: column;
      align-items: flex-start;
      /* bor
      der: 2px solid red; */
    }

    .navbar__menu {
      display: flex;
      flex-direction: column;
      background-color: #2a2929;
      padding: 10px;
      transition: transform 0.3s ease-in-out;
      /* transform: translateY(-50%); */
      opacity: 0;
      position: absolute;
      top: 70px;
      left: 0;
      width: 100%;
      z-index: 1;
      color: #fff;
    }

    .navbar__menu.active {
      transform: translateY(0);
      opacity: 1;
    }

    .navbar__mobile-toggle {
      display: block;
    }
  }
  @media screen and (min-device-width: 310px) and (max-device-width: 480px) {
    .navbar__logo {
      display: none;
    }
    .navbar__item {
      margin-left: 20px;
      text-align: center;
      border-bottom: 1px solid #3c3a3a52;
      padding: 5px 0;
    }

    .mobileNav {
      width: 100%;
      display: flex;
    }
    .colorChange a {
      color: #ddd9d9 !important;
    }
  }
  @media screen and (min-device-width: 481px) and (max-device-width: 768px) {
    .navbar__logo {
      display: none;
    }
    .navbar__item {
      margin-left: 20px;
      text-align: center;
      border-bottom: 1px solid #3c3a3a52;
      padding: 5px 0;
    }
    .mobileNav {
      width: 100%;
      display: flex;
    }
    .colorChange a {
      color: #ddd9d9 !important;
    }
  }
  @media screen and (min-device-width: 769px) {
    .mobile-logo {
      display: none;
    }
  }

`;