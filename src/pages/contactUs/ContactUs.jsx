import Header from "../../components/layout/header/Header";
import "./ContactUs.css";
import OfficeNorway from "./components/OfficeNorway";
import OfficeGermany from "./components/OfficeGermany";
import OfficeSaudiaArabia from "./components/OfficeSaudiaArabia";
import phone from "../../assets/smartphone.jpg";

const ContactUs = () => {
  return (
    <>
      <Header />
      <main className="contactPage">
        <section className="pageTitleContainer">
          <h1 className="pageTitle">our offices</h1>
          <img src={phone} alt="" className="headerImage" />
        </section>

        <section className="contactOfficesSection">
          <OfficeNorway />
          <OfficeGermany />
          <OfficeSaudiaArabia />
        </section>
      </main>
    </>
  );
};

export default ContactUs;
