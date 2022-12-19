import {
    Box,
    Stack,
    VStack,
    Image,
    Input,
    Button,
    Text,
    List,
    ListItem,
    UnorderedList
  } from "@chakra-ui/react";
  import { useState, useEffect } from "react";
  import { Link as NavLink } from "react-router-dom";
  
  function Details() {
    const [loader, setLoader] = useState(true);
  
    let obj = JSON.parse(localStorage.getItem("details"));
    console.log(obj);
  
    useEffect(() => {
      setTimeout(() => {
        setLoader(false);
      }, 3000);
    }, []);
  
    const handleTotal = (value) => {
      localStorage.setItem("total", JSON.stringify(value));
    };
  
    return (
      <div style={{ marginTop: "100px" }}>
        {loader ? (
          <Image
            m="auto"
            src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif"
            alt="loader"
          />
        ) : (
          <Stack direction={{ base: "column", md: "row" }}>
            <Box
              w={{ base: "100%", md: "40%" }}
              p="20px"
              boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            >
              <Image
                src={obj.image}
                w={{ base: "100%", md: "100%" }}
                alt={obj.id}
              />
            </Box>
  
            <Box
              w={{ base: "100%", md: "60%" }}
              p="20px"
              textAlign="left"
              boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            >
              <Text as="h6" fontSize="xl">
                {obj.description}
              </Text>
              <Stack mt="10px" direction={{ base: "column", md: "row" }}>
                <List
                  w={{ base: "100%", md: "50%" }}
                  boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                  p="10px"
                >
                  <ListItem mt="10px">
                    <Text as="b">Gain more with offers (5)</Text>
                    <UnorderedList>
                      <ListItem>
                        7.5% Instant Discount (Max 5000) with Citibank
                        Credit/Debit Cards & EMI transactions.
                      </ListItem>
  
                      <ListItem>
                        Use coupon code "RDNEW750" and get Rs.750 off on Rs.15000
                        and Over.
                      </ListItem>
  
                      <ListItem>
                        Use coupon code "RDNEW300" and get Rs.300 off on Rs.7500
                        and Over.
                      </ListItem>
                      <ListItem>
                        Shop for Rs.20,000 & above and get instant discount Up To
                        Rs.5000,Use coupon codes "YES1000" for above 20,000
                        ,"YES2500" for above 50,000, "YES5000" for above
                        1,00,000..
                      </ListItem>
                    </UnorderedList>
                  </ListItem>
  
                  <ListItem mt="10px">
                    <Text as="b">Save more with EMI/Cashback (1) </Text>
                    <UnorderedList>
                      <ListItem>EMIs (Credit Cards) from ₹1631.96/month</ListItem>
                    </UnorderedList>
                  </ListItem>
  
                  <ListItem mt="10px">
                    <Text as="b">Warranty </Text>
                    <UnorderedList>
                      <ListItem>Warranty: 1 Year manufacturer warranty</ListItem>
                    </UnorderedList>
                  </ListItem>
  
                  <ListItem mt="10px">
                    <Text as="b">Key Features</Text>
                    <UnorderedList>
                      <ListItem>Processor: AMD Ryzen 5 3500U</ListItem>
  
                      <ListItem>RAM: 8 GB</ListItem>
  
                      <ListItem>Internal Storage: 256 GB</ListItem>
  
                      <ListItem>Storage Type: SSD</ListItem>
                    </UnorderedList>
                  </ListItem>
  
                  <ListItem mt="10px">
                    <Text as="b">Return Policy</Text>
                    <UnorderedList>
                      <ListItem>
                        Items are eligible for return within 7 Days of Delivery.
                      </ListItem>
                      <ListItem>
                        All accessories, product & packaging need to be returned
                        in original condition.
                      </ListItem>
                    </UnorderedList>
                  </ListItem>
                </List>
  
                {/* ${Math.ceil(elem.price * x)} */}
                {/* add to card and buynow */}
                <VStack
                  p="10px"
                  // border='1px solid red'
                  textAlign="left"
                  boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                  justifyContent="flex-start"
                  w={{ base: "100%", md: "50%" }}
                >
                  {/* deal price */}
                  <Text w="100%" fontSize="xl" display="flex" gap={1}>
                    Deal Price:
                    <Text as="b" ml="4px" fontSize="2xl" color="blue">
                      ${obj.price}
                    </Text>
                  </Text>
  
                  {/* real MRP price */}
                  <Text w="100%" fontSize="xl" display="flex" gap={1}>
                    M.R.P:
                    <Text as="s" fontSize="xl" ml="4px">
                      ${Math.ceil(obj.price * obj.x)}
                    </Text>
                    <span>(Inclusive of all taxes)</span>
                  </Text>
  
                  {/* You save */}
                  <Text
                    w="100%"
                    color="green"
                    fontSize="xl"
                    display="flex"
                    gap={1}
                  >
                    You Save:
                    <Text fontSize="xl" ml="4px">
                      ${Math.ceil(obj.price * obj.x) - obj.price}
                    </Text>
                  </Text>
  
                  <Text as="b" w="100%" fontSize="xl">
                    FREE Shipping!
                  </Text>
  
                  <Input type="text" placeholder="Enter pin code" />
  
                  <Stack direction={{ base: "column", md: "row" }} gap={"7"}>
                    <Button
                      h="60px"
                      w="100%"
                      colorScheme="red"
                      _hover={{ backgroundColor: "blue" }}
                      onClick={() => handleTotal(obj.price)}
                    >
                      ADD TO CART
                    </Button>
                    <NavLink to="/checkout">
                      <Button
                        h="60px"
                        w="100%"
                        colorScheme="orange"
                        onClick={() => handleTotal(obj.price)}
                      >
                        BUY NOW
                      </Button>
                    </NavLink>
                  </Stack>
                </VStack>
              </Stack>
            </Box>
          </Stack>
        )}
      </div>
    );
  }
  
  export default Details;
  