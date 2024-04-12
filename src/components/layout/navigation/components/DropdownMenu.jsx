import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const DropdownMenu = (props) => {
  const [open, setOpen] = useState(false);

  const navigationCaretRight = (
    <FontAwesomeIcon icon={faCaretRight} className="navigationLinkIcon" />
  );

  const navigationCaretDown = (
    <FontAwesomeIcon icon={faCaretDown} className="navigationLinkIcon" />
  );

  return (
    <ul className="dropdownMenu" onClick={() => setOpen(!open)}>
      <FontAwesomeIcon icon={props.icon} className="navigationIcon" />
      <a className="navigationText">{props.text}</a>
      {open ? navigationCaretDown : navigationCaretRight}
    </ul>
  );
};

export default DropdownMenu;
