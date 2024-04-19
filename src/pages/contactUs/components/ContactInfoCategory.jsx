const ContactInfoCategory = (props) => {
  return (
    <div className="contactInfoCategory">
      <p className="contactInfoCategoryTitle">{props.categoryTitle}</p>
      <p className="contactInfoCategoryText">{props.categoryText}</p>
    </div>
  );
};

export default ContactInfoCategory;
