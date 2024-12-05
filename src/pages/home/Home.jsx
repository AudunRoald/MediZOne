import Header from "../../components/layout/header/Header";
import KeyServices_HomePage from "../../components/service_info/key_services/KeyServicesHomePage";

import ServiceConcept from "../../components/service_info/service_consept/ServiceConcept";
import HomeHero from "./components/HomeHero";
import HomeTextBlocks from "./components/HometextBlocks";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        <KeyServices_HomePage />
        <ServiceConcept sectionClassName="serviceConcept_container" />
        <HomeTextBlocks />
      </main>
    </>
  );
};

export default Home;
