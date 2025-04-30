import Styles from "../Pages/ProductPage.module.css"
import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Redux/ProductReducer/action';
import { styled } from 'styled-components';
import { Button, Skeleton, SkeletonCircle, SkeletonText, Box, useToast } from '@chakra-ui/react';
import { SideBarJewelry } from '../Components/SideBarJewelry';
import { useParams, useSearchParams } from 'react-router-dom';
import { MdProductionQuantityLimits } from 'react-icons/md';
import banner from '../home-image/banner11.jpg';
import SideBarWatches from '../Components/SideBarWatches';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import Navbar from '../Components/Navbar';
import ProductImg from '../product-image/ProductImg.png'
import Footer from '../Components/Footer';
import Pagination from '../Components/Pegination';
import Panel from "../Components/Panel";
import { motion } from 'framer-motion';

const ProductPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const toast = useToast();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const width = window.innerWidth || document.documentElement.clientWidth || 
  document.body.clientWidth;
  const height = window.innerHeight|| document.documentElement.clientHeight|| 
  document.body.clientHeight;
  
  const [toggle, setToggle] = useState(false);
  const { name } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  let paramsObj = {};
  if (name == "Jewelry" || "Watches") {
    paramsObj = {
      params: {
        _limit: 12,
        _page: page,
        name: name,
        category: searchParams.getAll("category"),
        brand: searchParams.getAll("brand"),
        _sort: searchParams.get("order") && "price",
        _order: searchParams.get("order"),
        q: searchParams.getAll("search"),
      },
    };
  } else {
    paramsObj = {
      params: {
        _limit: 12,
        _page: page,
        category: name,
        brand: searchParams.getAll("brand"),
        _sort: searchParams.get("order") && "price",
        _order: searchParams.get("order"),
        q: searchParams.getAll("search"),
      },
    };
  }

  let { products, isError, isLoading, totalPages } = useSelector((store: any) => {
    return {
      products: store.productReducer.products,
      isLoading: store.productReducer.isLoading,
      isError: store.productReducer.isError,
      totalPages: store.productReducer.totalPages
    }
  }, shallowEqual);

  useEffect(() => {
    setIsTransitioning(true);
    dispatch(getProducts(paramsObj))
      .then(() => {
        setIsTransitioning(false);
      })
      .catch(() => {
        toast({
          title: "Error loading products",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        setIsTransitioning(false);
      });
  }, [searchParams, page]);

  const LoadingSkeleton = () => (
    <Box padding="6" boxShadow="lg" bg="white" borderRadius="md">
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" />
      <Skeleton height="200px" mt="4" />
    </Box>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      <motion.img 
        src={ProductImg} 
        alt=""
        style={{width:"100%",height:"400px",objectFit:"cover"}}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />
      
      <div className={Styles.productsection}>
        {name == "Watches" ? 
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SideBarWatches />
          </motion.div>
          : 
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SideBarJewelry />
          </motion.div>
        }
      
        <motion.div 
          className={Styles.productlist}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {isError && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h1>Error loading products. Please try again.</h1>
            </motion.div>
          )}
          
          {isLoading ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
              {[...Array(12)].map((_, index) => (
                <LoadingSkeleton key={index} />
              ))}
            </div>
          ) : (
            products.length > 0 && products.map((ele: any) => (
              <motion.div
                key={ele.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard {...ele} />
              </motion.div>
            ))
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </motion.div>

      <div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default ProductPage;
