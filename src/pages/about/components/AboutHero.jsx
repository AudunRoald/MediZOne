import MediZOneLogo from "../../../assets/logos/medizone_healthcare_logo.png";

const AboutHero = () => {
  return (
    <section className="hero-wrapper hero-wrapper_about-page">
      <div className="hero-content_wrapper__about-page">
        <div className="hero-title_container__about-page">
          <h1 className="hero-title">om</h1>
          <h1 className="hero-title">oss</h1>
          <h1 className="hero-title">i</h1>
        </div>
        <img
          src={MediZOneLogo}
          alt="logoTextBlock"
          className="hero-logo_medizone"
        />
      </div>
    </section>
  );
};

export default AboutHero;
