import CarouselBox from "../Components/Carousel/CarouselBox";
import { Image, Box, Text, Grid, GridItem, Stack } from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";
import ProductCarousel from "../Components/ProductCarousel/ProductCarousel";

//geting/importing data
import data from "../db.json";

let laptop = data.filter((elem) => {
  return elem.category === "laptop";
});
// console.log(laptop);

let watch = data.filter((elem) => {
  return elem.category === "watch";
});
// console.log(watch);

let mobile = data.filter((elem) => {
  return elem.category === "mobile";
});
// console.log(mobile)
let heater = data.filter((elem) => {
  return elem.category === "heater";
});
// console.log(heater)

let tv = data.filter((elem) => {
  return elem.category === "tv";
});
console.log(tv);

function Home() {
  return (
    <div style={{ marginTop: "120px", width: "100%" }}>
      {/* banner */}
      <NavLink to="/mobile">
        <Image
          minH="200px"
          w="100vw"
          src="https://www.reliancedigital.in/medias/Year-End-Sale-5000-Instant-Discount-Carousel-Banner-05-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNDcwODh8aW1hZ2UvanBlZ3xpbWFnZXMvaDkzL2hiNS85OTI4MTY1NTg5MDIyLmpwZ3w4NDk3ZDFhZTM1YzUxYTg3MDFiMWZkZjhmMGE0ZWI2ZWZmYjU0MWNmOGJkMTAzZTYwMTdlNjI5MGNjYzZiOTIx"
          alt="banner"
        />
      </NavLink>

      {/* carousel */}
      <Box minH="200px" mt="5px">
        <CarouselBox />
      </Box>
      <Box mt="10px" mb="5px" textAlign="left">
        <Text>
          TRENDING LAPTOPS |
          <NavLink style={{ color: "blue" }} to="/laptops">
            view All
          </NavLink>
        </Text>
        <ProductCarousel data={laptop} />
      </Box>

      {/* smartwatches */}
      <Box mt="40px" mb="5px" textAlign="left">
        <Text>
          TRENDING LAPTOPS |
          <NavLink style={{ color: "blue" }} to="/smartwatches">
            view All
          </NavLink>
        </Text>
        <ProductCarousel data={watch} />
      </Box>

      {/* GREAT DEALS ON ELECTRONICS */}

      <Box
        mt="40px"
        p="20px"
        textAlign="left"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      >
        <Text as="h6" fontSize={{ base: "xl", md: "2xl" }}>
          GREAT DEALS ON ELECTRONICS
        </Text>

        <Grid
          pt="10px"
          pb="10px"
          mt="10px"
          templateColumns={{ base: "repeat(2,1fr)", md: "repeat(3,1fr)" }}
          gap={6}
        >
          <GridItem m="auto">
            <NavLink to="/smartwatch">
              <Image
                src="https://www.reliancedigital.in/medias/Smartwatches-Small-Banners-01.jpg?context=bWFzdGVyfGltYWdlc3w0NDA0MnxpbWFnZS9qcGVnfGltYWdlcy9oNTAvaGRiLzk5MjgzNzA5MTMzMTAuanBnfGYwOWU2ZjQ3Y2Y0OWI2NmVhZGVkYWM2M2ZiMzQ4YTlhODRkZDY4ODZmODA1OGQyZWNiYWVhODNmNWM2YWMwMmY"
                alt="watch"
              />
            </NavLink>
          </GridItem>
          <GridItem m="auto">
            <NavLink to="/tv">
              <Image
                src="https://www.reliancedigital.in/medias/Realme-Smart-TV-Great-Deals-Banner-13-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w3NzY3MHxpbWFnZS9qcGVnfGltYWdlcy9oNzUvaDg2Lzk5MzExODY3NjU4NTQuanBnfDA5YzNlMTkwNmM0ZWI3ZGJlYjI5Y2E0ZmQ5M2M5YjNkZmZjZmVlMjBmOGU1ZGIwNDY3NjFhNTcwMWM4ZmFlOWI"
                alt="tv"
              />
            </NavLink>
          </GridItem>

          <GridItem m="auto">
            <NavLink to="/smartphones">
              <Image
                src="https://www.reliancedigital.in/medias/Samsung-M13-5G-Great-Deals-Banner-22-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wzNDUzN3xpbWFnZS9qcGVnfGltYWdlcy9oNDgvaGY3Lzk5MjM5MDIzNDExNTAuanBnfDdiZjliNDZlOWUxZDFjZDQ2MDkzYjdjZDZhNDVlNWI0MGYwNTAwOWJkOWM4MWUzMTUyYmNmZmRmZjk3NjIwYjk"
                alt="mobile"
              />
            </NavLink>
          </GridItem>

          <GridItem m="auto">
            <NavLink to="/audio">
              <Image
                src="https://www.reliancedigital.in/medias/True-Wireless-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w0NjcyOXxpbWFnZS9qcGVnfGltYWdlcy9oODAvaDljLzk5MTM3NzcyNTg1MjYuanBnfGY3MDIxZDZlYTBhMjEwYjQ4NGIzMmQwZjdjMzQ2M2FhYzIwYWE0NGE4MzFmYjRlZjQwNzFlZjk2NWMwMzYxN2Y"
                alt="audio"
              />
            </NavLink>
          </GridItem>

          <GridItem m="auto">
            <NavLink to="/laptops">
              <Image
                src="https://www.reliancedigital.in/medias/MackBook-Appliances-Small-banners.jpg?context=bWFzdGVyfGltYWdlc3w0Mjc0NXxpbWFnZS9qcGVnfGltYWdlcy9oNTYvaDkyLzk5MTkwODgzMjg3MzQuanBnfDcxYmMyMDMxMjdiMzUxYzE2NmJkYTU4ZDBlNTQxNjBkZWViYjQ1Mzc2Y2IyOWYwNTllODhkNmRlZjA0NjM3NmI"
                alt="laptop"
              />
            </NavLink>
          </GridItem>

          <GridItem m="auto">
            <NavLink to="/heater">
              <Image
                src="https://www.reliancedigital.in/medias/Smart-Home-Products-Great-Deals-Banner-22-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wzOTAxM3xpbWFnZS9qcGVnfGltYWdlcy9oMDYvaDMxLzk5MzExOTE5NDMxOTguanBnfDhiY2ZkOWE5YmQ3OWFkYmM2OWUwNjIwODQ4NGFkMWI4MDExZGQ5ZTIyNzkyMmZiMDM2ZDcyYjRkM2M4NmQ0MTA"
                alt="heater"
              />
            </NavLink>
          </GridItem>
        </Grid>
      </Box>

      {/* smartphones */}
      <Box
        mt="40px"
        mb="5px"
        padding="15px"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
        textAlign="left"
      >
        <Text>
          TRENDING SMARTPHONES |
          <NavLink style={{ color: "blue" }} to="/smartphones">
            view All
          </NavLink>
        </Text>
        <Stack direction={{ base: "column", md: "row" }} mt="20px">
          <Image
            w={{ base: "100%", md: "20%" }}
            src="https://www.reliancedigital.in/medias/iPhone-14-Producst-Carousel-27-10-2022.jpg?context=bWFzdGVyfGltYWdlc3wzMzgxMHxpbWFnZS9qcGVnfGltYWdlcy9oYzcvaGQxLzk5MTM3NzcxMjc0NTQuanBnfDA0NzFkZmIwYjVlMWZjZjUxZGY5MjA3NmVlMTdiNTY0ZjhmODU1NjkxY2Y2NDRjNjUxOTQ2MTc5Nzg5MjQxZjk"
            alt="watch"
          />
          <Box
            boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
            w={{ base: "100%", md: "80%" }}
          >
            <ProductCarousel data={mobile} />
          </Box>
        </Stack>
      </Box>

      {/* room heater */}
      <Box
        mt="40px"
        mb="5px"
        padding="15px"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
        textAlign="left"
      >
        <Text>
          TRENDING HEATER |
          <NavLink style={{ color: "blue" }} to="/heater">
            view All
          </NavLink>
        </Text>
        <Stack direction={{ base: "column", md: "row" }} mt="20px">
          <Box
            boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
            w={{ base: "100%", md: "80%" }}
          >
            <ProductCarousel data={heater} />
          </Box>
          <Image
            w={{ base: "100%", md: "20%" }}
            src="https://www.reliancedigital.in/medias/Best-Deals-in-Everyday-Appliances-Producst-Carousel-27-10-2022-02.jpg?context=bWFzdGVyfGltYWdlc3wxMDA2MDF8aW1hZ2UvanBlZ3xpbWFnZXMvaGVlL2hmYy85OTEzNzc3MTkyOTkwLmpwZ3xjYzI2MWQ3MmY5MjZhNTcyNzg2ZDQzY2UzZDMzODFjYzBhMDNhMWJiZjBiNWY2ZWQ4OGQ3NDVjODhkMTFlZjUz"
            alt="watch"
          />
        </Stack>
      </Box>

      {/* tv */}
      <Box
        mt="40px"
        mb="5px"
        padding="15px"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
        textAlign="left"
      >
        <Text>
          TRENDING TELEVISION |
          <NavLink style={{ color: "blue" }} to="/tv">
            view All
          </NavLink>
        </Text>
        <Stack direction={{ base: "column", md: "row" }} mt="20px">
          <Image
            w={{ base: "100%", md: "20%" }}
            src="https://www.reliancedigital.in/medias/Best-Deals-in-Everyday-Appliances-Producst-Carousel-27-10-2022-02.jpg?context=bWFzdGVyfGltYWdlc3wxMDA2MDF8aW1hZ2UvanBlZ3xpbWFnZXMvaGVlL2hmYy85OTEzNzc3MTkyOTkwLmpwZ3xjYzI2MWQ3MmY5MjZhNTcyNzg2ZDQzY2UzZDMzODFjYzBhMDNhMWJiZjBiNWY2ZWQ4OGQ3NDVjODhkMTFlZjUz"
            alt="watch"
          />

          <Box
            boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
            w={{ base: "100%", md: "80%" }}
          >
            <ProductCarousel data={tv} />
          </Box>
        </Stack>
      </Box>
    </div>
  );
}

export default Home;
