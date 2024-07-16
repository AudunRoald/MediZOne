import Header from "../../components/layout/header/Header";
import Key_services from "../../components/service_info/key_services/KeyServices";
import ServiceConceptAccordion from "../../components/service_info/service_consept/components/ServiceConceptAccordion";
import ServiceConcept from "../../components/service_info/service_consept/ServiceConcept";
import HomeHero from "./components/HomeHero";
import HomeTextBlocks from "./components/HometextBlocks";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main_home">
        <HomeHero />
        <Key_services />
        <ServiceConcept sectionClassName="serviceConcept_container section-divider_middle" />
        <HomeTextBlocks />
      </main>
    </>
  );
};

export default Home;
