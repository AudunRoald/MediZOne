const OfficeTitle = (props) => {
  return (
    <div className="officeTitle">
      <img src={props.src} alt={props.alt} className="countryFlag" />
      <h1 className="countryName">{props.text}</h1>
    </div>
  );
};

export default OfficeTitle;
