import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AccordionPanel = (props) => {
  return (
    <div className={props.containerClassName}>
      <h3 id={props.panelId}>
        <button
          className="accordion-trigger"
          aria-controls={props.panelIdContent}
          aria-expanded={props.ariaExpanded}
        >
          <span className={props.panelTitleClassName} id={props.panelIdTitle}>
            {props.buttonText}
          </span>
          <FontAwesomeIcon
            icon={props.accordionIcon}
            className={props.accordionIconClassName}
          />
        </button>
      </h3>
      <div
        className={props.accordionContentContainerClassName}
        id={props.panelIdContent}
        aria-labelledby={props.panelId}
        role="region"
        aria-hidden={props.ariaHidden}
      >
        <p className={props.accordionPanelBodytextClassName}>
          {props.accordionPanelBodytext}
        </p>
        <img
          src={props.imageSrc}
          alt={props.imageAlt}
          className={props.imageClassName}
        />
      </div>
    </div>
  );
};

export default AccordionPanel;
{
  /*  */
}
