import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const KeyService = (props) => {
  return (
    <div className={props.containerClass}>
      <FontAwesomeIcon icon={props.icon} className={props.iconClass} />
      <p className={props.textClass}>{props.text}</p>
    </div>
  );
};

export default KeyService;
