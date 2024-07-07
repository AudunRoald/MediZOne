import {
  faBullseye,
  faLocationDot,
  faRocket,
  faScrewdriverWrench,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

import TextBlockWithIcon from "../../../components/text_blocks/TextBlockWithIcon";

const AboutTextBlocks = () => {
  return (
    <section className="textblocks-container_about-page">
      <TextBlockWithIcon
        /* META */
        icon={faRocket}
        title="starten"
        text="Vår satsning startet i 2013 da tre serviceingeniører og vår tannlegevenn
        kom sammen for å utfordre et marked med bokstavelig talt ingen
        konkurrenter. Vi ønsket å utfordre andre selskaper på de høye kostnadene
        for reparasjon av medisinsk utstyr ved å tilby de samme tjenestene til
        en brøkdel av prisen."
        /* STYLING */
        containerClassName="textblock-container_about-page"
        iconClassName="textblock-icon"
        textClassName="textblock-container_text__about-page"
        titleClassName="textblock-container_text-title"
        titleContainerClassName="textblock-title_wrapper"
      />

      <TextBlockWithIcon
        /* META */
        icon={faLocationDot}
        title="tilholdssted"
        text="Vi holder til i henholdsvis Norge, Tyskland og Midt-Østen. Mellom
            oss har vi over 40 års erfaring."
        /* STYLING */
        containerClassName="textblock-container_about-page"
        iconClassName="textblock-icon"
        textClassName="textblock-container_text__about-page"
        titleClassName="textblock-container_text-title"
        titleContainerClassName="textblock-title_wrapper"
      />

      <TextBlockWithIcon
        /* META */
        icon={faBullseye}
        title="vårt mål"
        text="Vårt hovedmål er å tilby rask, pålitelig og billig reparasjon av
            medisinsk utstyr."
        /* STYLING */
        containerClassName="textblock-container_about-page"
        iconClassName="textblock-icon"
        textClassName="textblock-container_text__about-page"
        titleClassName="textblock-container_text-title"
        titleContainerClassName="textblock-title_wrapper"
      />

      <TextBlockWithIcon
        /* META */
        icon={faTruckFast}
        title="Enkelt & raskt"
        text="Vi ønsker å gjøre hele prosessen veldig praktisk for deg. Vi har en
            enkel og rask opphentingstjeneste, og vi tilbyr lånerutstyr mens vi
            reparerer / utfører service på det medisinske maskineriet. Våre
            priser er svært konkurransedyktige i forhold til dagens
            markedspriser, vi garanterer rask håndtering og ypperste kvalitet på
            vårt arbeid."
        /* STYLING */
        containerClassName="textblock-container_about-page"
        iconClassName="textblock-icon"
        textClassName="textblock-container_text__about-page"
        titleClassName="textblock-container_text-title"
        titleContainerClassName="textblock-title_wrapper"
      />

      <TextBlockWithIcon
        /* META */
        icon={faScrewdriverWrench}
        title="reparasjon & garanti"
        text="Alle reparasjoner følger med garanti, dette avhenger av produktet.
                  Vanligvis tilbyr vi en 3-18 måneders garanti på alle reparerte
                  deler. Arbeidet vårt er i samsvar med CE / ISO / FDA-standarder."
        /* STYLING */
        containerClassName="textblock-container_about-page"
        iconClassName="textblock-icon"
        textClassName="textblock-container_text__about-page"
        titleClassName="textblock-container_text-title"
        titleContainerClassName="textblock-title_wrapper"
      />
    </section>
  );
};

export default AboutTextBlocks;

/* text_1__visable={true} */
