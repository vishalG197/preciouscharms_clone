import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Loginpage from '../Pages/Loginpage'
import Signup from '../Pages/Signup'
import ProductPage from '../Pages/ProductPage'
import SingleProductPage from '../Pages/SingleProductPage'
import AddToCard from '../Pages/AddToCard'
import Dashboard from '../Admin/Dashboard'
import AllProduct from '../Admin/AllProduct'
import EditPage from '../Admin/EditPage'
import UserDetails from '../Admin/UserDetails'
import OrderDetails from '../Admin/OrderDetails'
import CartDetail from '../Admin/CartDetail'
import ContactUs from '../Pages/ContactUs'
import Setting from '../Admin/Setting'

import { SingleUser } from '../Admin/SingleUser'

import { Payment } from '../Pages/Payment'
import { Address } from '../Pages/Address'
import PrivateRoutes from './PrivateRoutes'

import { AddProduct } from '../Admin/AddProduct'

import About from '../Pages/About'



const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/login" element={<Loginpage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/product/:name" element={<ProductPage/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path="/product/:name/:id" element={
      <PrivateRoutes>
 <SingleProductPage/>
      </PrivateRoutes>
     
      }/>
      <Route path="/cart" element={
       <PrivateRoutes>
      <AddToCard/>
      </PrivateRoutes>
      }/>
      <Route path="/a/dashboard" element={<Dashboard/>}/>
      <Route path="/a/AllProduct" element={<AllProduct/>}/>
      <Route path="/a/Edit/:id" element={<EditPage/>}/>
      <Route path="/a/users" element={<UserDetails/>}/>
      <Route path="/a/add-product" element={<AddProduct/>}/>
    
      <Route path="/a/setting" element={<Setting/>}/>

      <Route path="/payment" element={
      <PrivateRoutes>
 <Payment/>
      </PrivateRoutes>
     
      
      }/>
      <Route path="/address" element={
      <PrivateRoutes>
      <Address/>
      </PrivateRoutes>
      }/>

      
      <Route path="/about" element={<About/>}/>


      <Route path="/a/users/details/:id" element={<SingleUser/>}/>

      <Route path="*" element={<h1>Page not found</h1>}/>
    </Routes>
  )
}

export default AllRoutes
