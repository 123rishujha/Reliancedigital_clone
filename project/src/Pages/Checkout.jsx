import {
    FormControl,
    Input,
    Button,
    VStack,
    Image,
    Box,
    HStack,
    Text,
    UnorderedList,
    ListItem,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Checkbox
  } from "@chakra-ui/react";
  
  import { useContext, useState } from "react";
  import { Link as NavLink } from "react-router-dom";
  import { AddresContext } from "../Context/ContextProvider";
  import { FaCheckSquare } from "react-icons/fa";
  import { MdEdit } from "react-icons/md";
  
  function Checkout() {
    const { location, handleAddress, handleReset } = useContext(AddresContext);
  
    const [data, setData] = useState({ name: "", address: "", mobile: "" });
    const [quantity, setQuantity] = useState(1);
    const [cash, setCash] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    let product = JSON.parse(localStorage.getItem("details"));
    let total = JSON.parse(localStorage.getItem("total"));
  
    // console.log(product);
    // console.log(total)
  
    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("checkout page", data);
      handleAddress(data);
      setData({ name: "", address: "", mobile: "" });
    };
  
    const handlChecked = (e) => {
      setCash(e.target.checked);
    };
    console.log(cash);
  
    return (
      <div style={{ marginTop: "100px" }}>
        {location.known ? (
          <Box>
            <Box textAlign="left" fontSize="20px" bgColor="#e7e9e9">
              <HStack>
                <FaCheckSquare color="#003380" fontSize="40px" />
                <Text as="b" color="gray.700">
                  SHIPPING ADDRESS
                </Text>
              </HStack>
              <VStack p="20px" align="flex-start" w="100%">
                <Text>{location.name}</Text>
                <Text>{location.address}</Text>
                <Text>Mobile:- +91 {location.mobile}</Text>
                <Button
                  fontSize="20px"
                  variant="ghost"
                  colorScheme="orange"
                  onClick={() => handleReset()}
                >
                  <MdEdit />
                  Change
                </Button>
              </VStack>
            </Box>
  
            {/* Details */}
            <Box textAlign="left" fontSize="20px" bgColor="#e7e9e9">
              <HStack>
                <FaCheckSquare color="#003380" fontSize="40px" />
                <Text as="b" color="gray.700">
                  ORDER DETAILS
                </Text>
              </HStack>
              <UnorderedList
                display="flex"
                flexWrap="wrap"
                justifyContent="space-between"
                ml="40px"
              >
                <ListItem>
                  <Text>{product.title}</Text>
                </ListItem>
                <ListItem>
                  <Text>Qtn:{quantity}</Text>
                </ListItem>
                <ListItem>
                  <Text>Price: ${product.price}</Text>
                </ListItem>
              </UnorderedList>
              <Text ml="30px">Total Price: ${total * quantity}</Text>
  
              <Button
                ml="30px"
                onClick={onOpen}
                variant="ghost"
                colorScheme="orange"
              >
                <MdEdit />
                Change
              </Button>
  
              {/* update quantity here --------------------------------  */}
              <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Update Quantity</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    {/* <Lorem count={2} /> */}
                    <VStack>
                      <Image src={product.image} h="50%" w="50%" />
                      <HStack>
                        <Button
                          disabled={quantity <= 1}
                          onClick={() => setQuantity(quantity - 1)}
                        >
                          -
                        </Button>
                        <Button>{quantity}</Button>
                        <Button onClick={() => setQuantity(quantity + 1)}>
                          +
                        </Button>
                      </HStack>
                    </VStack>
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              {/* modal ends here */}
            </Box>
  
            {/* Payment */}
            <Box textAlign="left" fontSize="20px" bgColor="white">
              <Text>Choose Payment methode</Text>
              <Checkbox
                onChange={(e) => handlChecked(e)}
                bgColor="white"
                colorScheme="green"
              >
                Cash on delivery
              </Checkbox>
            </Box>
            {cash ? (
              <NavLink to="/">
                <Button onClick={() => alert("Order Placed")}>
                  Order Placed
                </Button>
              </NavLink>
            ) : (
              <VStack>
                <Input required placeholder="enter UPI" />
                <Input required placeholder="enter amount" />
                <NavLink to="/">
                  <Button onClick={() => alert("Order Placed")}>
                    Order Placed
                  </Button>
                </NavLink>
              </VStack>
            )}
          </Box>
        ) : (
          <form onSubmit={handleSubmit}>
            <FormControl>
              <VStack>
                <Input
                  placeholder="Enter Your Name"
                  name="name"
                  value={data.name}
                  required
                  onChange={(e) => handleChange(e)}
                />
  
                <Input
                  placeholder="Enter Your Address"
                  name="address"
                  value={data.address}
                  required
                  onChange={(e) => handleChange(e)}
                />
  
                <Input
                  type="number"
                  placeholder="Enter Your Contact no"
                  name="mobile"
                  value={data.mobile}
                  required
                  onChange={(e) => handleChange(e)}
                />
  
                <Button type="submit" colorScheme="blue">
                  SUBMIT
                </Button>
              </VStack>
            </FormControl>
          </form>
        )}
      </div>
    );
  }
  
  export default Checkout;
  