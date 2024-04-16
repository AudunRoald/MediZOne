import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ServicesDropdown from "../ServicesDropdown";

const DropdownMenu = (props) => {
  const [caret, setCaret] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(true);

  const navigationCaretRight = (
    <FontAwesomeIcon icon={faCaretRight} className="navigationLinkIcon" />
  );

  const navigationCaretDown = (
    <FontAwesomeIcon icon={faCaretDown} className="navigationLinkIcon" />
  );

  return (
    <li
      className="dropdownMenu"
      onClick={() => setDropdownOpen(!dropdownOpen) & setCaret(!caret)}
      onMouseEnter={() => setCaret(true) & setDropdownOpen(true)}
      onMouseLeave={() => setCaret(false) & setDropdownOpen(false)}
    >
      <FontAwesomeIcon icon={props.icon} className="navigationIcon" />
      <a className="navigationText">{props.text}</a>
      {caret ? navigationCaretDown : navigationCaretRight}
      {dropdownOpen && (
        <ServicesDropdown
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setCaret(false) & setDropdownOpen(false)}
        />
      )}
    </li>
  );
};

export default DropdownMenu;
/* onClick={() => setCaret(!caret)} */
/* onMouseEnter={() => setCaret(true) & setDropdownOpen(true)}
onMouseLeave={() => setCaret(false) & setDropdownOpen(false)} */
