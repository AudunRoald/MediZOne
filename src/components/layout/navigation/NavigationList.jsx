import "./navigation.css";
import { NavLink } from "react-router-dom";

const NavigationList = () => {
  return (
    <>
      <NavLink className="navigationLink" to="/">
        hjem
      </NavLink>
      <NavLink className="navigationLink" to="/Products">
        produkter
      </NavLink>
      <NavLink className="navigationLink" to="/About">
        om medizone
      </NavLink>
      <NavLink className="navigationLink" to="/ContactUs">
        kontakt oss
      </NavLink>
    </>
  );
};

export default NavigationList;
