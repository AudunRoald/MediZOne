const CategoryContainer = (props) => {
  return (
    <div className="categoryContainer">
      <p className="categoryTitle">{props.categoryTitle}</p>
      <p className="categoryText">{props.categoryText}</p>
      <p className="categoryTime">{props.categoryTime}</p>
    </div>
  );
};

export default CategoryContainer;
