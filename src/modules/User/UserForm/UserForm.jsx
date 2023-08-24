import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import css from "./UserForm.module.css";
import Logout from "../../Header/Logout/Logout";
import CameraIcon from "../../../images/icons/camera.svg";
import CheckIcon from "../../../images/icons/check.svg";
import CrossIcon from "../../../images/icons/cross14.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/auth/auth-operations";
import ModalApproveAction from "../../ModalApproveAction/ModalApproveAction";
import ApproveLeaving from "../../ApproveLeaving/ApproveLeaving";
import Tooltip from "./Tooltip";
import { userFormSchema } from "../../../shared/helpers/schemas";
import { useSelector } from "react-redux";

const UserForm = ({ initialValues, editing, onEdit }) => {
  const [avatarPreview, setAvatarPreview] = useState(initialValues.avatar);
  const [avatarUploaded, setAvatarUploaded] = useState(false);
  const [showConfirmButtons, setShowConfirmButtons] = useState(false);
  const [saveButtonClicked, setSaveButtonClicked] = useState(false);
  const [hasValidationErrors, setHasValidationErrors] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleLogout = () => {
    handleClose();
    dispatch(logout());
    navigate("/");
  };

  const handleSaveClick = () => {
    // Якщо була спроба натиснути кнопку "Save"
    if (saveButtonClicked) {
      // Якщо є помилки валідації, не виконуємо onEdit
      if (!hasValidationErrors) {
        onEdit(false);
      }
    }
  };
  const handleEditPhotoClick = () => {
    const fileInput = document.getElementById("avatar");

    fileInput.click();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarPreview(reader.result);
        setAvatarUploaded(true);
        setShowConfirmButtons(true);
      };
      reader.readAsDataURL(file);
    } else {
      setAvatarPreview(null);
      setAvatarUploaded(false);
      setShowConfirmButtons(false);
    }
  };

  const handleDeleteAvatar = () => {
    setAvatarPreview(null);
    setShowConfirmButtons(false);
  };

  const handleConfirmClick = () => {
    setShowConfirmButtons(false);
  };

  return (
    <div className={css.formContainer}>
      <div className={css.imageWrapper}>
        <img src={user.imageURL} alt="avatar" className={css.userImage} />

        {editing && !showConfirmButtons && (
          <button
            type="button"
            className={css.editPhotoButton}
            onClick={handleEditPhotoClick}
          >
            <img src={CameraIcon} alt={"Camera icon"} />
            Edit photo
          </button>
        )}

        {editing && avatarUploaded && showConfirmButtons && (
          <div className={css.confirmButtons}>
            <button
              type="button"
              className={css.confirmBtn}
              onClick={handleConfirmClick}
            >
              <img src={CheckIcon} alt={"Check icon"} />
            </button>
            <p>Confirm</p>
            <button
              type="button"
              className={css.deleteBtn}
              onClick={handleDeleteAvatar}
            >
              <img src={CrossIcon} alt={"Cross icon"} />
            </button>
          </div>
        )}
      </div>

      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={userFormSchema}
          onSubmit={handleSaveClick}
          validate={(values) => {
            try {
              userFormSchema.validateSync(values, { abortEarly: false });
              setHasValidationErrors(false);
            } catch (validationError) {
              setHasValidationErrors(true);
            }
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className={css.formAvatar}>
                <Field
                  className={css.input}
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleAvatarChange}
                  style={{ display: "none" }}
                  readOnly={!editing}
                />
              </div>
              <div className={css.inputsContainer}>
                <div className={css.formLabelBox}>
                  <label htmlFor="name">Name:</label>
                  <Tooltip
                    text={errors.name}
                    show={touched.name && errors.name}
                  >
                    <Field
                      className={`${css.input} ${
                        touched.name && errors.name ? css.errorInput : ""
                      }`}
                      type="text"
                      id="name"
                      name="name"
                      readOnly={!editing}
                    />
                  </Tooltip>
                </div>
                <div className={css.formLabelBox}>
                  <label htmlFor="email">Email:</label>
                  <Tooltip
                    text={errors.email}
                    show={touched.email && errors.email}
                  >
                    <Field
                      className={`${css.input} ${
                        touched.email && errors.email ? css.errorInput : ""
                      }`}
                      type="email"
                      id="email"
                      name="email"
                      readOnly={!editing}
                    />
                  </Tooltip>
                </div>
                <div className={css.formLabelBox}>
                  <label htmlFor="birthday">Birthday:</label>
                  <Tooltip
                    text={errors.birthday}
                    show={touched.birthday && errors.birthday}
                  >
                    <Field
                      className={`${css.input} ${
                        touched.birthday && errors.birthday
                          ? css.errorInput
                          : ""
                      }`}
                      type="date"
                      id="birthday"
                      name="birthday"
                      // format="DD-MM-YYYY"
                      readOnly={!editing}
                    />
                  </Tooltip>
                </div>
                <div className={css.formLabelBox}>
                  <label htmlFor="phone">Phone:</label>
                  <Tooltip
                    text={errors.phone}
                    show={touched.phone && errors.phone}
                  >
                    <Field
                      className={`${css.input} ${
                        touched.phone && errors.phone ? css.errorInput : ""
                      }`}
                      type="number"
                      id="phone"
                      name="phone"
                      readOnly={!editing}
                    />
                  </Tooltip>
                </div>
                <div className={css.formLabelBox}>
                  <label htmlFor="city">City:</label>
                  <Tooltip
                    text={errors.city}
                    show={touched.city && errors.city}
                  >
                    <Field
                      className={`${css.input} ${
                        touched.city && errors.city ? css.errorInput : ""
                      }`}
                      type="text"
                      id="city"
                      name="city"
                      readOnly={!editing}
                    />
                  </Tooltip>
                </div>
              </div>
              {editing ? (
                <div className={css.buttonContainer}>
                  <button
                    type="submit"
                    className={css.saveBtn}
                    onClick={() => {
                      setSaveButtonClicked(true);
                      handleSaveClick();
                    }}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <Logout
                  className={css.logoutBtnProfile}
                  onClick={handleOpen}
                  iconColor="blue"
                />
              )}
            </Form>
          )}
        </Formik>
      </div>
      {open && (
        <ModalApproveAction
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
        >
          <ApproveLeaving
            handleClose={handleClose}
            handleLogout={handleLogout}
          />
        </ModalApproveAction>
      )}
    </div>
  );
};

export default UserForm;
