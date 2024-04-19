import {
  faEnvelope,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ContactInfoOfficeBox from "./ContactInfoOfficeBox";
import OfficeTitle from "./OfficeTitle";

const OfficeNorway = () => {
  return (
    <>
      <OfficeTitle src="flag" alt="saudia arabian flag" text="Saudia Arabia" />
      <div className="contactOfficeInfoContainer">
        <ContactInfoOfficeBox
          icon={faHouse}
          alt="house icon"
          categoryTitle="addresse"
          categoryText="Al Marhabi Trading Est
          Office 201,2nd floor
          Kaki Building Mina Street
          Jeddah
          Saudi Arabia"
        />

        <ContactInfoOfficeBox
          icon={faPhone}
          alt="phone icon"
          categoryTitle="Telefon"
          categoryText="+966 55 226 0061 / +966 504540194"
        />

        <ContactInfoOfficeBox
          icon={faEnvelope}
          alt="envelope icon"
          categoryTitle="Email"
          categoryText="info@almarhabitrading.com
          "
        />

        <p>opening hours fix this</p>
      </div>
    </>
  );
};

export default OfficeNorway;
