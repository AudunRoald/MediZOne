import CategoryIcon from "./components/CategoryIcon";
import CategoryText from "./components/CategoryText";

const CategoryTextBlockWithIcon = (props) => {
  return (
    <div className={props.containerClassName}>
      <CategoryIcon
        icon={props.icon}
        alt={props.alt}
        iconClassName={props.iconClassName}
      />
      <CategoryText
        title={props.title}
        text={props.text}
        textClassName={props.textClassName}
        titleClassName={props.titleClassName}
        time={props.time}
        time__Visable={props.time__Visable}
        timeClassName={props.timeClassName}
      />
    </div>
  );
};

export default CategoryTextBlockWithIcon;

{
  /* <div className={props.containerClassName}>
      <CategoryIcon
        icon={props.icon}
        alt={props.alt}
        iconClassName={props.iconClassName}
      />
      <CategoryText
        textContainerClassName={props.textContainerClassName}
        title={props.title}
        text={props.text}
        titleClassName={props.titleClassName}
        textClassName={props.textClassName}
      />
    </div> */
}
