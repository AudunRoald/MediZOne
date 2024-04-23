import Styles from "../ContactUs.module.css";

const CategoryContainer = (props) => {
  return (
    <div className={Styles.categoryContainer}>
      <p className={Styles.categoryTitle}>{props.categoryTitle}</p>
      <p className={Styles.categoryText}>{props.categoryText}</p>
      <p className={Styles.categoryTime}>{props.categoryTime}</p>
    </div>
  );
};

export default CategoryContainer;
