import MediZOneLogo from "../../../assets/medizone_healthcare_logo.png";
import MobileNavgation from "../navigation/MobileNavigation";
import Navigation from "../navigation/Navigation";
import "./header.css";

const Header = () => {
  return (
    <header>
      <a href="/">
        <img src={MediZOneLogo} alt="" className="logo" />
      </a>
      <Navigation />
      <MobileNavgation />
    </header>
  );
};

export default Header;
