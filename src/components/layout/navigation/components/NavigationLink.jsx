import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavigationLink = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <NavLink className="navigationLink" onClick={() => setIsActive(!isActive)}>
      <FontAwesomeIcon icon={props.icon} className="navLinkIcon" />
      {props.text}
    </NavLink>
  );
};

export default NavigationLink;

/* <NavLink
      className={
        isActive
          ? "navigationDropdownContainerActive"
          : "navigationDropdownContainer"
      } onClick={() => props.isMobile && props.closeMobileNavgation() &&setIsActive(isActive)>
      <FontAwesomeIcon icon={props.icon} className="navLinkIcon" />
      {props.text}
    </NavLink></NavLink> */