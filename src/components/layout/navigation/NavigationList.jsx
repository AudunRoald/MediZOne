import {
  faEnvelope,
  faHouse,
  faInfoCircle,
  faStethoscope,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

import "./navigation.css";
import NavigationLink from "./components/NavigationLink";
import ServicesDropdown from "./ServicesDropdown";
import { useState } from "react";
import DropdownMenu from "./components/DropdownMenu";
/* import NavigationDropdown from "./NavigationDropdown";
import { useState } from "react";
import NavigationItem from "./components/NavigationItem"; */

const NavigationList = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  return (
    <ul className="navigationList">
      <NavigationLink to="/" icon={faHouse} text="home" />
      <NavigationLink to="/products" icon={faStethoscope} text="products" />
      <DropdownMenu
        icon={faWrench}
        text="services"
        onClick={toggleDropdown}
      ></DropdownMenu>
      {open && <ServicesDropdown />}
      <NavigationLink to="/about" icon={faInfoCircle} text="about" />
      <NavigationLink to="/contactUs" icon={faEnvelope} text="contact" />
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
