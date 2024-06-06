import Button from "../../../components/buttons/Button";

const TextBlockUnimed = () => {
  return (
    <div className="textblock-container">
      <div className="textblock-container_title-wrapper">
        <img
          src="https://www.unimed.cn/cdn/shop/files/Logo_200x.png?v=1617256307"
          alt="unimed logo"
          className="textblock-logo_unimed"
        />
        <h1>Unimed Medical Supplies</h1>
      </div>
      <div className="textblock-container_text">
        <Button
          buttonText="visit unimed medical supplies"
          buttonClass="button button_call-to-action"
          to="https://www.unimed.cn/"
        />
        <Button
          buttonText="open unimed product catalog"
          buttonClass="button button_call-to-action"
          to="https://medizonehealthcare.no/wp-content/uploads/2021/12/1.-Unimed_Product-Catalogue_B1.4_21.07.08p-2.pdf"
        />
      </div>
    </div>
  );
};

export default TextBlockUnimed;

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
