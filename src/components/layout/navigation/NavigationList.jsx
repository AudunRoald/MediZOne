import {
  faEnvelope,
  faHand,
  faHouse,
  faInfoCircle,
  faStethoscope,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

import "./navigation.css";
import NavigationLink from "./components/NavigationLink";
import { useState } from "react";
import DropdownMenu from "./components/DropdownMenu";
import DropdownItem from "./components/DropdownItem";
import ServicesDropdown from "./ServicesDropdown";
/* import NavigationDropdown from "./NavigationDropdown";
import { useState } from "react";
import NavigationItem from "./components/NavigationItem"; */

const NavigationList = () => {
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  /*   const toggleDropdown = () => {
    setOpen(!open); */

  /*   const toggleDropdown = () => console.log("This item was clicked"); */

  /* const clicked = console.log("This item was clicked"); */

  return (
    <ul className="navigationList">
      <NavigationLink to="/" icon={faHouse} text="home" />
      <NavigationLink to="/products" icon={faStethoscope} text="products" />
      <DropdownMenu icon={faWrench} text="services" />

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
