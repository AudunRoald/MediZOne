import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "../ContactUs.module.css";

const CategoryIcon = (props) => {
  return (
    <FontAwesomeIcon
      icon={props.icon}
      alt={props.alt}
      className={Styles.contactInfoIcon}
    />
  );
};

export default CategoryIcon;
