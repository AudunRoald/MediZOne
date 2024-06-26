import {
  faEnvelope,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import OfficeTitle from "./OfficeTitle";
import FlagNorway from "../../../assets/flag_norway.png";
import CategoryInfoBox from "./CategoryInfoBox";
import Styles from "../ContactUs.module.css";

const OfficeNorway = () => {
  return (
    <div className={Styles.contact_office_container}>
      <div className={Styles.officeTitleBox}>
        <OfficeTitle src={FlagNorway} alt="norwegian flag" text="norway" />
      </div>
      <br />
      <div>
        <CategoryInfoBox
          icon={faHouse}
          alt="house icon"
          categoryTitle="addresse"
          categoryText="Henrich Gerners
                Gate 11, 1530 Moss Norway"
        />

        <CategoryInfoBox
          icon={faPhone}
          alt="phone icon"
          categoryTitle="Telefon"
          categoryText="+47 919 22 655"
        />

        <CategoryInfoBox
          icon={faEnvelope}
          alt="envelope icon"
          categoryTitle="Email"
          categoryText="info@medizonehealthcare.no"
        />
      </div>
    </div>
  );
};

export default OfficeNorway;
