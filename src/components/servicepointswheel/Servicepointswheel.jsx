import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faTruckRampBox,
} from "@fortawesome/free-solid-svg-icons";
import Servicepoint_info from "./components/Servicepoint";

const Servicepointswheel = () => {
  return (
    <section className="servicepoints-container">
      <h2 className="section-title">Tjenestekonsept</h2>
      <div className="points-container">
        <div className="point-container">
          <Servicepoint_info
            title="1."
            text="kontakt oss"
            className="servicepoint-container"
            titleClass="servicepoint-container_title"
            textClass="servicepoint-container_text"
            overlayClass="servicepoint-container_overlay"
            overlay_text="Dere kontakter oss via kontaktskjema"
            icon={faArrowRight}
          />
        </div>
        <div className="point-container">
          <Servicepoint_info
            title="2."
            text="tilbakemelding"
            className="servicepoint-container"
            titleClass="servicepoint-container_title"
            textClass="servicepoint-container_text"
            overlayClass="servicepoint-container_overlay"
            overlay_text="Dere får en tilbakemelding innen 24t"
            icon={faArrowRight}
          />
        </div>
        <div className="point-container">
          <Servicepoint_info
            title="3."
            text="Opphenting"
            className="servicepoint-container"
            titleClass="servicepoint-container_title"
            textClass="servicepoint-container_text"
            overlayClass="servicepoint-container_overlay"
            overlay_text="Opphenting avtales"
            icon={faArrowDown}
          />
        </div>
      </div>
      <div className="points-container">
        <div className="point-container">
          <Servicepoint_info
            title="6."
            text="Levering"
            className="servicepoint-container"
            titleClass="servicepoint-container_title"
            textClass="servicepoint-container_text"
            overlayClass="servicepoint-container_overlay"
            overlay_text="Dere mottar den reparerte delen, m/ garantibevis & servicerapport"
            icon={faTruckRampBox}
          />
        </div>

        <div className="point-container">
          <Servicepoint_info
            title="5."
            text="Reparasjon"
            className="servicepoint-container"
            titleClass="servicepoint-container_title"
            textClass="servicepoint-container_text"
            overlayClass="servicepoint-container_overlay"
            overlay_text="Delen repareres av vårt team"
            icon={faArrowLeft}
          />
        </div>
        <div className="point-container">
          <Servicepoint_info
            title="4."
            text="låneutstyr"
            className="servicepoint-container"
            titleClass="servicepoint-container_title"
            textClass="servicepoint-container_text"
            overlayClass="servicepoint-container_overlay"
            overlay_text="Dere mottar låneutstyr"
            icon={faArrowLeft}
          />
        </div>
      </div>
    </section>
  );
};

export default Servicepointswheel;
