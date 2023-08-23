import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import css from "./UserForm.module.css";
// import Logout from "../../Header/Logout/Logout";
import CameraIcon from "../../../images/icons/camera.svg";
import CheckIcon from "../../../images/icons/check.svg";
import CrossIcon from "../../../images/icons/cross14.svg";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/auth/auth-operations";
import logoutSvg from "../../Header/UserNav/logout.svg";
import ModalApproveAction from "../../ModalApproveAction/ModalApproveAction";
import ApproveLeaving from "../../ApproveLeaving/ApproveLeaving";
// import ModalTitle from "../../ModalTitle/ModalTitle";


const UserForm = ({ initialValues, editing, onEdit }) => {
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarUploaded, setAvatarUploaded] = useState(false);
  const [showConfirmButtons, setShowConfirmButtons] = useState(false);


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
    onEdit(false);
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
        <Formik initialValues={initialValues}>
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
                  type="email"
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
          <button className={css.logoutBtn} onClick={handleOpen}>
            Log out
            <img src={logoutSvg} alt="log out button" />
          </button>
        )}
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
