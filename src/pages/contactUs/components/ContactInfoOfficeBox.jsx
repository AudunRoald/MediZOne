import CategoryIcon from "./CategoryIcon";
import ContactInfoCategory from "./ContactInfoCategory";

const ContactInfoOfficeBox = (props) => {
  return (
    <div className="contactInfoOfficeBox">
      <CategoryIcon icon={props.icon} alt={props.alt} />
      <ContactInfoCategory
        categoryTitle={props.categoryTitle}
        categoryText={props.categoryText}
      />
    </div>
  );
};

export default ContactInfoOfficeBox;
