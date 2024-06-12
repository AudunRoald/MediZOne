import { Route, Routes } from "react-router-dom";

import "./css/assets.css";
import "./css/buttons.css";
import "./css/containers.css";
import "./css/main.css";
import "./css/textblock.css";
import "./css/serviceslider_circular.css";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import About from "./pages/about/About";
import ContactUs from "./pages/contactUs/ContactUs";
import UsedParts from "./pages/usedParts/UsedParts";
/* import Repairs from "./pages/repairs/FlexibleScopeRepair.jsx"; */
import FlexibleScopeRepair from "./pages/repairs/FlexibleScopeRepair.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/flexiblerepairs" element={<FlexibleScopeRepair />} />
        <Route path="/usedParts" element={<UsedParts />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </>
  );
}

export default App;

{
  /* <Route path="/repairs" element={<Repairs />} /> */
}
