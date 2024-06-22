import {
  faBullseye,
  faLocationDot,
  faRocket,
  faScrewdriverWrench,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

import TextBlockWithIcon from "../../../components/text/TextBlockWithIcon";

const AboutTextBlocks = () => {
  return (
    <section className="textblocks-container_about-page">
      <TextBlockWithIcon
        containerClassName="textblock-container_about-page"
        titleContainerClassName="textblock-title_wrapper"
        titleClassName="textblock-container_text-title"
        title="starten"
        textClassName="textblock-container_text__about-page"
        icon={faRocket}
        iconClassName="textblock-icon"
        text_1__Visable={true}
        text_1="Vår satsning startet i 2013 da tre serviceingeniører og vår tannlegevenn
    kom sammen for å utfordre et marked med bokstavelig talt ingen
    konkurrenter. Vi ønsket å utfordre andre selskaper på de høye kostnadene
    for reparasjon av medisinsk utstyr ved å tilby de samme tjenestene til
    en brøkdel av prisen."
      />

      <TextBlockWithIcon
        containerClassName="textblock-container_about-page"
        titleContainerClassName="textblock-title_wrapper"
        titleClassName="textblock-container_text-title"
        title="tilholdssted"
        textClassName="textblock-container_text__about-page"
        icon={faLocationDot}
        iconClassName="textblock-icon"
        text_2__Visable={true}
        text_2="Vi holder til i henholdsvis Norge, Tyskland og Midt-Østen. Mellom
            oss har vi over 40 års erfaring."
      />

      <TextBlockWithIcon
        containerClassName="textblock-container_about-page"
        titleContainerClassName="textblock-title_wrapper"
        titleClassName="textblock-container_text-title"
        title="vårt mål"
        textClassName="textblock-container_text__about-page"
        icon={faBullseye}
        iconClassName="textblock-icon"
        text_3__Visable={true}
        text_3="Vårt hovedmål er å tilby rask, pålitelig og billig reparasjon av
            medisinsk utstyr."
      />

      <TextBlockWithIcon
        containerClassName="textblock-container_about-page"
        titleContainerClassName="textblock-title_wrapper"
        titleClassName="textblock-container_text-title"
        title="Enkelt & raskt"
        textClassName="textblock-container_text__about-page"
        icon={faTruckFast}
        iconClassName="textblock-icon"
        text_4__Visable={true}
        text_4="Vi ønsker å gjøre hele prosessen veldig praktisk for deg. Vi har en
            enkel og rask opphentingstjeneste, og vi tilbyr lånerutstyr mens vi
            reparerer / utfører service på det medisinske maskineriet. Våre
            priser er svært konkurransedyktige i forhold til dagens
            markedspriser, vi garanterer rask håndtering og ypperste kvalitet på
            vårt arbeid."
      />

      <TextBlockWithIcon
        containerClassName="textblock-container_about-page"
        titleContainerClassName="textblock-title_wrapper"
        titleClassName="textblock-container_text-title"
        title="reparasjon & garanti"
        textClassName="textblock-container_text__about-page"
        icon={faScrewdriverWrench}
        iconClassName="textblock-icon"
        text_5__Visable={true}
        text_5="Alle reparasjoner følger med garanti, dette avhenger av produktet.
            Vanligvis tilbyr vi en 3-18 måneders garanti på alle reparerte
            deler. Arbeidet vårt er i samsvar med CE / ISO / FDA-standarder."
      />
    </section>
  );
};

export default AboutTextBlocks;
