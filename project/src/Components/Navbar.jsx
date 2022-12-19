import { Link as NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";
import {
  SearchIcon,
  HamburgerIcon,
  ChevronDownIcon,
  CloseIcon
} from "@chakra-ui/icons";
import { BsCartFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";
import {
  Flex,
  Avatar,
  Input,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider
} from "@chakra-ui/react";

function Navbar() {
  const [display, setDisplay] = useState("-50%");

  const handlelocal = (value) => {
    localStorage.setItem("category", JSON.stringify(value));
  };

  return (
    <Flex width="100%" >
      <Flex
        direction="column"
        className={Styles.navbar_box_red_background}
        pos="fixed"
        top="0px"
        width="100%"
        zIndex="20"
        mb="-10px"
      >
        {/* navbar in desktop view, all parts  except blue tabs */}
        <Flex className={Styles.navbar_box}>
          <Flex gap="10px" align="center">
            <Button
              size="sm"
              p="0px 0px"
              display={{ base: "block", lg: "none" }}
              onClick={() => setDisplay("0%")}
            >
              <HamburgerIcon />
            </Button>

            {/* logo */}
            <NavLink to="/">
              <Avatar src="/Logo" name="logo" />
            </NavLink>
          </Flex>
          {/* search bar */}
          <Flex
            w="50%"
            display={["none", "none", "none", "flex"]}
            className={Styles.search_bar_box}
          >
            <Input
              className={Styles.search_bar}
              variant="unstyled"
              placeholder="find your favorite products"
              // disabled={true}
            />
            {/* <input className={Styles.search_bar}  /> */}
            <SearchIcon h="100%" boxSize={6} />
          </Flex>
          {/* cart icons */}
          <Flex display="flex" alignItems="center" gap={6}>
            <NavLink to="/cart">
              <Flex>
                <BsCartFill color="white" fontSize="25px" />
                <Text mt="10px" color="white">
                  Cart
                </Text>
              </Flex>
            </NavLink>
            {/* user icons */}
            <NavLink to="/login">
              <FaUserAlt
                display={["none", "none", "block", "block"]}
                fontSize="20px"
                color="white"
              />
            </NavLink>
          </Flex>
        </Flex>

        {/* search box in mobile view */}
        <Flex
          w="100%"
          className={Styles.search_bar_box}
          display={["flex", "flex", "flex", "none"]}
          marginBottom="30px"
        >
          <Input
            className={Styles.search_bar}
            variant="unstyled"
            placeholder="find your favorite products"
            // disabled={true}
          />
          {/* <input className={Styles.search_bar}  /> */}
          <SearchIcon h="100%" boxSize={6} />
        </Flex>

        {/* making tabs */}
        <Flex
          display={{ base: "none", lg: "flex" }}
          justifyContent="space-between"
          bgColor="blue"
          className={Styles.tabs_box}
        >
          {/* smartphones */}
          <div className={Styles.tabs}>
            <div className={Styles.heading}>
              MOBILE & TABLETS
              <ChevronDownIcon />
            </div>

            <div className={Styles.subtabs}>
              <div>
                <NavLink to="/products/mobile">
                  <p onClick={() => handlelocal("mobile")}>smartphones</p>
                </NavLink>
                <p onClick={() => handlelocal("watch")}>wearable Technology</p>
                <NavLink to="/products/watch">
                  <p onClick={() => handlelocal("mobile")}>
                    Top selling Smartwaches
                  </p>
                </NavLink>

                <NavLink to='/productsproducts/audio'>
                  <p onClick={() => handlelocal("mobile")}>Apple price drop</p>
                </NavLink>
                <p>wearable Technology</p>
              </div>
              <div>
                <p>wearable Technology</p>
                <p>Tables & eReaders</p>
                <p>Power Banks</p>
                <p>eSlates</p>
              </div>
            </div>
          </div>

          {/* smart tv */}
          <div className={Styles.tabs}>
            <div className={Styles.heading}>
              TELEVISION
              <ChevronDownIcon />
            </div>

            <div className={Styles.subtabs}>
              <div>
                <NavLink to='/products/tv'>
                  <p >smarttelevison</p>
                </NavLink>

                <NavLink to='/products/tv'>
                  <p >32 Inch TVs</p>
                </NavLink>

                <NavLink to='/products/tv'>
                  <p >43 Inch TVs</p>
                </NavLink>

                <NavLink to='/products/tv'>
                  <p >53 Inch Tvs</p>
                </NavLink>

                <NavLink to="/products/tv">
                  <p to='/products/tv'>Android TVs</p>
                </NavLink>
              </div>

              <div>
                <NavLink to='/products/tv'>
                  <p >smarttelevison</p>
                </NavLink>

                <NavLink to='/products/tv'>
                  <p >32 Inch TVs</p>
                </NavLink>

                <NavLink to='/products/tv'>
                  <p >43 Inch TVs</p>
                </NavLink>

                <NavLink to='/products/tv'>
                  <p >53 Inch Tvs</p>
                </NavLink>

                <NavLink to="/products/tv">
                  <p to='/products/tv'>Android TVs</p>
                </NavLink>
              </div>

            </div>
          </div>

          {/* audio sections */}
          <div className={Styles.tabs}>
            <div className={Styles.heading}>
              AUDIO
              <ChevronDownIcon />
            </div>

            <div className={Styles.subtabs}>
              <div>
                <NavLink to="/products/audio">
                  <p>Head phones & headSets</p>
                </NavLink>

                <NavLink to="/products/audio">
                  <p>Bluetooth</p>
                </NavLink>

                <NavLink to="/products/audio">
                  <p>true wireless</p>
                </NavLink>

                <NavLink to="/products/audio">
                  <p>bluetooth and neckbands</p>
                </NavLink>

                <NavLink to="/products/audio">
                  <p>On hear Headphones</p>
                </NavLink>
              </div>

              <div>
                <NavLink to="/products/audio">
                  <p>party speaker </p>
                </NavLink>

                <NavLink to="/products/audio">
                  <p>multi media</p>
                </NavLink>

                <NavLink to="/products/audio">
                  <p>soundbars</p>
                </NavLink>

                <NavLink to="/products/audio">
                  <p>smart speakers</p>
                </NavLink>

                <NavLink to="/products/audio">
                  <p>On hear Headphones</p>
                </NavLink>
              </div>
            </div>
          </div>

          {/* Home appliances water*/}
          <div className={Styles.tabs}>
            <div className={Styles.heading}>
              HOMEAPPLIANCES
              <ChevronDownIcon />
            </div>

            <div className={Styles.subtabs}>
              <div>
                <NavLink to="/products/heater">
                  <p>heater</p>
                </NavLink>

                <NavLink to="/products/heater">
                  <p>water heater</p>
                </NavLink>

                <NavLink to="/products/heater">
                  <p>room heater</p>
                </NavLink>

                <NavLink to="/products/heater">
                  <p>heating fan </p>
                </NavLink>

                <NavLink to="/products/heater">
                  <p>Gaygets</p>
                </NavLink>
              </div>

              <div>
                <NavLink to="/products/heater">
                  <p>water boider</p>
                </NavLink>

                <NavLink to="/products/heater">
                  <p>heater</p>
                </NavLink>
              </div>

              <div>
                <NavLink to="/products/heater">
                  <p>room heater</p>
                </NavLink>

                <NavLink to="/products/heater">
                  <p>gezer </p>
                </NavLink>

                <NavLink to="/products/heater">
                  <p>home heater</p>
                </NavLink>
              </div>
            </div>
          </div>

          <div className={Styles.tabs}>
            COMPUTER
            <ChevronDownIcon />
          </div>

          <div className={Styles.tabs}>
            CAMERAS
            <ChevronDownIcon />
          </div>

          <div className={Styles.tabs}>
            KITCHEN APPLIANCES
            <ChevronDownIcon />
          </div>

          <div className={Styles.tabs}>
            PERSONAL CARE
            <ChevronDownIcon />
          </div>

          <div className={Styles.tabs}>
            ACCESSORIES
            <ChevronDownIcon />
          </div>
        </Flex>

        {/* tabs in mobile view */}
        <Flex
          direction="column"
          className={Styles.side_navbar}
          // left={display}
          left={display}
          transition=".6s left"
        >
          <Button ml="auto" onClick={() => setDisplay("-50%")}>
            <CloseIcon />
          </Button>
          {/* mobile and tables */}
          <details>
            <summary>Mobile & Tables</summary>
            <NavLink to="/products/mobile">
              <p>smartphones</p>
            </NavLink>
            <NavLink to="/products/mobile">
              <p>Top selling Smartwaches</p>
            </NavLink>
            <NavLink to='/products/mobile'>
              <p>Apple price drop</p>
            </NavLink>
          </details>
          {/* mobile and tables */}
          <details>
            <summary>TELEVISON</summary>
            <NavLink to="/products/tv">
              <p>dish tv</p>
            </NavLink>
            <NavLink to="/products/tv">
              {" "}
              <p>32 Inch TVs</p>
            </NavLink>

            <NavLink to="/products/tv">
              {" "}
              <p>43 Inch TVs</p>
            </NavLink>

            <NavLink to="/products/tv">
              <p>53 Inch Tvs</p>{" "}
            </NavLink>

            <NavLink to="/products/tv">
              <p>Android TVs</p>
            </NavLink>
          </details>
          {/* Audio */}
          <details>
            <summary>AUDIO</summary>
            <NavLink to="/products/audio">
              {" "}
              <p>Head phones & headSets</p>
            </NavLink>
            <NavLink to="products/audio">
              {" "}
              <p>Bluetooth</p>{" "}
            </NavLink>
            <NavLink to="products/audio">
              {" "}
              <p>true wireless</p>{" "}
            </NavLink>
            <NavLink to="products/audio">
              {" "}
              <p>bluetooth and neckbands</p>{" "}
            </NavLink>
            <NavLink to="products/audio">
              {" "}
              <p>On hear Headphones</p>{" "}
            </NavLink>
          </details>

          {/* Home appliances */}
          <details>
            <summary>Home appliances</summary>
            <NavLink to="/products/heater">
              <p>heater</p>{" "}
            </NavLink>

            <NavLink to="/products/heater">
              {" "}
              <p>water heater</p>{" "}
            </NavLink>

            <NavLink to="/products/heater">
              {" "}
              <p>room heater</p>
            </NavLink>

            <NavLink to="/products/heater">
              <p>heating fan </p>
            </NavLink>

            <NavLink to="/products/heater">
              <p>Gaygets</p>
            </NavLink>
          </details>

          {/* computers */}
          <details>
            <summary>COMPUTERS</summary>
            <NavLink to="/products/computers">
              <p>computer</p>{" "}
            </NavLink>

            <NavLink to="/products/computers">
              {" "}
              <p>water </p>{" "}
            </NavLink>

            <NavLink to="/products/computers">
              {" "}
              <p>moniter </p>
            </NavLink>

            <NavLink to="/products/computers">
              <p>hard ware</p>
            </NavLink>

            <NavLink to="/products/computers">
              <p>mouse</p>
            </NavLink>
          </details>

          {/* computers */}
          <details>
            <summary>CAMERAS</summary>
            <NavLink to="/computers">
              <p>computer</p>{" "}
            </NavLink>

            <NavLink to="/computers">
              {" "}
              <p>water </p>{" "}
            </NavLink>

            <NavLink to="/computers">
              {" "}
              <p>moniter </p>
            </NavLink>

            <NavLink to="/computers">
              <p>hard ware</p>
            </NavLink>

            <NavLink to="/computers">
              <p>mouse</p>
            </NavLink>
          </details>

          {/* Kitech appliances */}
          <details>
            <summary>KITCHEN</summary>
            <NavLink to="/computers">
              <p>home</p>{" "}
            </NavLink>

            <NavLink to="/computers">
              {" "}
              <p>water </p>{" "}
            </NavLink>

            <NavLink to="/computers">
              {" "}
              <p>moniter </p>
            </NavLink>

            <NavLink to="/computers">
              <p>hard ware</p>
            </NavLink>

            <NavLink to="/computers">
              <p>mouse</p>
            </NavLink>
          </details>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Navbar;
