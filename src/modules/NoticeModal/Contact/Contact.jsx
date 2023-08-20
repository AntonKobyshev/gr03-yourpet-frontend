import PropTypes from "prop-types";

import Button from "../../../shared/components/ButtonNotices/ButtonNotices";
import css from "./contact.module.css";
const Contact = ({ phone }) => {
  return (
    <div className={css.myСomponent}>
      <Button className={css.contact}>
        <a href={`tel:${phone}`} className={css.contactLink}>
          Contact
        </a>
      </Button>
    </div>
  );
};
export default Contact;

Contact.propTypes = {
  phone: PropTypes.string,
};
