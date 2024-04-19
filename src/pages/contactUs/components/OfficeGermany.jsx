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
      <OfficeTitle src="flag" alt="german flag" text="Germany" />
      <div className="contactOfficeInfoContainer">
        <ContactInfoOfficeBox
          icon={faHouse}
          alt="house icon"
          categoryTitle="addresse"
          categoryText="Medizone Healthcaare GmBH
          Allensteiner Str. 23
          44369 Dortmund
          Germany."
        />

        <ContactInfoOfficeBox
          icon={faPhone}
          alt="phone icon"
          categoryTitle="Telefon"
          categoryText="+49 176 3203 7041"
        />

        <ContactInfoOfficeBox
          icon={faEnvelope}
          alt="envelope icon"
          categoryTitle="Email"
          categoryText="info@medizonehealthcare.de"
        />

        <p>opening hours fix this</p>
      </div>
    </>
  );
};

export default OfficeNorway;
