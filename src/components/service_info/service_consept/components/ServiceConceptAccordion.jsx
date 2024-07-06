import React, { useEffect } from "react";
import AccordionPanel from "./AccordionPanel";
import person_uses_laptop from "../../../../assets/person_uses_laptop.jpg";
import email_on_phone from "../../../../assets/email_on_phone.jpg";
import shaking_hands_happy_people from "../../../../assets/shaking_hands_happy_people.jpg";
import medical_equipment_on_an_operating_room from "../../../../assets/medical_equipment_on_an_operating_room.jpg";
import people_repairng_computer_chips from "../../../../assets/people_repairng_computer_chips.jpg";

import side_view_woman_taking_parcel_from_deliveryman from "../../../../assets/side_view_woman-taking_parcel_from_deliveryman.jpg";

import {
  faArrowUpRightFromSquare,
  faClipboardList,
  faHandshake,
  faPhone,
  faReplyAll,
  faScrewdriverWrench,
  faStethoscope,
  faTruckRampBox,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceConceptAccordion = () => {
  const serviceConceptAccordionClickevent = (e) => {
    const activePanel = e.target.closest(".accordion-panel_container");
    if (!activePanel) return;
    console.log("Active panel :", activePanel);

    const panelButtons = document.querySelectorAll("button");
    console.log("Panel Buttons :", panelButtons);

    const panelContents = document.querySelectorAll(
      ".accordion-panel_content-container"
    );
    console.log("Panel Contents :", panelContents);

    panelButtons.forEach((button) => {
      button.setAttribute("aria-expanded", false);
      activePanel.querySelector("button").setAttribute("aria-expanded", true);
    });

    panelContents.forEach((content) => {
      content.setAttribute("aria-hidden", true);
      activePanel
        .querySelector(".accordion-panel_content-container")
        .setAttribute("aria-hidden", false);
    });
  };

  return (
    <div
      className="accordion-panels_container"
      onClick={serviceConceptAccordionClickevent}
    >
      <AccordionPanel
        containerClassName="accordion-panel_container"
        accordionPanelBodytext="Dere kontakter oss via kontaktskjema"
        accordionPanelButtonText="Kontakt oss"
        accordionContentContainerClassName="accordion-panel_content-container"
        accordionPanelBodytextClassName="accordion-panel_bodytext"
        buttonText="1. Kontakt oss"
        panelIdTitle="panel1-title"
        panelIdContent="panel1-content"
        accordionIconClassName="accordion-icon"
        ariaExpanded="true"
        ariaHidden="false"
        panelId="panel1-heading"
        panelTitleClassName="panel-title"
        imageClassName="accordion-image"
        imageSrc={person_uses_laptop}
        imageAlt="Person uses a laptop, https://unsplash.com/photos/person-using-macbook-pro-npxXWgQ33ZQ"
        accordionIcon={faClipboardList}
      />

      <AccordionPanel
        containerClassName="accordion-panel_container"
        accordionPanelBodytext="Dere får en tilbakemelding innen 24t"
        accordionPanelButtonText="Tilbakemelding"
        accordionContentContainerClassName="accordion-panel_content-container"
        accordionPanelBodytextClassName="accordion-panel_bodytext"
        buttonText="2. Svar"
        panelIdTitle="panel2-title"
        panelIdContent="panel2-content"
        accordionIconClassName="accordion-icon"
        ariaExpanded="false"
        ariaHidden="true"
        panelId="panel2-heading"
        panelTitleClassName="panel-title"
        imageClassName="accordion-image"
        imageSrc={email_on_phone}
        imageAlt="Email on phone, https://unsplash.com/photos/black-iphone-5-with-black-case-IOdNANPjL-4"
        accordionIcon={faReplyAll}
      />

      <AccordionPanel
        containerClassName="accordion-panel_container"
        accordionPanelBodytext="Opphenting avtales"
        accordionPanelButtonText="Opphenting"
        accordionContentContainerClassName="accordion-panel_content-container"
        accordionPanelBodytextClassName="accordion-panel_bodytext"
        buttonText="3. Opphenting"
        panelIdTitle="panel3-title"
        panelIdContent="panel3-content"
        accordionIconClassName="accordion-icon"
        ariaExpanded="false"
        ariaHidden="true"
        panelId="panel3-heading"
        panelTitleClassName="panel-title"
        imageClassName="accordion-image"
        imageSrc={shaking_hands_happy_people}
        imageAlt="https://www.pexels.com/photo/photo-of-people-doing-handshakes-3184416/"
        accordionIcon={faHandshake}
      />

      <AccordionPanel
        containerClassName="accordion-panel_container"
        accordionPanelBodytext="Dere mottar låneutstyr"
        accordionPanelButtonText="Låneutstyr"
        accordionContentContainerClassName="accordion-panel_content-container"
        accordionPanelBodytextClassName="accordion-panel_bodytext"
        buttonText="4. Låneutstyr"
        panelIdTitle="panel4-title"
        panelIdContent="panel4-content"
        accordionIconClassName="accordion-icon"
        ariaExpanded="false"
        ariaHidden="true"
        panelId="panel4-heading"
        panelTitleClassName="panel-title"
        imageClassName="accordion-image"
        imageSrc={medical_equipment_on_an_operating_room}
        imageAlt="https://www.pexels.com/photo/medical-equipment-on-an-operation-room-3844581/"
        accordionIcon={faStethoscope}
      />

      <AccordionPanel
        containerClassName="accordion-panel_container"
        accordionPanelBodytext="Delen repareres av vårt team"
        accordionPanelButtonText="Reparasjon"
        accordionContentContainerClassName="accordion-panel_content-container"
        accordionPanelBodytextClassName="accordion-panel_bodytext"
        buttonText="5. Reparasjon"
        panelIdTitle="panel5-title"
        panelIdContent="panel5-content"
        accordionIconClassName="accordion-icon"
        ariaExpanded="false"
        ariaHidden="true"
        panelId="panel5-heading"
        panelTitleClassName="panel-title"
        imageClassName="accordion-image"
        imageSrc={people_repairng_computer_chips}
        imageAlt="people repairing computer chips"
        accordionIcon={faScrewdriverWrench}
      />

      <AccordionPanel
        containerClassName="accordion-panel_container"
        accordionPanelBodytext="Dere mottar den reparerte delen, m/ garantibevis & servicerapport"
        accordionPanelButtonText="Levering"
        accordionContentContainerClassName="accordion-panel_content-container"
        accordionPanelBodytextClassName="accordion-panel_bodytext"
        buttonText="6. Levering"
        panelIdTitle="panel6-title"
        panelIdContent="panel6-content"
        accordionIconClassName="accordion-icon"
        ariaExpanded="false"
        ariaHidden="true"
        panelId="panel6-heading"
        panelTitleClassName="panel-title"
        imageClassName="accordion-image"
        imageSrc={side_view_woman_taking_parcel_from_deliveryman}
        imageAlt="side view of woman taking parcel from a deliveryman"
        accordionIcon={faTruckRampBox}
      />
    </div>
  );
};

export default ServiceConceptAccordion;
