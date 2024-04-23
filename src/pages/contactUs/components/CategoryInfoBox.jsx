import CategoryIcon from "./CategoryIcon";
import CategoryContainer from "./CategoryContainer";

const CategoryInfoBox = (props) => {
  return (
    <div className="categoryInfoBox">
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
