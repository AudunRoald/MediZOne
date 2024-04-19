import { Route, Routes } from "react-router-dom";

import "./css/assets.css";
import "./css/main.css";
import Home from "./pages/home/Home";
import Products from "./pages/Products";
import About from "./pages/about/About";
import ContactUs from "./pages/contactUs/ContactUs";
import UsedParts from "./pages/UsedParts";
import Repairs from "./pages/Repairs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/repairs" element={<Repairs />} />
        <Route path="/usedParts" element={<UsedParts />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
