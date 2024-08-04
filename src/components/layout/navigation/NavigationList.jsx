import {
  faEnvelope,
  faHouse,
  faInfoCircle,
  faStethoscope,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

import "../../../css/navigation.css";
import NavigationLink from "./components/NavigationLink";
import DropdownMenu from "./components/DropdownMenu";

const NavigationList = () => {
  return (
    <ul className="navigationList">
      <NavigationLink to="/" icon={faHouse} text="Home" />
      <NavigationLink to="/repairs" icon={faWrench} text="Equipment Repairs" />
      <NavigationLink
        to="/wholesale"
        icon={faStethoscope}
        text="Medical supplies"
      />
      <NavigationLink to="/about" icon={faInfoCircle} text="About" />
      <NavigationLink to="/contactUs" icon={faEnvelope} text="Contact" />
    </ul>
  );
};

export default NavigationList;
