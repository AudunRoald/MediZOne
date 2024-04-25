import Header from "../../components/layout/header/Header";
import MediZOneLogo from "../../assets/medizone_healthcare_logo.png";
import HeroImage from "../../assets/doctor-offering-medical-teleconsultation.jpg";
import Styles from "./about.module.css";
import {
  faBullseye,
  faLocationDot,
  faRocket,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import TextBlock from "./components/TextBlock";

const About = () => {
  return (
    <>
      <Header />
      <main className={Styles.aboutPage}>
        <section className={Styles.aboutPageTitle}>
          <img
            src={HeroImage}
            alt="doctor smiling while watching a laptop"
            className="image"
          />
          <div className={Styles.pageTitleAndLogo}>
            <h1>about</h1>
            <img
              src={MediZOneLogo}
              alt="logoTextBlock"
              className={Styles.logoTitle}
            />
          </div>
        </section>

        <section className="textBlocksSection">
          <TextBlock
            className="textBlockAboutInverted"
            icon={faRocket}
            iconClass={Styles.textBlockIconInverted}
            titleClass={Styles.textBlockTitle}
            title="starten"
            text="Vår satsning startet i 2013 da tre serviceingeniører og vår tannlegevenn
            kom sammen for å utfordre et marked med bokstavelig talt ingen
            konkurrenter. Vi ønsket å utfordre andre selskaper på de høye kostnadene
            for reparasjon av medisinsk utstyr ved å tilby de samme tjenestene til
            en brøkdel av prisen."
          />

          <div className="textBlocksRow">
            <TextBlock
              className="textBlockAboutColumn"
              icon={faLocationDot}
              iconClass={Styles.textBlockIcon}
              titleClass={Styles.textBlockTitle}
              title="tilholdssted"
              text="Vi holder til i henholdsvis Norge, Tyskland og Midt-Østen. Mellom oss
            har vi over 40 års erfaring."
            />

            <TextBlock
              className="textBlockAboutColumn"
              icon={faBullseye}
              iconClass={Styles.textBlockIcon}
              titleClass={Styles.textBlockTitle}
              title="vårt mål"
              text="Vårt hovedmål er å tilby rask, pålitelig og billig reparasjon av
              medisinsk utstyr."
            />
          </div>

          <TextBlock
            className="textBlockAboutInverted"
            icon={faBullseye}
            iconClass={Styles.textBlockIconInverted}
            titleClass={Styles.textBlockTitle}
            title="Enkelt & raskt"
            text="Vi ønsker å gjøre hele prosessen veldig praktisk for deg. Vi har en
              enkel og rask opphentingstjeneste, og vi tilbyr lånerutstyr mens vi
              reparerer / utfører service på det medisinske maskineriet. Våre priser
              er svært konkurransedyktige i forhold til dagens markedspriser, vi
              garanterer rask håndtering og ypperste kvalitet på vårt arbeid."
          />

          <TextBlock
            className="textBlockAbout"
            icon={faScrewdriverWrench}
            iconClass={Styles.textBlockIcon}
            titleClass={Styles.textBlockTitle}
            title="reparasjon & garanti"
            text="Alle reparasjoner følger med garanti, dette avhenger av produktet.
            Vanligvis tilbyr vi en 3-18 måneders garanti på alle reparerte deler.
            Arbeidet vårt er i samsvar med CE / ISO / FDA-standarder."
          />
        </section>
      </main>
    </>
  );
};

export default About;
