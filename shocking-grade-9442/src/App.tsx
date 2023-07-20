import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';

import AllRoutes from './Routes/AllRoutes';
import AdminNavbar from './Admin/AdminNavbar';
import Dashboard from './Admin/Dashboard';

function App() {
  return (

    <div className="App">
   
      {/* <Navbar/> */}
      <AdminNavbar/>
      <AllRoutes/> 
      {/* <Dashboard/> */}
    {/* <Homepage/> */}
    </div>
  );
}

export default App;
