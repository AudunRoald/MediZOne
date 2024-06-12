import Header from "../../components/layout/header/Header";
import KeyServices from "../../components/service_info/key_services/KeyServices";
import Servicepointswheel from "../../components/servicepointswheel/Servicepointswheel";
import AboutHero from "./components/AboutHero";
import AboutMedizone from "./components/AboutMedizone";
import "../../css/about.css";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutMedizone />
        {/* <Servicepointswheel /> */}
        {/*  <KeyServices /> */}
      </main>
    </>
  );
};

export default About;
