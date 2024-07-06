import TextBlockIcon from "./TextBlockIcon";

const TextBlockWithIcon = (props) => {
  return (
    <div className={props.containerClassName}>
      <div className={props.titleContainerClassName}>
        <TextBlockIcon icon={props.icon} iconClassName={props.iconClassName} />
        <h3 className={props.titleClassName}>{props.title}</h3>
      </div>
      <div className={props.textClassName}>
        {props.text_1__Visable && <p>{props.text_1}</p>}
        {props.text_2__Visable && <p>{props.text_2}</p>}
        {props.text_3__Visable && <p>{props.text_3}</p>}
        {props.text_4__Visable && <p>{props.text_4}</p>}
        {props.text_5__Visable && <p>{props.text_5}</p>}
      </div>
    </div>
  );
};

export default TextBlockWithIcon;
