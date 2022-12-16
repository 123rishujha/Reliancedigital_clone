import Carousel from "../Components/Carousel/Carousel";
import { Image } from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";

function Home() {
  return (
    <div style={{ marginTop: "120px" }}>
      <NavLink to="/mobile">
        <Image
          minH="200px"
          src="https://www.reliancedigital.in/medias/Year-End-Sale-5000-Instant-Discount-Carousel-Banner-05-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNDcwODh8aW1hZ2UvanBlZ3xpbWFnZXMvaDkzL2hiNS85OTI4MTY1NTg5MDIyLmpwZ3w4NDk3ZDFhZTM1YzUxYTg3MDFiMWZkZjhmMGE0ZWI2ZWZmYjU0MWNmOGJkMTAzZTYwMTdlNjI5MGNjYzZiOTIx"
          alt="banner"
        />
      </NavLink>
      <Carousel />
    </div>
  );
}

export default Home;
