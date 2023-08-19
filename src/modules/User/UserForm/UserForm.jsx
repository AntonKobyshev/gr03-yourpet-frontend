import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import css from "./UserForm.module.css";

const UserForm = () => {
  const initialValues = {
    name: "",
    email: "",
    birthday: "",
    phone: "",
    city: "",
    avatar: null,
  };

  const [avatarPreview, setAvatarPreview] = useState(null);

  return (
    <div className={css.formContainer}>
      <div className={css.imageWrapper}>
        {avatarPreview && (
          <img src={avatarPreview} alt="avatar" className={css.userImage} />
        )}
      </div>

      <Formik initialValues={initialValues}>
        <Form className={css.form}>
          <div className={css.formLabelBox}>
            <label htmlFor="name">Name:</label>
            <Field className={css.input} type="text" id="name" name="name" />
          </div>
          <div className={css.formLabelBox}>
            <label htmlFor="email">Email:</label>
            <Field
              className={css.input}
              type="number"
              id="email"
              name="email"
            />
          </div>
          <div className={css.formLabelBox}>
            <label htmlFor="birthday">Birthday:</label>
            <Field
              className={css.input}
              type="text"
              id="birthday"
              name="birthday"
            />
          </div>
          <div className={css.formLabelBox}>
            <label htmlFor="phone">Phone:</label>
            <Field
              className={css.input}
              type="number"
              id="phone"
              name="phone"
            />
          </div>
          <div className={css.formLabelBox}>
            <label htmlFor="city">City:</label>
            <Field className={css.input} type="text" id="city" name="city" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;
