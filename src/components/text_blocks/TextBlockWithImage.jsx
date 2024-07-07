import { useState } from "react";
import Button from "../buttons/Button";
import Image from "./components/Image";

const TextBlockWithImage = (props) => {
  /* console.log("text_1 :", props.textOneVisable);
  console.log("text_2 :", props.textTwoVisable);
  console.log("text_3 :", props.textThreeVisable);
  console.log("text_4 :", props.textFourVisable); */

  return (
    <div className={props.containerClassName}>
      <div className={props.titleContainerClassName}>
        <Image image={props.image} imageClassName={props.imageClassName} />
        <h1 className={props.titleClassName}>{props.title}</h1>
      </div>
      <div className={props.textClassName}>
        {props.text_1__Visable && <p>{props.text_1}</p>}
        {props.text_2__Visable && <p>{props.text_2}</p>}
        {props.text_3__Visable && <p>{props.text_3}</p>}
        {props.text_4__Visable && <p>{props.text_4}</p>}

        {props.button_1__Visable && (
          <Button
            to_1={props.to}
            buttonClassName={props.buttonClassName}
            buttonText={props.buttonText_1}
          />
        )}

        {props.button_2__Visable && (
          <Button
            to_1={props.to}
            buttonClassName={props.buttonClassName}
            buttonText={props.buttonText_2}
          />
        )}
      </div>
    </div>
  );
};

export default TextBlockWithImage;
