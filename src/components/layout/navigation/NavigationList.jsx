import {
  faEnvelope,
  faHouse,
  faInfoCircle,
  faStethoscope,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

import "./navigation.css";
import NavigationLink from "./components/NavigationLink";
/* import NavigationDropdown from "./NavigationDropdown";
import { useState } from "react";
import NavigationItem from "./components/NavigationItem"; */

const NavigationList = () => {
  /*  const [navigationDropdown, setNavigationDropdown] = useState(false); */

  return (
    <ul className="navigationList">
      <NavigationLink to="/" end icon={faHouse} text="home" />
      <NavigationLink to="/products" icon={faStethoscope} text="products" />
      <NavigationLink to="/About" icon={faInfoCircle} text="about" />
      <NavigationLink to="/ContactUs" icon={faEnvelope} text="contact" />
    </ul>
  );
};

export default NavigationList;

{
  /* <ul className="navigationList">

<NavigationItem
  icon={faWrench}
  text="services"
  onClick={() => {
    !setNavigationDropdown;
  }}
>
  <NavigationDropdown />
</NavigationItem>

</ul> */
}
