import {
  faClock,
  faEnvelope,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import OfficeTitle from "./OfficeTitle";
import FlagGermany from "../../../assets/flag_germany.png";
import CategoryInfoBox from "./CategoryInfoBox";

const OfficeNorway = () => {
  return (
    <div className="contactOfficeContainer">
      <div className="officeTitleBox">
        <OfficeTitle src={FlagGermany} alt="german flag" text="Germany" />
      </div>
      <br />
      <div className="contactOfficeInfoContainer">
        <CategoryInfoBox
          icon={faHouse}
          alt="house icon"
          categoryTitle="addresse"
          categoryText="Medizone Healthcaare GmBH
          Allensteiner Str. 23
          44369 Dortmund
          Germany."
        />

        <CategoryInfoBox
          icon={faPhone}
          alt="phone icon"
          categoryTitle="Telefon"
          categoryText="+49 176 3203 7041"
        />

        <CategoryInfoBox
          icon={faEnvelope}
          alt="envelope icon"
          categoryTitle="Email"
          categoryText="info@medizonehealthcare.de"
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
