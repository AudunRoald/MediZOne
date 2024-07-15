import Button from "../../../components/buttons/Button";
import "../../../css/hero.css";
import medicalBanner from "../../../assets/medical-banner-with-doctor-wearing-face-mask.jpg";

const HomeHero = () => {
  return (
    <section className="hero-wrapper hero-wrapper_home-page">
      <div className="hero-content_wrapper__home-page">
        <div className="hero-titles_wrapper">
          <h1 className="hero-titles_main-title">
            Medical equipment & consumables
          </h1>
          <h2 className="hero-titles_second-title">
            Your satisfaction is our motivation
          </h2>
        </div>
        <Button
          buttonText="view our products"
          buttonClassName="button button_call-to-action"
          to="/products"
        />
      </div>
      {/* <img
        src={medicalBanner}
        alt=""
        className="hero-backgroundImage_home-page"
        rel="preload"
        loading="eager"
        fetchpriority="high"
      /> */}
    </section>
  );
};

export default HomeHero;
