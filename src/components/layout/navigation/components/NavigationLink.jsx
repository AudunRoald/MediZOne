import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavigationLink = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <NavLink
      to={props.to}
      className="navigationLink"
      onClick={() => setIsActive(!isActive)}
    >
      <FontAwesomeIcon icon={props.icon} className="navigationIcon" />
      {props.text}
    </NavLink>
  );
};

export default NavigationLink;
