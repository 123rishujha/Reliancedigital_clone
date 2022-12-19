import data from "../db.json";
import { Grid, GridItem, Text, Badge,HStack,Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from 'react';

function ProductPage() {
  const [sort,setSort] = useState('asc'); 
    

  const { id } = useParams();

  console.log(id);

  let product = data.filter((elem) => {
    return elem.category === id;
  });

  const handleLocal = (elem) => {
    localStorage.setItem("details", JSON.stringify(elem));
  };


    if(sort==='asc'){
      product = product.sort((a,b)=>{
        if(a.price>b.price) return 1;
        if(a.price<b.price) return -1;
        return 0;  
      })
    }else{
      product = product.sort((a,b)=>{
        if(a.price>b.price) return -1;
        if(a.price<b.price) return 1;
        return 0;  
      })
    }


 
  let x = Math.floor(Math.random() * 10);
  if (x > 3) {
    x = 1.5;
  }
  else {
    if (x < 2) {
      x = 2;
    }
  }

  // console.log(x);

  return (
    <div style={{ marginTop: "100px" }}>
      <HStack mb='20px' mt='120px'>
        <Text>sort by:- </Text>
        <Button  onClick={()=>{
          setSort('asc')
          // handleSort('asc')
        }}>price(low to high)</Button>
        <Button onClick={()=>{
          setSort('des')
          // handleSort('des')
        }}>price(high to low)</Button>
      </HStack>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)"
        }}
        gap="7px"
        // border="1px solid red"
        boxShadow='md'
        w="80%"
        margin="auto"
        textAlign="left"
      >
        {product.map((elem) => {
          return (
            <GridItem h="400px" key={elem.id} boxShadow='md' p='20px'>
              <Link to="/details">
                <img
                  onClick={() => handleLocal({ ...elem, x })}
                  src={elem.image}
                  alt={elem.id}
                  style={{ height: "70%", width: "70%", margin: "auto" }}
                />
                <Text noOfLines="2" color="blue">
                  {elem.title}
                </Text>
                <Text>
                  M.R.P:
                  <Text as="s"> ${Math.ceil(elem.price * x)}</Text>
                </Text>
                <Text>
                  Deal Price:
                  <Text as="b"> ${elem.price}</Text>
                </Text>
                <Badge borderRadius="30%" p="0px 5px" colorScheme="green">
                  Offer Available
                </Badge>
                {/* <Text>{elem.id}</Text> */}
              </Link>
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
}

export default ProductPage;
