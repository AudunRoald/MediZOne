const OfficeTitle = (props) => {
  return (
    <div className="contactOfficeInfoContainer">
      <div className="contactOfficeTitle">
        <img src={props.src} alt={props.alt} />
        <h1>{props.text}</h1>
      </div>
    </div>
  );
};

export default OfficeTitle;
