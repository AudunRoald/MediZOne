import MediZOneLogo from "../../../assets/medizone_healthcare_logo.png";
import HeroImage from "../../../assets/doctor-offering-medical-teleconsultation.jpg";

const About_Hero = () => {
  return (
    <section className="hero_container about_hero_container">
      <img
        src={HeroImage}
        alt="doctor smiling while watching a laptop"
        className="image"
      />
      <div className="about_hero_title hero_title">
        <h1>about</h1>
        <img
          src={MediZOneLogo}
          alt="logoTextBlock"
          className="hero_logo_medizone"
        />
      </div>
    </section>
  );
};

export default About_Hero;
