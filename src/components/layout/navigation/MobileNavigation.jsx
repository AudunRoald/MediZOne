import { useState } from "react";
import NavigationList from "./NavigationList";
import "./navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const MobileNavgation = (props) => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <FontAwesomeIcon
      icon={faBars}
      className="Hamburger"
      onClick={() => setOpen(!open)}
    />
  );

  const hamburgerIconClosed = (
    <FontAwesomeIcon
      icon={faX}
      className="Hamburger"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileNavgation = () => setOpen(!open);

  return (
    <ul className="mobileNavigation">
      {open ? hamburgerIconClosed : hamburgerIcon}
      {open && (
        <NavigationList
          isMobile={true}
          closeMobileNavgation={closeMobileNavgation}
        />
      )}
    </ul>
  );
};

export default MobileNavgation;
