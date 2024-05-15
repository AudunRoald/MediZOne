import {
  faBullseye,
  faLocationDot,
  faRocket,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import TextBlock from "../../../components/text/TextBlock";

const About_Medizone = () => {
  return (
    <section className="about_section_textblocks">
      <TextBlock
        className="textblock_container about_textblock_container__inverted"
        icon={faRocket}
        iconClass="about_textblock_icon__inverted"
        titleClass="about_textblock_title__inverted"
        textClass="about_textblock_text__inverted"
        title="starten"
        text="Vår satsning startet i 2013 da tre serviceingeniører og vår tannlegevenn
    kom sammen for å utfordre et marked med bokstavelig talt ingen
    konkurrenter. Vi ønsket å utfordre andre selskaper på de høye kostnadene
    for reparasjon av medisinsk utstyr ved å tilby de samme tjenestene til
    en brøkdel av prisen."
      />

      <div className="textblocks_row">
        <TextBlock
          className="textblock_container"
          icon={faLocationDot}
          iconClass="about_textblock_icon"
          titleClass="about_textblock_title"
          textClass="about_textblock_text"
          title="tilholdssted"
          text="Vi holder til i henholdsvis Norge, Tyskland og Midt-Østen. Mellom oss
    har vi over 40 års erfaring."
        />

        <TextBlock
          className="textblock_container"
          icon={faBullseye}
          iconClass="about_textblock_icon"
          titleClass="about_textblock_title"
          textClass="about_textblock_text"
          title="vårt mål"
          text="Vårt hovedmål er å tilby rask, pålitelig og billig reparasjon av
      medisinsk utstyr."
        />
      </div>

      <TextBlock
        className="textblock_container  about_textblock_container__inverted"
        icon={faBullseye}
        iconClass="about_textblock_icon__inverted"
        titleClass="about_textblock_title__inverted"
        textClass="about_textblock_text__inverted"
        title="Enkelt & raskt"
        text="Vi ønsker å gjøre hele prosessen veldig praktisk for deg. Vi har en
      enkel og rask opphentingstjeneste, og vi tilbyr lånerutstyr mens vi
      reparerer / utfører service på det medisinske maskineriet. Våre priser
      er svært konkurransedyktige i forhold til dagens markedspriser, vi
      garanterer rask håndtering og ypperste kvalitet på vårt arbeid."
      />

      <TextBlock
        className="textblock_container about_textblock_container"
        icon={faScrewdriverWrench}
        iconClass="about_textblock_icon"
        titleClass="about_textblock_title"
        textClass="about_textblock_text"
        title="reparasjon & garanti"
        text="Alle reparasjoner følger med garanti, dette avhenger av produktet.
    Vanligvis tilbyr vi en 3-18 måneders garanti på alle reparerte deler.
    Arbeidet vårt er i samsvar med CE / ISO / FDA-standarder."
      />
    </section>
  );
};

export default About_Medizone;
