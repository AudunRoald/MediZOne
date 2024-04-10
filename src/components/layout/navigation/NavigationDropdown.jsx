import { faHand, faWrench } from "@fortawesome/free-solid-svg-icons";
import NavigationLink from "./components/NavigationLink";
import { useState } from "react";

const NavigationDropdown = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  console.log(handleClick);

  return (
    <ul
      onClick={handleClick}
      className={
        click
          ? "navigationDropdownContainerActive"
          : "navigationDropdownContainer"
      }
    >
      <NavigationLink to="/repairs" icon={faWrench} text="repairs" />
      <NavigationLink to="/secondHand" icon={faHand} text="second hand" />
    </ul>
  );
};

export default NavigationDropdown;
