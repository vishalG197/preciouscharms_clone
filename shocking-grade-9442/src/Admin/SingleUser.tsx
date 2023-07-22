import React from 'react'
import Navbar from './AdminNavbar'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { UserObjectNew } from '../constrain'
import { Container, HStack, Heading, Text, Wrap, WrapItem } from '@chakra-ui/layout'
import { Card, CardBody } from '@chakra-ui/card'
import { Avatar, Spinner} from '@chakra-ui/react'
import {useEffect } from "react"
import { SingleUserFetch } from '../Redux/AdminReducer/action'


export const SingleUser = () => {
    const { id } = useParams();
  
    const single = useSelector((state: any) => state.data.singleUser);
    const isload = useSelector((state: any) => state.data.singleuserLoad);

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(SingleUserFetch(id))
    },[])
   
  
    const { name, email, password } = single;
   
 

    return (
      <div>
        <Navbar />

{

    isload?
    
    <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
        />
    :



        <Container maxW={"90%"} style={{ margin: "0 auto" }}>
          <br />
          <Card>
            <CardBody>
              <Wrap>
                <WrapItem>
                  <Avatar name={name} src="https://bit.ly/broken-link" />
                </WrapItem>
              </Wrap>
             
              <Heading as='h4' size='md'>
              {name}
             </Heading>

            </CardBody>
          </Card>
<br />
          <HStack spacing='24px'>
             <Card width={"50%"} style={{backgroundColor:"#c9edf5"}}>
           
              <CardBody>

              <Heading as='h4' size='md'>
                    Cart Details
             </Heading>

              




            </CardBody>
             </Card>

              <Card width={"50%"} style={{backgroundColor:"#a5f1b0"}}>
               <CardBody>

               <Heading as='h4' size='md'>
                    Order Details
                 </Heading>

               </CardBody>
                </Card>
            </HStack>


    </Container>
    }
      </div>
    );
  };