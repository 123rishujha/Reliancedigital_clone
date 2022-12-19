import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Details from "../Pages/Details";
import Checkout from "../Pages/Checkout";
import ProductsPage from "../Pages/ProductsPage";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductsPage />} />
        <Route path="/smartphones" element={<h1>smartphons</h1>} />
        <Route path="/smartwatches" element={<h1>smartwatches</h1>} />
        <Route path="/laptops" element={<h1>laptops</h1>} />
        <Route path="/heater" element={<h1>heater</h1>} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<h1>Cart Page</h1>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/tv" element={<h1>Tv</h1>} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
