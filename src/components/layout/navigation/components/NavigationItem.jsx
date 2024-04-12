import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationItem = (props) => {
  return (
    <li className="navigationItem">
      <FontAwesomeIcon icon={props.icon} className="navigationIcon" />
      {props.text}
    </li>
  );
};

export default NavigationItem;
