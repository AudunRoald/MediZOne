import MediZOneLogo from "../../../assets/medizone_healthcare_logo.png";
import "./header.css";

const Header = () => {
  return (
    <header>
      <img src={MediZOneLogo} alt="" className="logo" />
    </header>
  );
};

export default Header;
