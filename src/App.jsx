import { Route, Routes } from "react-router-dom";

import "./css/assets.css";
import "./css/buttons.css";
import "./css/contacUs.css";
import "./css/hero.css";
import "./css/main.css";
import "./css/textblock.css";
import "./css/keyservices.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import ContactUs from "./pages/contactUs/ContactUs";
import UsedParts from "./pages/usedParts/UsedParts";
/* import Repairs from "./pages/repairs/FlexibleScopeRepair.jsx"; */
import FlexibleScopeRepair from "./pages/repairs/FlexibleScopeRepair.jsx";
import Wholesale from "./pages/wholesale/Wholesale";
import Repairs from "./pages/repairs/Repairs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/wholesale" element={<Wholesale />} />
        <Route path="/repairs" element={<Repairs />} />
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
