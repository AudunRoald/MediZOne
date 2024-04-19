import Header from "../../components/layout/header/Header";
import "./ContactUs.css";
import OfficeNorway from "./components/OfficeNorway";
import OfficeGermany from "./components/OfficeGermany";
import OfficeSaudiaArabia from "./components/OfficeSaudiaArabia";

const ContactUs = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <h1>CONTACT PAGE</h1>
          <img src="" alt="" />
        </section>

        <section className="contactOfficeSection">
          <OfficeNorway />
          <OfficeGermany />
          <OfficeSaudiaArabia />
        </section>
      </main>
    </>
  );
};

export default ContactUs;
