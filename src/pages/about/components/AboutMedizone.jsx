import {
  faBullseye,
  faLocationDot,
  faRocket,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import SmallTextBlockWithIcon from "../../../components/text/SmallTextBlockWithIcon";

const AboutMedizone = () => {
  return (
    <section className="textblocks-container_about-page">
      {/* <h2 className="textblock-container_title">Om MediZ0ne</h2> */}
      <div>
        <div className="textblock-container_about-page">
          <h3 className="textblock-container_text-title">starten</h3>
          <p className="textblock-container_text__about-page">
            Vår satsning startet i 2013 da tre serviceingeniører og vår
            tannlegevenn kom sammen for å utfordre et marked med bokstavelig
            talt ingen konkurrenter. Vi ønsket å utfordre andre selskaper på de
            høye kostnadene for reparasjon av medisinsk utstyr ved å tilby de
            samme tjenestene til en brøkdel av prisen.
          </p>
        </div>
        <div className="textblock-container_about-page">
          <h3 className="textblock-container_text-title">tilholdssted</h3>
          <p className="textblock-container_text__about-page">
            Vi holder til i henholdsvis Norge, Tyskland og Midt-Østen. Mellom
            oss har vi over 40 års erfaring.
          </p>
        </div>
        <div className="textblock-container_about-page">
          <h3 className="textblock-container_text-title">vårt mål</h3>
          <p className="textblock-container_text__about-page">
            Vårt hovedmål er å tilby rask, pålitelig og billig reparasjon av
            medisinsk utstyr.
          </p>
        </div>
        <div className="textblock-container_about-page">
          <h3 className="textblock-container_text-title">Enkelt & raskt</h3>
          <p className="textblock-container_text__about-page">
            Vi ønsker å gjøre hele prosessen veldig praktisk for deg. Vi har en
            enkel og rask opphentingstjeneste, og vi tilbyr lånerutstyr mens vi
            reparerer / utfører service på det medisinske maskineriet. Våre
            priser er svært konkurransedyktige i forhold til dagens
            markedspriser, vi garanterer rask håndtering og ypperste kvalitet på
            vårt arbeid.
          </p>
        </div>
        <div className="textblock-container_about-page">
          <div>icon</div>
          <h3 className="textblock-container_title">reparasjon & garanti</h3>
          <p className="textblock-container_text__about-page">
            Alle reparasjoner følger med garanti, dette avhenger av produktet.
            Vanligvis tilbyr vi en 3-18 måneders garanti på alle reparerte
            deler. Arbeidet vårt er i samsvar med CE / ISO / FDA-standarder.
          </p>
        </div>
      </div>

      <SmallTextBlockWithIcon
        containerClass="textblock-container_about-page"
        titleContainerClass="textblock-title_wrapper"
        titleClass="textblock-container_text-title"
        title="starten"
        textClass="textblock-container_text__about-page"
        icon={faRocket}
        iconClass="textblock-icon"
        text="Vår satsning startet i 2013 da tre serviceingeniører og vår tannlegevenn
    kom sammen for å utfordre et marked med bokstavelig talt ingen
    konkurrenter. Vi ønsket å utfordre andre selskaper på de høye kostnadene
    for reparasjon av medisinsk utstyr ved å tilby de samme tjenestene til
    en brøkdel av prisen."
      />

      {/* <SmallTextBlockWithIcon
        containerClass="textblock-container_about-page"
        titleContainerClass="textblock-container_text-title"
        icon={faRocket}
        iconClass="textblock-icon"
        titleClass="textblock-container_text-title
        "
        textClass="textblock-container_text__about-page"
        title="starten"
        text="Vår satsning startet i 2013 da tre serviceingeniører og vår tannlegevenn
    kom sammen for å utfordre et marked med bokstavelig talt ingen
    konkurrenter. Vi ønsket å utfordre andre selskaper på de høye kostnadene
    for reparasjon av medisinsk utstyr ved å tilby de samme tjenestene til
    en brøkdel av prisen."
      />

      <SmallTextBlockWithIcon
        containerClass="textblock-container  textblock-container__row  textblock_about-page__inverted"
        titleContainerClass="textblock-container_title-wrapper"
        titleClass="textblock-title textblock-title_about-page"
        textClass="textblock-text"
        iconClass="textblock-icon"
        icon={faLocationDot}
        title="tilholdssted"
        text="Vi holder til i henholdsvis Norge, Tyskland og Midt-Østen. Mellom oss
    har vi over 40 års erfaring."
      />

      <SmallTextBlockWithIcon
        containerClass="textblock-container textblock-container__row"
        titleContainerClass="textblock-container_title-wrapper"
        titleClass="textblock-title textblock-title_about-page"
        textClass="textblock-text"
        iconClass="textblock-icon"
        icon={faBullseye}
        title="vårt mål"
        text="Vårt hovedmål er å tilby rask, pålitelig og billig reparasjon av
      medisinsk utstyr."
      />

      <SmallTextBlockWithIcon
        containerClass="textblock-container textblock-container__row   textblock_about-page__inverted"
        titleContainerClass="textblock-container_title-wrapper"
        titleClass="textblock-title textblock-title_about-page"
        textClass="textblock-text"
        iconClass="textblock-icon"
        icon={faLocationDot}
        title="Enkelt & raskt"
        text="Vi ønsker å gjøre hele prosessen veldig praktisk for deg. Vi har en
      enkel og rask opphentingstjeneste, og vi tilbyr lånerutstyr mens vi
      reparerer / utfører service på det medisinske maskineriet. Våre priser
      er svært konkurransedyktige i forhold til dagens markedspriser, vi
      garanterer rask håndtering og ypperste kvalitet på vårt arbeid."
      />

      <SmallTextBlockWithIcon
        containerClass="textblock-container textblock-container__row"
        titleContainerClass="textblock-container_title-wrapper"
        titleClass="textblock-title textblock-title_about-page"
        textClass="textblock-text"
        iconClass="textblock-icon"
        icon={faScrewdriverWrench}
        title="reparasjon & garanti"
        text="Alle reparasjoner følger med garanti, dette avhenger av produktet.
    Vanligvis tilbyr vi en 3-18 måneders garanti på alle reparerte deler.
    Arbeidet vårt er i samsvar med CE / ISO / FDA-standarder."
      /> */}
    </section>
  );
};

export default AboutMedizone;
