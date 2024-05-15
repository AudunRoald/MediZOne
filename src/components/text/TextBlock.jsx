import TextBlockIcon from "./TextBlockIcon";

const TextBlock = (props) => {
  return (
    <div className={props.className}>
      <div className="textblock_title_container">
        <TextBlockIcon icon={props.icon} iconClassName={props.iconClass} />
        <h1 className={props.titleClass}>{props.title}</h1>
      </div>
      <p className={props.textClass}>{props.text}</p>
    </div>
  );
};

export default TextBlock;
