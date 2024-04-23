import Header from "../../components/layout/header/Header";
import Styles from "./ContactUs.module.css";
import OfficeNorway from "./components/OfficeNorway";
import OfficeGermany from "./components/OfficeGermany";
import OfficeSaudiaArabia from "./components/OfficeSaudiaArabia";
import phone from "../../assets/smartphone.jpg";

const ContactUs = () => {
  return (
    <>
      <Header />
      <main className={Styles.contactPage}>
        <section className={Styles.pageTitleContainer}>
          <h1 className={Styles.pageTitle}>our offices</h1>
          <img src={phone} alt="" className="headerImage" />
        </section>

        <section className={Styles.contactOfficesSection}>
          <OfficeNorway />
          <OfficeGermany />
          <OfficeSaudiaArabia />
        </section>
      </main>
    </>
  );
};

export default ContactUs;
