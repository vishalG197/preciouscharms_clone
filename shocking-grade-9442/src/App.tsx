import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';

import AllRoutes from './Routes/AllRoutes';

function App() {
  return (

    <div className="App">
   <AllRoutes/>
      <Navbar/>
  <Homepage/>
    </div>
  );
}

export default App;
