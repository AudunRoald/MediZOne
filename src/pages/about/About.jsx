import Header from "../../components/layout/header/Header";
import MediZOneLogo from "../../assets/medizone_healthcare_logo.png";
import DoctorHappy from "../../assets/doctor-offering-medical-teleconsultation.jpg";
import "./about.css";
import AboutPageTextBlock_1 from "./AboutPageTextBlock_1";
import AboutPageTextBlock_2 from "./AboutPageTextBlock_2";
import AboutPageTextBlock_3 from "./AboutPageTextBlock_3";
import AboutPageTextBlock_4 from "./AboutPageTextBlock_4";

const About = () => {
  return (
    <>
      <Header />
      <main className="aboutPage">
        <section className="aboutPageTitle">
          <img
            src={DoctorHappy}
            alt="doctor smiling while watching a laptop"
            className="image"
          />
          <div className="pageTitleAndLogo">
            <h1>about</h1>
            <img
              src={MediZOneLogo}
              alt="logoTextBlock"
              className="logoPageTitle"
            />
          </div>
        </section>

        <section>
          <AboutPageTextBlock_1 />
        </section>

        <section>
          <AboutPageTextBlock_2 />
        </section>

        <section>
          <AboutPageTextBlock_3 />
        </section>

        <section>
          <AboutPageTextBlock_4 />
        </section>
      </main>
    </>
  );
};

export default About;
