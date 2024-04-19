import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoryIcon = (props) => {
  return (
    <FontAwesomeIcon
      icon={props.icon}
      alt={props.alt}
      className="contactInfoIcon"
    />
  );
};

export default CategoryIcon;
