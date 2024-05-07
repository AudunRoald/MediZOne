import Header from "../../components/layout/header/Header";
import FlexibleScopeRepairImage from "../../assets/flexible_scope_repair.png";
import Styles from "./repairs.module.css";
import RepairInfo from "./components/RepairInfo";

const FlexibleScopeRepair = () => {
  return (
    <>
      <Header />
      <main>
        <div className={Styles.repair_page_title_container}>
          <h1>Reparasjon av fleksibleskop</h1>
          <img
            src={FlexibleScopeRepairImage}
            alt="logoTextBlock"
            className={Styles.repair_page_title_image}
          />
        </div>
        <RepairInfo />
        <div className={Styles.repair_page_info_container}>
          <h2>Kostnadseffektiv Reparasjonstjeneste</h2>
          <p>
            Vi gir deg oppdatert kompetanse på de nyeste modellene. Vi tilbyr
            også valget om å utføre fullstendige overhalinger på praktisk talt
            alle merker av fiberoptiske og videoendoskoper. Teamet vårt og
            partnere har anskaffet noen av de mest avanserte
            reparasjonsmulighetene som er tilgjengelige i bransjen i dag,
            inkludert CCD-chip og Image Guide-erstatning. Vår pågående
            forpliktelse til forskning og utvikling gjør at vi kan tilby deg
            bevist og pålitelig service uten kompromisser, og du kan stole på
            oss for det. En grundig inspeksjon med OEM-standarder og
            retningslinjer utføres før og etter hver reparasjon. Denne
            evalueringsprosessen sikrer at alle aspekter av utstyret ditt blir
            testet og utført etter de høyeste standarder.
          </p>
        </div>
      </main>
    </>
  );
};

export default FlexibleScopeRepair;
