import React from 'react'
import Navbar from './AdminNavbar'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'


const EditPage = () => {
  return (
    <div style={{backgroundColor:"rgb(54, 69, 79)"}}>
      <Navbar />
      <div style={{paddingTop:"50px",width:"1000px",paddingLeft:"300px",}}>
      <FormControl isRequired  style={{paddingLeft:"200px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"20px",backgroundColor:"white"}}>
      <FormLabel>Image</FormLabel>
        <Input placeholder='Url' width='20.5rem' />
        <FormLabel>Name</FormLabel>
        <Select placeholder='Select Name' width='20.5rem'>
          <option value="jewelry">Jewelry</option>
          <option value="watches">Watches</option>
        </Select>
        <br />
        
        <FormLabel>Category</FormLabel>
        <Select placeholder='Select Category' width='20.5rem'>
          <option value="rings">Rings</option>
          <option value="bracelets">Bracelets</option>
          <option value="bracelets">Earrning</option>
          <option value="Necklaces & Pendants">Necklaces & Pendants</option>
          <option value="Accessories">Accessories</option>
          <option value="Men's Jewelry">Men's Jewelry</option>
        </Select>
        <br />
        
        <FormLabel>Brands</FormLabel>
        <Select placeholder='Select Brands' width='20.5rem'>
          <option value="Messica">Messica</option>
          <option value="Cartier">Cartier</option>
          <option value="Garrand">Garrand</option>
          <option value="David Yuman">David Yuman</option>
          <option value="Johan Hardy">Johan Hardy</option>
          <option value="Graff">Graff</option>
          <option value="Roberto Coin">Roberto Coin</option>
          <option value="Mikimoto">Mikimoto</option>
          <option value="Tiffani">Tiffani</option>
        </Select>
        <br />
        
        <FormLabel>About</FormLabel>
        <Input placeholder='about' width='20.5rem' />
        <br />
        <br />
        <FormLabel>Price</FormLabel>
        <NumberInput max={50} min={10} width='20.5rem'>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <br />
        
        <FormLabel>Rating</FormLabel>
        <NumberInput max={50} min={10} width='20.5rem'>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

    </div>
    </div>
  )
}

export default EditPage
