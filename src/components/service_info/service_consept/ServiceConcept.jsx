import React from "react";
import ServiceConceptAccordion from "./components/ServiceConceptAccordion";
import "../../../css/accordion.css";

const ServiceConcept = (props) => {
  return (
    <section className={props.sectionClassName}>
      <h2 className="serviceConcept_container-title">Reparerings prosess</h2>
      <ServiceConceptAccordion />
    </section>
  );
};

export default ServiceConcept;
