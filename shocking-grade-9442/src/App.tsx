import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';

import AllRoutes from './Routes/AllRoutes';

import AdminNavbar from './Admin/AdminNavbar';
import Dashboard from './Admin/Dashboard';

import Footer from './Components/Footer';


function App() {
  return (

    <div className="">
   

      {/* <Navbar/> */}
      {/* <Homepage/> */}
      <AdminNavbar/>
      <AllRoutes/>
      {/* <Footer/> */}
  

    </div>
  );
}

export default App;
