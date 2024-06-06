import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link to={props.to} className="button-wrapper">
      <button className={props.buttonClass}>{props.buttonText}</button>
    </Link>
  );
};

export default Button;
