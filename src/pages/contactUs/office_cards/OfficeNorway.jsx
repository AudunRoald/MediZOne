import {
  faEnvelope,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import OfficeTitle from "../components/OfficeTitle";
import FlagNorway from "../../../assets/flags/flag_of_norway__circle.png";
import CategoryTextBlockWithIcon from "../../../components/text_blocks/CategoryTextBlockWithIcon";

const OfficeNorway = () => {
  return (
    <div className="office-card_container">
      <OfficeTitle
        /* META */
        src={FlagNorway}
        alt="norwegian flag"
        title="Norway"
        /* STYLING */
        containerClassName="office-card_title-container"
        textClassName="office-card_title"
        imageClassName="office-card_title-image"
      />

      <br />
      <div className="office-card_info-container">
        <CategoryTextBlockWithIcon
          /* META */
          icon={faHouse}
          alt="house icon"
          title="addresse"
          text="Henrich Gerners
                Gate 11, 1530 Moss Norway"
          /* STYLING */
          containerClassName="category_container"
          iconClassName="category_icon"
          titleClassName="category_title"
          textClassName="category_text"
        />

        <CategoryTextBlockWithIcon
          /* META */
          icon={faPhone}
          alt="phone icon"
          title="Telefon"
          text="+47 919 22 655"
          /* STYLING */
          containerClassName="category_container"
          iconClassName="category_icon"
          titleClassName="category_title"
          textClassName="category_text"
        />

        <CategoryTextBlockWithIcon
          /* META */
          icon={faEnvelope}
          alt="envelope icon"
          title="Email"
          text="info@medizonehealthcare.no"
          /* STYLING */
          containerClassName="category_container"
          iconClassName="category_icon"
          titleClassName="category_title"
          textClassName="category_text"
        />
      </div>
    </div>
  );
};

export default OfficeNorway;
