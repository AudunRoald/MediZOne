import {
  faClock,
  faEnvelope,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ContactInfoOfficeBox from "./CategoryInfoBox";
import OfficeTitle from "./OfficeTitle";
import FlagSaudiArabia from "../../../assets/flag_saudi-arabia.png";
import CategoryInfoBox from "./CategoryInfoBox";

const OfficeNorway = () => {
  return (
    <div className="contactOfficeContainer">
      <div className="officeTitleBox">
        <OfficeTitle
          src={FlagSaudiArabia}
          alt="saudia arabian flag"
          text="Saudia Arabia"
        />
      </div>
      <br />
      <div>
        <CategoryInfoBox
          icon={faHouse}
          alt="house icon"
          categoryTitle="addresse"
          categoryText="Al Marhabi Trading Est
          Office 201,2nd floor
          Kaki Building Mina Street
          Jeddah
          Saudi Arabia"
        />

        <CategoryInfoBox
          icon={faPhone}
          alt="phone icon"
          categoryTitle="Telefon"
          categoryText="+966 55 226 0061 / +966 504540194"
        />

        <CategoryInfoBox
          icon={faEnvelope}
          alt="envelope icon"
          categoryTitle="Email"
          categoryText="info@almarhabitrading.com
          "
        />

        <CategoryInfoBox
          icon={faClock}
          alt="envelope icon"
          categoryTitle="opening hours"
          categoryText="Mandag - Fredag"
          categoryTime="08:00 - 17:00"
        />
      </div>
    </div>
  );
};

export default OfficeNorway;
