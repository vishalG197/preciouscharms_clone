import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';

import AllRoutes from './Routes/AllRoutes';
import Footer from './Components/Footer';

function App() {
  return (

    <div className="">
   
      <Navbar/>
      <AllRoutes/>
      <Footer/>
  
    </div>
  );
}

export default App;
