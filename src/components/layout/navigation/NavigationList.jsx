import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navigation.css";
import { NavLink } from "react-router-dom";
import {
  faEnvelope,
  faHouse,
  faInfoCircle,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";

const NavigationList = () => {
  return (
    <ul className="navigationList">
      <NavLink
        className="navigationLink"
        to="/"
        onClick={() => props.isMobile && props.closeMobileNavgation()}
      >
        {/* <FontAwesomeIcon icon={faHouse} className="navLinkIcon" /> */}
        home
      </NavLink>
      <NavLink
        className="navigationLink"
        to="/Products"
        onClick={() => props.isMobile && props.closeMobileNavgation()}
      >
        {/* <FontAwesomeIcon icon={faStethoscope} className="navLinkIcon" /> */}
        products
      </NavLink>
      <NavLink
        className="navigationLink"
        to="/About"
        onClick={() => props.isMobile && props.closeMobileNavgation()}
      >
        {/* <FontAwesomeIcon icon={faInfoCircle} className="navLinkIcon" /> */}
        about us
      </NavLink>
      <NavLink
        className="navigationLink"
        to="/ContactUs"
        onClick={() => props.isMobile && props.closeMobileNavgation()}
      >
        {/*         <FontAwesomeIcon icon={faEnvelope} className="navLinkIcon" />
         */}
        contact us
      </NavLink>
    </ul>
  );
};

export default NavigationList;
