
import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Redux/ProductReducer/action';
import { styled } from 'styled-components';
import { Button } from '@chakra-ui/button';
import { SideBarJewelry } from '../Components/SideBarJewelry';
import { useParams, useSearchParams } from 'react-router-dom';
import { MdProductionQuantityLimits } from 'react-icons/md';
import banner from '../home-image/banner11.jpg';
import SideBarWatches from '../Components/SideBarWatches';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import Navbar from '../Components/Navbar';
import ProductImg from '../product-image/ProductImg.png'
const ProductPage = () => {
  const dispatch=useDispatch();
 const{name}=useParams()
//  console.log(name,"NAme")

  const [searchParams,setSearchParams]=useSearchParams()
  // console.log("order", searchParams.getAll("category"))

  
  let paramsObj={
    params:{
     
      category:searchParams.getAll("category"),
      brand:searchParams.getAll("brand"),
      _sort:searchParams.get("order")&&"price",
      _order:searchParams.get("order"),
      q:searchParams.getAll("search"),
    },
  };

  let {products,isError,isLoading}=useSelector((store:any)=>{
    return{
      products:store.productReducer.products,
      isLoading:store.productReducer.isLoading,
      isError:store.productReducer.isError
    }
  },shallowEqual);
if(name=="Jewelry"||"Watches"){
  products=products.filter((ele:any)=>ele.name==name)
}else{
  products=products.filter((ele:any)=>ele.category==name)
}
  

  useEffect(()=>{
    dispatch(getProducts(paramsObj))
      },[searchParams])
  // console.log(products)


  return (
    <div>
      <Navbar/>



      
      <img src={ProductImg} alt="" style={{height:"400px", width:"100%"}}/>
      <DIV>
        {name=="Watches"?  <div className="sidebar">
        <SideBarWatches/>
      </div>: <div className="sidebar">
        <SideBarJewelry/>
      </div> }
     

      <div className="product-list">
      {isError&& <h1>Error Occurs</h1>}
        {isLoading&& <h1>Loading...</h1>}
      { products.length>0&&
      products.map((ele:any)=>(
        <ProductCard key={ele.id} {...ele}/>
      ))}

      </div>
      </DIV>
       
      
    </div>
  )
}

const DIV=styled.div`
display: flex;
gap: 10px;
background-color:#f9f9f9;
.sidebar{
  margin-top: 30px;
  margin-bottom: 60px;
 
  width: 15%;
  margin-left: 10px;

}

.product-list{
  width: 85%;
  display: grid;
  grid-template-columns: repeat(4,1fr);
grid-gap: 40px;
margin: 10px;
margin-top: 30px;
  margin-bottom: 60px; 

}

@media screen and (min-device-width: 320px) and (max-device-width: 567px) { 

  display: flex;
  flex-direction: column;
  .sidebar{
 width: 100%;
 }

  .product-list{
 
  grid-template-columns: repeat(2,1fr);

  /* margin-left: 20%; */
}
}





`

export default ProductPage
