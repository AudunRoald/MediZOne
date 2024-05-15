import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faTruckRampBox,
} from "@fortawesome/free-solid-svg-icons";
import Servicepoint_info from "./components/Servicepoint";

const Servicepointswheel = () => {
  return (
    <section className="section_servicepoints">
      <h2 className="section_title">Tjenestekonsept</h2>
      <div className="points_container">
        <div className="point_container">
          <Servicepoint_info
            title="1."
            text="kontakt oss"
            className="servicepoint_info_container"
            titleClass="servicepoint_info_title"
            textClass="servicepoint_info_text"
            overlayClass="servicepoint_overlay"
            overlay_text="Dere kontakter oss via kontaktskjema"
            icon={faArrowRight}
          />
        </div>
        <div className="point_container">
          <Servicepoint_info
            title="2."
            text="tilbakemelding"
            className="servicepoint_info_container"
            titleClass="servicepoint_info_title"
            textClass="servicepoint_info_text"
            overlayClass="servicepoint_overlay"
            overlay_text="Dere får en tilbakemelding innen 24t"
            icon={faArrowRight}
          />
        </div>
        <div className="point_container">
          <Servicepoint_info
            title="3."
            text="Opphenting"
            className="servicepoint_info_container"
            titleClass="servicepoint_info_title"
            textClass="servicepoint_info_text"
            overlayClass="servicepoint_overlay"
            overlay_text="Opphenting avtales"
            icon={faArrowDown}
          />
        </div>
      </div>
      <div className="points_container">
        <div className="point_container">
          <Servicepoint_info
            title="6."
            text="Levering"
            className="servicepoint_info_container"
            titleClass="servicepoint_info_title"
            textClass="servicepoint_info_text"
            overlayClass="servicepoint_overlay"
            overlay_text="Dere mottar den reparerte delen, m/ garantibevis & servicerapport"
            icon={faTruckRampBox}
          />
        </div>

        <div className="point_container">
          <Servicepoint_info
            title="5."
            text="Reparasjon"
            className="servicepoint_info_container"
            titleClass="servicepoint_info_title"
            textClass="servicepoint_info_text"
            overlayClass="servicepoint_overlay"
            overlay_text="Delen repareres av vårt team"
            icon={faArrowLeft}
          />
        </div>
        <div className="point_container">
          <Servicepoint_info
            title="4."
            text="låneutstyr"
            className="servicepoint_info_container"
            titleClass="servicepoint_info_title"
            textClass="servicepoint_info_text"
            overlayClass="servicepoint_overlay"
            overlay_text="Dere mottar låneutstyr"
            icon={faArrowLeft}
          />
        </div>
      </div>
    </section>
  );
};

export default Servicepointswheel;
