const OfficeTitle = (props) => {
  return (
    <div className={props.containerClassName}>
      <img src={props.src} alt={props.alt} className={props.imageClassName} />
      <h3 className={props.titleClassName}>{props.title}</h3>
    </div>
  );
};

export default OfficeTitle;
