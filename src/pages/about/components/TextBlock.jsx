import TextBlockIcon from "./TextBlockIcon";

const TextBlock = (props) => {
  return (
    <div className={props.className}>
      <div className="textBlockTitleContainer">
        <TextBlockIcon icon={props.icon} iconClassName={props.iconClass} />
        <h1 className={props.titleClass}>{props.title}</h1>
      </div>
      <p>{props.text}</p>
    </div>
  );
};

export default TextBlock;

{
  /* <div className="textBlockTitleContainer">
        <img
          src="https://www.unimed.cn/cdn/shop/files/Logo_200x.png?v=1617256307"
          alt="unimed medical supplies logo"
          className="logoUnimed"
        />
        <h1 className="textBlockTitle">Unimed Medical Supplies</h1>
      </div> */
}
