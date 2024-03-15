import MediZOneLogo from "../../../assets/medizone_healthcare_logo.png";
import NavBar from "../navigation/NavBar";
import "./header.css";

const Header = () => {
  return (
    <header>
      <img src={MediZOneLogo} alt="" className="logo" />
      <NavBar />
    </header>
  );
};

export default Header;
