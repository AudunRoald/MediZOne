import { faHand, faWrench } from "@fortawesome/free-solid-svg-icons";
import NavigationLink from "./components/NavigationLink";
import DropdownLink from "./components/DropdownLink";

const ServicesDropdown = () => {
  return (
    <ul className="dropdownContainer">
      <DropdownLink to="/repairs" icon={faWrench} text="repairs" />
      <DropdownLink to="/secondHand" icon={faHand} text="second hand" />
    </ul>
  );
};

export default ServicesDropdown;
