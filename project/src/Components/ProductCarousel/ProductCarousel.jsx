
import { Link as NavLink } from "react-router-dom";


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function CarouselBox() {
  return (
    <Carousel showThumbs={false} infiniteLoop autoPlay>
      <div style={{ height: "250px" }}>
        <img
          style={{ height: "100%" }}
          src="https://www.reliancedigital.in/medias/Moto-G42-Carousel-Banner-09-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDMyNDN8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ2L2g2ZC85OTI5ODI3Mzg1Mzc0LmpwZ3w4MzEyODVmNTUyNWIwODNlNTA1YThjNTA4Njg5ZmU1YTU1ZjZlMzM5NWY5ODI0ZWNmOTAwYjY5M2RhNWVkOTky"
          alt="slide_img1"
        />
        <NavLink to="/mobile">
          <p
            className="legend"
            style={{ width: "100%", height: "100%", opacity: "0" }}
          >
            {/* <NavLink to='/laptop' style={{width:'100%'}} >more</NavLink> */}
          </p>
        </NavLink>
      </div>

      <div style={{ height: "250px" }}>
        <img
          style={{ height: "100%" }}
          src="https://www.reliancedigital.in/medias/Entertainment-Fest-Carousel-Banner-08-D.jpg?context=bWFzdGVyfGltYWdlc3wyMDEwMzl8aW1hZ2UvanBlZ3xpbWFnZXMvaGQxL2g2MS85OTI5MTgxNjI2Mzk4LmpwZ3w2MjQzNGNlODRiMmRkZmE1ZDA1Njg3MTNmM2ExMWE5ZDQ4MDJhN2VkYTBmOWVjMjg1MTdhNTM3YmNhM2E3YjM0"
          alt="slide_img1"
        />
        <NavLink to="/tv">
          <p
            className="legend"
            style={{ width: "100%", height: "100%", opacity: "0" }}
          >
            {/* <NavLink to='/laptop' style={{width:'100%'}} >more</NavLink> */}
          </p>
        </NavLink>
      </div>

      <div style={{ height: "250px" }}>
        <img
          style={{ height: "100%" }}
          src="https://www.reliancedigital.in/medias/Laptop-Carnival-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MTcwNXxpbWFnZS9qcGVnfGltYWdlcy9oM2UvaDJiLzk5MzA5MTgwNjgyNTQuanBnfDM0NDIxMjI1ZmE2NjQ1MDk4MWY2MjJlMjU2Mjg0YzAxNDViYTRiM2YzMTEyYjU5OGUwNTZlNDY4NzcxYzk3M2Y"
          alt="slide_img1"
        />
        <NavLink to="/laptop">
          <p
            className="legend"
            style={{ width: "100%", height: "100%", opacity: "0" }}
          >
            {/* <NavLink to='/laptop' style={{width:'100%'}} >more</NavLink> */}
          </p>
        </NavLink>
      </div>

      <div style={{ height: "250px" }}>
        <img
          style={{ height: "100%" }}
          src="https://www.reliancedigital.in/medias/Smartwatch-Carnival-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MTMyMnxpbWFnZS9qcGVnfGltYWdlcy9oYmYvaGFmLzk5Mjk4MzI1NjI3MTguanBnfDBkOTJjZDk5YTI1MTU3NWU5MDc1NGQ0ZDg2YjFlOWRhOGRhN2FiMzgxMDY3YWI5Y2M1NDk0MjNjZjU1MzNjYjY"
          alt="slide_img1"
        />
        <NavLink to="/smartwatch">
          <p
            className="legend"
            style={{ width: "100%", height: "100%", opacity: "0" }}
          >
            {/* <NavLink to='/laptop' style={{width:'100%'}} >more</NavLink> */}
          </p>
        </NavLink>
      </div>
    </Carousel>
  );
}

export default CarouselBox;
