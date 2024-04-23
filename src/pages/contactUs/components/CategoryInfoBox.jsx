import CategoryIcon from "./CategoryIcon";
import CategoryContainer from "./CategoryContainer";
import Styles from "../ContactUs.module.css";

const CategoryInfoBox = (props) => {
  return (
    <div className={Styles.categoryInfoBox}>
      <CategoryIcon icon={props.icon} alt={props.alt} />
      <CategoryContainer
        categoryTitle={props.categoryTitle}
        categoryText={props.categoryText}
        categoryTime={props.categoryTime}
      />
    </div>
  );
};

export default CategoryInfoBox;
