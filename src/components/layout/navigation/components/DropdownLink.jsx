import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const DropdownLink = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <NavLink
      to={props.to}
      className="dropdownLink"
      onClick={() => setIsActive(!isActive)}
      onMouseEnter={() => setIsActive(true)}
    >
      <FontAwesomeIcon icon={props.icon} className="navigationIcon" />
      {props.text}
    </NavLink>
  );
};

export default DropdownLink;

/* <NavLink
      className={
        isActive
          ? "navigationDropdownContainerActive"
          : "navigationDropdownContainer"
      } onClick={() => props.isMobile && props.closeMobileNavgation() &&setIsActive(isActive)>
      <FontAwesomeIcon icon={props.icon} className="navLinkIcon" />
      {props.text}
    </NavLink></NavLink> */
