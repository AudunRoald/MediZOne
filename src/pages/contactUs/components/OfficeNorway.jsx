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
      <OfficeTitle src="flag" alt="norwegian flag" text="norway" />
      <div className="contactOfficeInfoContainer">
        <ContactInfoOfficeBox
          icon={faHouse}
          alt="house icon"
          categoryTitle="addresse"
          categoryText="Henrich Gerners
                Gate 11, 1530 Moss Norway"
        />

        <ContactInfoOfficeBox
          icon={faPhone}
          alt="phone icon"
          categoryTitle="Telefon"
          categoryText="+47 919 22 655"
        />

        <ContactInfoOfficeBox
          icon={faEnvelope}
          alt="envelope icon"
          categoryTitle="Email"
          categoryText="info@medizonehealthcare.no"
        />
      </div>
    </>
  );
};

export default OfficeNorway;
