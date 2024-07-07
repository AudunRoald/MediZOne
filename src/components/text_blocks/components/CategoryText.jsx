const CategoryText = (props) => {
  return (
    <div>
      <p className={props.titleClassName}>{props.title}</p>
      <p className={props.textClassName}>{props.text}</p>
      {props.time__Visable && (
        <p className={props.timeClassName}>{props.time}</p>
      )}
    </div>
  );
};

export default CategoryText;

/* const CategoryText = (props) => {
  return (
    <div className={props.textContainerClassName}>
      <p className={props.titleClassName}>{props.title}</p>
      <p className={props.textClassName}>{props.text}</p>
    </div>
  );
};

export default CategoryText; */
