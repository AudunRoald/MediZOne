import Button from "../../../components/buttons/Button";
import "../../../css/hero.css";
import smiling_doctor_analyzing_knee from "../../../assets/smiling_doctor_analyzing_knee.jpg";

const HomeHero = () => {
  return (
    <section className="hero-wrapper_home-page">
      <h1 className="hero-titles_main-title">
        Expert Medical Equipment Repairs & Wholesale Medical Supplies
      </h1>
      <h2 className="hero-titles_second-title">
        Trusted Solutions for Healthcare Providers
      </h2>
      <Button
        buttonText="Schedule Your Repair Now!"
        buttonGridArea="home-page_call-to-action"
        buttonClassName="button button_call-to-action button_call-to-action_homePage"
        to="/products"
      />
      <img
        src={smiling_doctor_analyzing_knee}
        className="home-page_hero_image"
        alt=""
      />
    </section>
  );
};

export default HomeHero;
