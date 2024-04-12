import { faHand, faWrench } from "@fortawesome/free-solid-svg-icons";
import NavigationLink from "./components/NavigationLink";

const ServicesDropdown = () => {
  return (
    <ul className="dropdownContainer">
      <NavigationLink to="/repairs" icon={faWrench} text="repairs" />
      <NavigationLink to="/secondHand" icon={faHand} text="second hand" />
    </ul>
  );
};

export default ServicesDropdown;
