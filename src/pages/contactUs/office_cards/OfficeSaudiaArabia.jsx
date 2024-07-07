import {
  faClock,
  faEnvelope,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import OfficeTitle from "../components/OfficeTitle";
import FlagSaudiArabia from "../../../assets/flags/flag_of_saudi-arabia__circle.png";
import CategoryTextBlockWithIcon from "../../../components/text_blocks/CategoryTextBlockWithIcon";

const OfficeNorway = () => {
  return (
    <div className="office-card_container">
      <OfficeTitle
        src={FlagSaudiArabia}
        alt="saudia arabian flag"
        title="Saudia Arabia"
        containerClassName="office-card_title-container"
        textClassName="office-card_title"
        imageClassName="office-card_title-image"
      />

      <br />
      <div className="office-card_info-container">
        <CategoryTextBlockWithIcon
          icon={faHouse}
          alt="house icon"
          title="addresse"
          text="Al Marhabi Trading Est
          Office 201,2nd floor
          Kaki Building Mina Street
          Jeddah
          Saudi Arabia"
          containerClassName="category_container"
          iconClassName="category_icon"
          titleClassName="category_title"
          textClassName="category_text"
        />

        <CategoryTextBlockWithIcon
          icon={faPhone}
          alt="phone icon"
          title="Telefon"
          text="+966 55 226 0061 / +966 504540194"
          containerClassName="category_container"
          iconClassName="category_icon"
          titleClassName="category_title"
          textClassName="category_text"
        />

        <CategoryTextBlockWithIcon
          icon={faEnvelope}
          alt="envelope icon"
          title="Email"
          text="info@almarhabitrading.com
          "
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
          time="08:00 - 17:00"
          time__Visable={true}
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
