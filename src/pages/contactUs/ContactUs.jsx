import Header from "../../components/layout/header/Header";
import OfficeNorway from "./office_cards/OfficeNorway";
import OfficeGermany from "./office_cards/OfficeGermany";
import OfficeSaudiaArabia from "./office_cards/OfficeSaudiaArabia";
import friendly_support_staff from "../../assets/friendly_support_staff.jpg";

const ContactUs = () => {
  return (
    <>
      <Header />
      <main className="contact-us_main">
        <section className="page-title_container">
          <h1 className="page_title">
            <span>prat</span>
            <span>med</span>
            <span>oss</span>
          </h1>

          <img
            src={friendly_support_staff}
            alt="Support friendly staff helping customers"
            className="contact-us_hero-image"
          />
        </section>

        <section className="office-cards_section">
          <h2 className="cards-section_title">våre kontorer</h2>
          <div className="office-cards_container">
            <OfficeNorway />
            <OfficeGermany />
            <OfficeSaudiaArabia />
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactUs;
