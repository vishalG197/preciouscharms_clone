import { Checkbox, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

export default function SideBarWatches() {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialBrand = searchParams.getAll("brand");
    const initalOrder = searchParams.get("order");
    const initalSearch=searchParams.getAll("search")
    // const [gender, setGender] = useState(initialGender || []);
    const [brand, setBrand] = useState(initialBrand|| []);
    const [order, setOrder] = useState(initalOrder || "");
    const [search,setSearch]=useState("")
  // console.log(order,"Category")
  console.log(search)
    useEffect(() => {
      const params = {
        brand,
        order,
      };
   if(search){
    params.search=search
   }
  
      setSearchParams(params);
    }, [ brand, order,search]);
  
   
  
    const handleBrand = (e) => {
      const { value } = e.target;
      let newBrand = [...brand];
      if (newBrand.includes(value)) {
        newBrand = newBrand.filter((el) => el !== value);
      } else {
        newBrand.push(value);
      }
      setBrand(newBrand);
    };
    const handleSearch=(e)=>{
      setSearch(e.target.value)
    }
  
    const handleOrder = (e) => {
      setOrder(e.target.value);
    };
  
    const handleReset = () => {
      setBrand([]);
      setOrder("");
      
    };
  return (
    <SidebarContainer>

    <InputGroup>
          <Input
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleSearch}
          />
        </InputGroup>
          <Section>
            <h3>Filter By Brands</h3>
            <CheckboxGroup>
              <CheckboxLabel>
                <input
                  type="checkbox"
                  value={"Rolex"}
                  onChange={handleBrand}
                  checked={brand.includes("Rolex")}
                />
                Rolex
              </CheckboxLabel>
    
              <CheckboxLabel>
                <input
                  type="checkbox"
                  value={"OMEGA"}
                  onChange={handleBrand}
                  checked={brand.includes("OMEGA")}
                />
                Omega
              </CheckboxLabel>
    
              <CheckboxLabel>
                <input
                  type="checkbox"
                  value={"MEISTERSINGER"}
                  onChange={handleBrand}
                  checked={brand.includes("MEISTERSINGER")}
                />
                Meistersinger
              </CheckboxLabel>
    
              <CheckboxLabel>
                <input
                  type="checkbox"
                  value={"LOUIS MOINET"}
                  onChange={handleBrand}
                  checked={brand.includes("LOUIS MOINET")}
                />
                Louis Moinet
              </CheckboxLabel>
    
              <CheckboxLabel>
                <input
                  type="checkbox"
                  value={"GRAND SEIKO"}
                  onChange={handleBrand}
                  checked={brand.includes("GRAND SEIKO")}
                />
                Grand Seiko
              </CheckboxLabel>
    
              <CheckboxLabel>
                <input
                  type="checkbox"
                  value={"FREDERIQUE CONSTANT"}
                  onChange={handleBrand}
                  checked={brand.includes("FREDERIQUE CONSTANT")}
                />
                Frederique Constant
              </CheckboxLabel>
    
              <CheckboxLabel>
                <input
                  type="checkbox"
                  value={"BOVET"}
                  onChange={handleBrand}
                  checked={brand.includes("BOVET")}
                />
                Bovet
              </CheckboxLabel>
    
              <CheckboxLabel>
                <input
                  type="checkbox"
                  value={"ALPINA"}
                  onChange={handleBrand}
                  checked={brand.includes("ALPINA")}
                />
                Alpina
              </CheckboxLabel>
    
            </CheckboxGroup>
          </Section>
    
          <Section>
            <h3>Sort By Discount</h3>
            <RadioGroup onChange={handleOrder}>
              <div className="radio">
              <RadioButton>
                <input  type="radio"
                name="sort"
                value={"asc"}
                checked={order === "asc"}/>
              </RadioButton>
              <RadioLabel>Ascending</RadioLabel>
              </div>
    
              <div className="radio">
                <RadioButton>
                <input type="radio"
                name="sort"
                value={"desc"}
                checked={order === "desc"} />
                </RadioButton>
              <RadioLabel>Descending</RadioLabel>
              </div>
            </RadioGroup>
          </Section>
    
          <Button onClick={handleReset}>Reset</Button>
        </SidebarContainer>
      );
    };
    
    const SidebarContainer = styled.div`
      padding: 0 10px;
      border-right: 1px solid gray;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    
      .radio{
        display: flex;
        gap: 10px;
      }
    `;
    
    const Section = styled.div`
      margin-bottom: 10px;
    `;
    
    const CheckboxGroup = styled.div`
      display: flex;
      flex-direction: column;
      gap: 8px;
    `;
    
    const CheckboxLabel = styled.label`
      display: flex;
      align-items: center;
      gap: 2px;
    `;
    
    const RadioGroup = styled.div`
      display: flex;
      flex-direction: column;
      gap: 8px;
    `;
    
    const RadioLabel =styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    `;
    
    const RadioButton =styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    `;
    
    
    const Button = styled.button`
      background-color: #f44336;
      color: white;
      border: none;
      padding: 8px 16px;
      font-weight: bold;
      cursor: pointer;
    
      &:hover {
        background-color: #d32f2f;
      }
    `;
    