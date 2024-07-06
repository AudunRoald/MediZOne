import React from "react";

const AccordionIcon = (props) => {
  return (
    <div aria-hidden="true" className={props.accordionIconClassName}>
      {props.accordionIcon}
    </div>
  );
};

export default AccordionIcon;
