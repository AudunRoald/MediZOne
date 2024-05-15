import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Servicepoint_info = (props) => {
  return (
    <div className={props.className}>
      <div className="servicepoint_title">
        <h3 className={props.titleClass}>{props.title}</h3>
        <p className={props.textClass}>{props.text}</p>
      </div>
      <div className={props.overlayClass}>
        <p>{props.overlay_text}</p>
        <FontAwesomeIcon icon={props.icon} className="point_arrow" />
      </div>
      <div></div>
    </div>
  );
};

export default Servicepoint_info;
