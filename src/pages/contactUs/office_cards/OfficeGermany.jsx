import {
  faClock,
  faEnvelope,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import OfficeTitle from "../components/OfficeTitle";
import FlagGermany from "../../../assets/flags/flag_of_germany__circle.png";
import CategoryTextBlockWithIcon from "../../../components/text_blocks/CategoryTextBlockWithIcon";

const OfficeNorway = () => {
  return (
    <div className="office-card_container">
      <OfficeTitle
        src={FlagGermany}
        alt="german flag"
        title="Germany"
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
          text="Medizone Healthcaare GmBH
          Allensteiner Str. 23
          44369 Dortmund
          Germany."
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
          text="+49 176 3203 7041"
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
          text="info@medizonehealthcare.de"
          /* STYLING */
          containerClassName="category_container"
          iconClassName="category_icon"
          titleClassName="category_title"
          textClassName="category_text"
        />

        <CategoryTextBlockWithIcon
          /* META */
          icon={faClock}
          alt="envelope icon"
          title="opening hours"
          text="Mandag - Fredag"
          time__Visable={true}
          time="08:00 - 17:00"
          /* STYLING */
          containerClassName="category_container"
          iconClassName="category_icon"
          titleClassName="category_title"
          textClassName="category_text"
          timeClassName="category_time"
        />
      </div>
    </div>
  );
};

export default OfficeNorway;

/* 
<CategoryInfoBox
          icon={faHouse}
          alt="house icon"
          categoryTitle="addresse"
          categoryText="Medizone Healthcaare GmBH
          Allensteiner Str. 23
          44369 Dortmund
          Germany."
          containerClassName="office-card_info-category-container"
          iconClassName="office-card_category-icon"
        /> */
