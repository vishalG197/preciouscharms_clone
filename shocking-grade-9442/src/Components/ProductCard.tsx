import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export default function ProductCard({id,price,about,brand,avatar,name}:any) {
  // const isAuth = useSelector((store) => store.authReducer.isAuth);
  return (
    <div key={id} className='product'>
         <Link to={`/product/:name/${id}`}> <img src={avatar} alt={name} style={{ width: "200px" }} /></Link>
          {/* <p>Name: {ele.name}</p> */}
          <p>Price: {price}</p>
          <p>About: {about}</p>
          <p>Brand: {brand}</p>
          {/* <Button colorScheme='teal' variant='outline'>Add To Cart</Button> */}
          
        </div>
  )
}
