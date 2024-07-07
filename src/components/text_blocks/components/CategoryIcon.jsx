import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoryIcon = (props) => {
  return (
    <FontAwesomeIcon
      icon={props.icon}
      alt={props.alt}
      className={props.iconClassName}
    />
  );
};

export default CategoryIcon;
