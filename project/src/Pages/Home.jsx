import CarouselBox from "../Components/Carousel/CarouselBox";
import { Image, Box } from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";
import ProductCarousel from "../Components/ProductCarousel/ProductCarousel";

//geting/importing data
import data from "../db.json";

let watchesData = data.filter((elem) => {
  return elem.category === "watch";
});

// console.log(watchesData);

function Home() {
  return (
    <div style={{ marginTop: "120px" }}>
      <NavLink to="/mobile">
        <Image
          minH="200px"
          w="100vw"
          src="https://www.reliancedigital.in/medias/Year-End-Sale-5000-Instant-Discount-Carousel-Banner-05-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNDcwODh8aW1hZ2UvanBlZ3xpbWFnZXMvaDkzL2hiNS85OTI4MTY1NTg5MDIyLmpwZ3w4NDk3ZDFhZTM1YzUxYTg3MDFiMWZkZjhmMGE0ZWI2ZWZmYjU0MWNmOGJkMTAzZTYwMTdlNjI5MGNjYzZiOTIx"
          alt="banner"
        />
      </NavLink>

      <Box minH="200px" mt='5px'>
        <CarouselBox />
      </Box>
      
      <Box mt='5px'>
        <ProductCarousel data={watchesData} />
      </Box>
    </div>
  );
}

export default Home
