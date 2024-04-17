import { faHand, faWrench } from "@fortawesome/free-solid-svg-icons";
import DropdownLink from "./DropdownLink";

const ServicesDropdown = () => {
  return (
    <ul
      className={`dropdownContainer ${open ? "dropdownActive" : "dropdownInactive"}`}
    >
      <DropdownLink to="/repairs" icon={faWrench} text="Repairs" />
      <DropdownLink to="/usedParts" icon={faHand} text="Used parts" />
    </ul>
  );
};

export default ServicesDropdown;
