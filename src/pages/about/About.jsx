import Header from "../../components/layout/header/Header";
import KeyServices from "../../components/service_info/key_services/KeyServices";
import Servicepointswheel from "../../components/servicepointswheel/Servicepointswheel";
import AboutHero from "./components/AboutHero";
import "../../css/about.css";
import AboutTextBlocks from "./components/AboutTextBlocks";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutTextBlocks />
        {/* <Servicepointswheel /> */}
        {/*  <KeyServices /> */}
      </main>
    </>
  );
};

export default About;
