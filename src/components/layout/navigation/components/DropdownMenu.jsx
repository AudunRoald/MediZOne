import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import ServicesDropdown from "./ServicesDropdown";

const DropdownMenu = (props) => {
  const [caret, setCaret] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const navigationCaretRight = (
    <FontAwesomeIcon icon={faCaretUp} className="navigationLinkIcon" />
  );

  const navigationCaretDown = (
    <FontAwesomeIcon icon={faCaretDown} className="navigationLinkIcon" />
  );

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <li
      className="navigationLink"
      onClick={() =>
        setCaret(!caret) &
        setDropdownOpen(!dropdownOpen) &
        setIsActive(!isActive)
      }
    >
      <FontAwesomeIcon icon={props.icon} className="navigationIcon" />
      <a className="navigationText">{props.text}</a>
      {caret ? navigationCaretRight : navigationCaretDown}
      {dropdownOpen && <ServicesDropdown ref={menuRef} />}
    </li>
  );
};

export default DropdownMenu;
/* onClick={() => setCaret(!caret)} */
/* onMouseEnter={() => setCaret(true) & setDropdownOpen(true)}
onMouseLeave={() => setCaret(false) & setDropdownOpen(false)} */

{
  /* <li
      className="navigationLink"
      onClick={() =>
        setCaret(!caret) &
        setDropdownOpen(!dropdownOpen) &
        setIsActive(!isActive)
      }
      onMouseEnter={() =>
        setCaret(false) & setDropdownOpen(true) & setIsActive(true)
      }
      onMouseLeave={() =>
        setCaret(true) &
        setTimeout(setDropdownOpen(false), 5000) &
        setIsActive(false)
      }
    >
      <FontAwesomeIcon icon={props.icon} className="navigationIcon" />
      <a className="navigationText">{props.text}</a>
      {caret ? navigationCaretRight : navigationCaretDown}
      {dropdownOpen && (
        <ServicesDropdown
          onMouseEnter={() => setDropdownOpen(true) & setIsActive(true)}
          onMouseLeave={() =>
            setCaret(false) & setDropdownOpen(false) & setIsActive(false)
          }
        />
      )}
    </li> */
}
