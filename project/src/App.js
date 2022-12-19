import "./styles.css";
import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      {/* Footer */}
      <Footer />
    </div>
  );
}
