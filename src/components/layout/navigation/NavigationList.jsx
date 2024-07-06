import {
  faEnvelope,
  faHouse,
  faInfoCircle,
  faStethoscope,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

import "./navigation.css";
import NavigationLink from "./components/NavigationLink";
import DropdownMenu from "./components/DropdownMenu";

const NavigationList = () => {
  return (
    <ul className="navigationList">
      <NavigationLink to="/" icon={faHouse} text="Home" />
      <NavigationLink to="/products" icon={faStethoscope} text="Products" />
      {/* <DropdownMenu icon={faWrench} text="Services" /> */}

      <NavigationLink to="/about" icon={faInfoCircle} text="About" />
      <NavigationLink to="/contactUs" icon={faEnvelope} text="Contact" />
    </ul>
  );
};

export default NavigationList;
