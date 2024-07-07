import Icon from "./components/Icon";

const TextBlockWithIcon = (props) => {
  return (
    <div className={props.containerClassName}>
      <div className={props.titleContainerClassName}>
        <Icon icon={props.icon} iconClassName={props.iconClassName} />
        <h3 className={props.titleClassName}>{props.title}</h3>
      </div>
      <p className={props.textClassName}>{props.text}</p>
    </div>
  );
};

export default TextBlockWithIcon;

{
  /* <div className={props.textClassName}>
  {props.text__Visable && <p>{props.text}</p>}
  {props.text_1__Visable && <p>{props.text_1}</p>}
  {props.text_2__Visable && <p>{props.text_2}</p>}
  {props.text_3__Visable && <p>{props.text_3}</p>}
  {props.text_4__Visable && <p>{props.text_4}</p>}
  {props.text_5__Visable && <p>{props.text_5}</p>}
</div>;
 */
}
