const Image = (props) => {
  return (
    <img src={props.image} alt={props.alt} className={props.imageClassName} />
  );
};

export default Image;
