import Styles from "../ContactUs.module.css";

const OfficeTitle = (props) => {
  return (
    <div className={Styles.officeTitle}>
      <img src={props.src} alt={props.alt} className={Styles.countryFlag} />
      <h1 className={Styles.countryName}>{props.text}</h1>
    </div>
  );
};

export default OfficeTitle;
