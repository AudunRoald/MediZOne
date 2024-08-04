import Button from "../../../components/buttons/Button";
import "../../../css/hero.css";
import repairing_electrical_equipment from "../../../assets/repairing_electrical_equipment.jpg";

const HomeHero = () => {
  return (
    <section className="hero-wrapper hero-wrapper_home-page">
      <div className="hero-content_wrapper__home-page">
        <div className="hero-titles_wrapper">
          <h1 className="hero-titles_main-title">
            Expert Medical Equipment Repairs & Wholesale Medical Supplies
          </h1>
          <h2 className="hero-titles_second-title">
            Trusted Solutions for Healthcare Providers
          </h2>
          <Button
            buttonText="Schedule Your Repair Now!"
            buttonClassName="button button_call-to-action"
            to="/products"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
