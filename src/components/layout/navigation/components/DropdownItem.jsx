import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropdownItem = (props) => {
  return (
    <li className="navigationLink">
      <FontAwesomeIcon icon={props.icon} className="navigationIcon" />
      <a>{props.text}</a>
    </li>
  );
};

export default DropdownItem;
