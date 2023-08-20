import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import css from "./UserForm.module.css";
import Logout from "../UserForm/Logout";

const UserForm = ({ initialValues, editing, onEdit }) => {
  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleSaveClick = () => {
    onEdit(false);
  };

  return (
    <div className={css.formContainer}>
      <div className={css.imageWrapper}>
        {avatarPreview && (
          <img src={avatarPreview} alt="avatar" className={css.userImage} />
        )}
      </div>

      <div>
        <Formik initialValues={initialValues}>
          <Form className={css.form}>
            <div className={css.formLabelBox}>
              <label htmlFor="name">Name:</label>
              <Field
                className={css.input}
                type="text"
                id="name"
                name="name"
                readOnly={!editing}
              />
            </div>
            <div className={css.formLabelBox}>
              <label htmlFor="email">Email:</label>
              <Field
                className={css.input}
                type="number"
                id="email"
                name="email"
                readOnly={!editing}
              />
            </div>
            <div className={css.formLabelBox}>
              <label htmlFor="birthday">Birthday:</label>
              <Field
                className={css.input}
                type="text"
                id="birthday"
                name="birthday"
                readOnly={!editing}
              />
            </div>
            <div className={css.formLabelBox}>
              <label htmlFor="phone">Phone:</label>
              <Field
                className={css.input}
                type="number"
                id="phone"
                name="phone"
                readOnly={!editing}
              />
            </div>
            <div className={css.formLabelBox}>
              <label htmlFor="city">City:</label>
              <Field
                className={css.input}
                type="text"
                id="city"
                name="city"
                readOnly={!editing}
              />
            </div>
          </Form>
        </Formik>

        {editing ? (
          <div className={css.buttonContainer}>
            <button
              type="submit"
              className={css.saveBtn}
              onClick={handleSaveClick}
            >
              Save
            </button>
          </div>
        ) : (
          <Logout />
        )}
      </div>
    </div>
  );
};

export default UserForm;
