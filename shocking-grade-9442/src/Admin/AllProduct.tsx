// src/App.tsx

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../Redux/AdminReducer/action';
import { Card, CardHeader, CardBody, CardFooter, ButtonGroup, Button, Divider, Stack, Heading ,Image,Text} from '@chakra-ui/react'
import { repeat } from 'lodash';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.data.data);
  const error = useSelector((state: any) => state.data.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"20px",paddingTop:"100px" ,}}>
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
  );
};

export default App;
