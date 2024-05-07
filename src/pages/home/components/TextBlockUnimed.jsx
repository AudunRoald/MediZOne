import Styles from "../home.module.css";

const TextBlockUnimed = () => {
  return (
    <div className={Styles.text_block_container}>
      <div className="title_container">
        <img
          src="https://www.unimed.cn/cdn/shop/files/Logo_200x.png?v=1617256307"
          alt="unimed logo"
          className="logoTextBlock"
        />
        <h1>Unimed Medical Supplies</h1>
      </div>
      <div className="text_block">
        <button
          to="https://www.unimed.cn/"
          alt="button to Unimed Medical Supplies homepage"
          className="button buttonVisitUnimed"
        >
          visit unimed medical supplies
        </button>
        <button
          to="https://medizonehealthcare.no/wp-content/uploads/2021/12/1.-Unimed_Product-Catalogue_B1.4_21.07.08p-2.pdf"
          alt="open unimed product catalog"
          className="button buttonDownload"
        >
          open unimed product catalog
        </button>
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
