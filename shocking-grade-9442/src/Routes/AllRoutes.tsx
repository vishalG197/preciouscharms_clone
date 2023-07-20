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

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/login" element={<Loginpage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/product" element={<ProductPage/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path="/product/:id" element={<SingleProductPage/>}/>
      <Route path="/cart" element={<AddToCard/>}/>
      <Route path="/a/dashboard" element={<Dashboard/>}/>
      <Route path="/a/AllProduct" element={<AllProduct/>}/>
      <Route path="/a/Edit/:id" element={<EditPage/>}/>
      <Route path="/a/users" element={<UserDetails/>}/>
      <Route path="/a/users/order/:id" element={<OrderDetails/>}/>
      <Route path="/a/users/cart/:id" element={<CartDetail/>}/>
      <Route path="/a/setting" element={<Setting/>}/>

      <Route path="*" element={<h1>Page not found</h1>}/>
    </Routes>
  )
}

export default AllRoutes
