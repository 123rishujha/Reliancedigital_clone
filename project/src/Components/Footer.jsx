import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue
  } from "@chakra-ui/react";
  import { ReactNode } from "react";
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        // bg={useColorModeValue('gray.50', 'gray.900')}
        backgroundColor="blue.800"
        color="white"
        // color={useColorModeValue('gray.700', 'gray.200')}
      >
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <ListHeader>PRODUCT CATEGORIES</ListHeader>
              <Link href={"#"}>smartphones</Link>
              <Stack direction={"row"} align={"center"} spacing={2}>
                <Link href={"#"}>laptops</Link>
              </Stack>
              <Link href={"#"}>Telivision</Link>
              <Link href={"#"}>Air conditioner</Link>
              <Link href={"#"}>Refrigerators</Link>
              <Link href={"#"}>Kitchen Appliances</Link>
              <Link href={"#"}>Accessories</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>SITE INFO</ListHeader>
              <Link href={"#"}>About reliance digital</Link>
              <Link href={"#"}>resQ services</Link>
              <Link href={"#"}>Site map</Link>
              <Link href={"#"}>Gift cards</Link>
              <Link href={"#"}>Contact Us</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>RESOURCE CENTRE</ListHeader>
              <Link href={"#"}>Product Reviews</Link>
              <Link href={"#"}>Buying Guides</Link>
              <Link href={"#"}>How Tos</Link>
              <Link href={"#"}>Featured Stories</Link>
              <Link href={"#"}>Events & Happenings</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>POLICIES</ListHeader>
              <Link href={"#"}>Terms of Use</Link>
              <Link href={"#"}>FAQs</Link>
              <Link href={"#"}>Cancellation and Return Policy</Link>
              <Link href={"#"}>Pricing and Payments Policy</Link>
              <Link href={"#"}>Shipping and Delivery Policy</Link>
              <Link href={"#"}>RelianceOne Loyalty Program T&C</Link>
              <Link href={"#"}>Caution Notice</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10} backgroundColor="blue.900">
          <Flex
            align={"center"}
            _before={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              mr: 8
            }}
            _after={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              ml: 8
            }}
          >
            Disclaimer
          </Flex>
  
          <Text pt={6} fontSize={"sm"} textAlign={"center"}>
            Product prices, offers and availability are subject to change from
            time to time. All prices are inclusive of taxes. Product colours &
            images are only for illustration and they may not exactly match with
            the actual product. Product specs are subject to change & may vary
            from actual product. While every care is taken to avoid inaccuracies
            in content, these are provided as is, without warranty of any kind.
          </Text>
          <Text pt={6} fontSize={"sm"} textAlign={"center"}>
            © 2022 Reliance Digital. All Rights Reserved.
          </Text>
        </Box>
      </Box>
    );
  }
  