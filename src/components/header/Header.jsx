import MediZOneLogo from "../../assets/medizone_healthcare_logo.png";
import "../../css/header.css";

const Header = () => {
  return (
    <header>
      <img src={MediZOneLogo} alt="" className="logo" />
    </header>
  );
};

export default Header;
