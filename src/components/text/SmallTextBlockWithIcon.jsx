import TextBlockIcon from "./TextBlockIcon";

const SmallTextBlockWithIcon = (props) => {
  return (
    <div className={props.containerClass}>
      <div className={props.titleContainerClass}>
        <TextBlockIcon icon={props.icon} iconClassName={props.iconClass} />
        <h1 className={props.titleClass}>{props.title}</h1>
      </div>
      <p className={props.textClass}>{props.text}</p>
    </div>
  );
};

export default SmallTextBlockWithIcon;
