import Styles from "./Carousel.module.css";
import { useState, useEffect, useRef } from "react";
// import {Link as NavLink} from 'react-router-dom';
import { Link } from "react-router-dom";

function Carousel() {
  const [left, setLeft] = useState(`0`);
  const refslide = useRef(null);

  const handleRight = () => {
    if (left === -300) {
      setLeft(0);
    } else {
      setLeft(left - 100);
    }
  };

  const handleLeft = () => {
    if (left === 0) {
      setLeft(-300);
    } else {
      setLeft(left + 100);
    }
  };

  const startInterval = () => {
    refslide.current = setInterval(() => {
      setLeft((left) => {
        if (left === -300) {
          return 0;
        }
        return left - 100;
      });
      console.log("hello");
    }, 3000);
  };

  const stopInterval = () => {
    clearInterval(refslide.current);
    refslide.current = null;
  };

  useEffect(() => {
    if (refslide.current != null) return;
    startInterval();

    const cleanUp = () => {
      clearInterval(refslide.current);
    };

    return cleanUp;
  }, []);

  return (
    <div
      onMouseEnter={() => stopInterval()}
      onMouseLeave={() => startInterval()}
      position="relative"
    >
      <div
        className={Styles.container}
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div
          className={Styles.slider}
          style={{
            // position="absolute" left="20%"
            position: "absolute",
            left: `${left}%`,
            transition: "3."
          }}
        >
          <div className={Styles.slide}>
            <Link to="/latop">
              <img
                // className={Styles.slide}
                style={{ height: "100%", width: "100%" }}
                src="https://www.reliancedigital.in/medias/Laptop-Carnival-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MTcwNXxpbWFnZS9qcGVnfGltYWdlcy9oM2UvaDJiLzk5MzA5MTgwNjgyNTQuanBnfDM0NDIxMjI1ZmE2NjQ1MDk4MWY2MjJlMjU2Mjg0YzAxNDViYTRiM2YzMTEyYjU5OGUwNTZlNDY4NzcxYzk3M2Y"
                alt="slide_img1"
              />
            </Link>
          </div>

          <div className={Styles.slide}>
            <Link to="/mobile">
              <img
                // className={Styles.slide}
                style={{ height: "100%", width: "100%" }}
                src="https://www.reliancedigital.in/medias/Moto-G42-Carousel-Banner-09-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDMyNDN8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ2L2g2ZC85OTI5ODI3Mzg1Mzc0LmpwZ3w4MzEyODVmNTUyNWIwODNlNTA1YThjNTA4Njg5ZmU1YTU1ZjZlMzM5NWY5ODI0ZWNmOTAwYjY5M2RhNWVkOTky"
                alt="slide_img2"
              />
            </Link>
          </div>

          <div className={Styles.slide}>
            <Link to="/tv">
              <img
                // className={Styles.slide}
                style={{ height: "100%", width: "100%" }}
                src="https://www.reliancedigital.in/medias/Entertainment-Fest-Carousel-Banner-08-D.jpg?context=bWFzdGVyfGltYWdlc3wyMDEwMzl8aW1hZ2UvanBlZ3xpbWFnZXMvaGQxL2g2MS85OTI5MTgxNjI2Mzk4LmpwZ3w2MjQzNGNlODRiMmRkZmE1ZDA1Njg3MTNmM2ExMWE5ZDQ4MDJhN2VkYTBmOWVjMjg1MTdhNTM3YmNhM2E3YjM0"
                alt="slide_img3"
              />
            </Link>
          </div>

          <div className={Styles.slide}>
            <Link to="/smartwatch">
              <img
                // className={Styles.slide}
                style={{ height: "100%", width: "100%" }}
                src="https://www.reliancedigital.in/medias/Smartwatch-Carnival-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MTMyMnxpbWFnZS9qcGVnfGltYWdlcy9oYmYvaGFmLzk5Mjk4MzI1NjI3MTguanBnfDBkOTJjZDk5YTI1MTU3NWU5MDc1NGQ0ZDg2YjFlOWRhOGRhN2FiMzgxMDY3YWI5Y2M1NDk0MjNjZjU1MzNjYjY"
                alt="slide_img4"
              />
            </Link>
          </div>
        </div>
      </div>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => handleLeft()}
        className={Styles.left}
      >
        &lt;
      </div>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => handleRight()}
        className={Styles.right}
      >
        &gt;
      </div>
    </div>
  );
}

export default Carousel;
