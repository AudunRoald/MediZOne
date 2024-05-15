import Header from "../../components/layout/header/Header";
import Key_services from "../../components/service_info/key_services/Key_Services";
import Servicepointswheel from "../../components/servicepointswheel/Servicepointswheel";

import About_Hero from "./components/About_Hero";
import About_Medizone from "./components/About_Medizone";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <About_Hero />
        <About_Medizone />
        <Servicepointswheel />
        <Key_services />
      </main>
    </>
  );
};

export default About;
