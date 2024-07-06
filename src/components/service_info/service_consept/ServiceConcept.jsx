import React from "react";
import ServiceConceptAccordion from "./components/ServiceConceptAccordion";
import "../../../css/accordion.css";

const ServiceConcept = () => {
  return (
    <section className="serviceConcept_container">
      <h2 className="serviceConcept_container-title">Service Concept</h2>
      <ServiceConceptAccordion />
    </section>
  );
};

export default ServiceConcept;
