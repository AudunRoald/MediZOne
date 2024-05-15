import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Key_service = (props) => {
  return (
    <div className="key_service_container">
      <FontAwesomeIcon icon={props.icon} className={props.iconClassName} />
      <p className={props.textClass}>{props.text}</p>
    </div>
  );
};

export default Key_service;
