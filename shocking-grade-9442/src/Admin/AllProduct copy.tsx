// src/App.tsx

import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../Redux/AdminReducer/action';
import { Card, CardHeader, CardBody, CardFooter, ButtonGroup, Button, Divider, Stack, Heading ,Image,Text, useStatStyles} from '@chakra-ui/react'
import { repeat } from 'lodash';
import Navbar from './AdminNavbar';
import styled from "styled-components";


const App: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.data.data.data);
  const error = useSelector((state: any) => state.data.error);
  const total = useSelector((state: any) => state.data.totalPages)

  console.log(total);
  
  const [page,setpage]=useState(1)

  console.log(total);


  useEffect(() => {
    dispatch(fetchData(page));
  }, [dispatch,page]);



  if (error) {
    return <div>Error: {error}</div>;
  }

const handlePageChange=(value:number)=>{
  setpage(page+value)
}




  return (
<div>


<Navbar/>


{/**************** pagination ************/}
<br /><br />
<div style={{width:"90%",margin:"0 auto",display:"flex"}}>
<Button colorScheme='teal' size='sm' isDisabled={page==1} onClick={()=>handlePageChange(-1)}>
    prev
  </Button>
    <h3>{page}</h3>
    <Button colorScheme='teal' size='sm' isDisabled={page==1} onClick={()=>handlePageChange(1)}>
    next
  </Button>
</div>


{/***************  pagination-end *****************/}


 <div style={{width:"90%",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"20px",paddingTop:"100px" ,}}>
      {data.map((item: any) => (
        <div key={item.id}>
      <Card maxW='sm' >
  <CardBody>
    <Image style={{width:"300px",height:"200px",paddingLeft:"80px"}}
      src={item.avatar}
      alt='Green double couch with wooden legs'
      borderRadius='sm'
    />
    <Stack mt='6' spacing='3'>
      <Heading style={{textAlign:"center"}} size='md'>Name: {item.name}</Heading>
      <Heading style={{textAlign:"center"}} size='sm'> Category:  {item.category}</Heading>
      <Heading style={{textAlign:"center"}} size='sm'>Brand:   {item.brand}</Heading>
      
      <Text style={{textAlign:"center"}}>
        About: {item.about}
      </Text>
      <Text color='blue.600' fontSize='sm' style={{textAlign:"center"}}>
      Price:  ${item.price}
      </Text>
      <Text color='blue.600' fontSize='sm' style={{textAlign:"center"}}>
       Rating :{item.rating}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue' style={{marginLeft:"60px"}}>
        Edit
      </Button>
      <Button variant='ghost' colorScheme='blue' style={{marginLeft:"30px"}}>
        Delete
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
        
        </div>
      ))}
    </div>
    </div>
  );
};

export default App;


