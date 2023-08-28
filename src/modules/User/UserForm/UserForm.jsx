import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { logout } from "../../../redux/auth/auth-operations";
import ApproveLeaving from "../../ApproveLeaving/ApproveLeaving";
import {
  fetchUpdateUser,
  fetchUpdateAvatar,
} from "../../../redux/auth/auth-operations";
import {
  selectAuth,
  selectIsLoading,
  selectIsLoggedIn,
  selectlogoutSuccessful,
  userInfo,
} from "../../../redux/auth/auth-selectors";
import ModalApproveAction from "../../ModalApproveAction/ModalApproveAction";
import Loader from "../../../shared/components/Loader/Loader";
import css from "./UserForm.module.css";
import UserAvatar from "../UserAvatar/UserAvatar";
import UserLogoutBtn from "../UserLogoutBtn/UserLogoutBtn";

const UserForm = () => {
  const { token } = useSelector(selectAuth);
  const isLoading = useSelector(selectIsLoading);
  const { user } = useSelector(userInfo);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isPhotoUploaded, setIsPhotoUploaded] = useState(false);
  const filePicker = useRef(null);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    birthday: user.birthday,
    phone: user.phone,
    city: user.city,
  });

  const [editingFields, setEditingFields] = useState({
    name: false,
    email: false,
    birthday: false,
    phone: false,
    city: false,
  });

  const [editAllFields, setEditAllFields] = useState(false);

  const [open, setOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const logoutSuccessful = useSelector(selectlogoutSuccessful);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isLoggedIn && logoutSuccessful) {
      setOpen(false);
    }
  }, [isLoading, isLoggedIn, logoutSuccessful]);

  const handleChangeAvatar = (e) => {
    setIsPhotoUploaded(false);
    const file = e.target.files[0];
    setSelectedImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleDeleteAvatar = () => {
    setPreviewImage(null);
    setIsPhotoUploaded(true);
  };

  const addAvatarBtn = () => {
    filePicker.current.click();
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("imageURL", selectedImage);

    await dispatch(fetchUpdateAvatar({ token, formData }));

    setIsPhotoUploaded(true);
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    return setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const updatedData = {};
      for (const fieldName in formData) {
        const value = formData[fieldName];
        if (value !== user[fieldName]) {
          updatedData[fieldName] = value;
        }
      }
      if (Object.keys(updatedData).length === 0) {
        return;
      }
      const results = [];
      for (const fieldName in updatedData) {
        const value = updatedData[fieldName];
        const result = await dispatch(
          fetchUpdateUser({
            token,
            fieldToUpdate: fieldName,
            newValue: value,
          })
        );
        results.push(result);
      }
      results.forEach((result) => {
        if (result.meta.requestStatus !== "fulfilled") {
          const updatedUser = { ...user, [result.payload.fieldToUpdate]: result.payload.newValue };
    dispatch(userInfo.actions.setUser(updatedUser));
        }
      });
    } catch (error) {}
  };

  const handleEditAllFields = () => {
    setEditAllFields(!editAllFields);
    setIsEditing(!editAllFields);
    setEditingFields((prevEditingFields) => {
      const updatedEditingFields = {};
      for (const fieldName in prevEditingFields) {
        updatedEditingFields[fieldName] = !editAllFields;
      }
      return updatedEditingFields;
    });
  };

  const fields = [
    { fieldName: "name", label: "Name", type: "text", placeholder: "Name" },
    {
      fieldName: "email",
      label: "Email",
      type: "email",
      placeholder: "email@xxx.com",
    },
    {
      fieldName: "birthday",
      label: "Birthday",
      type: "text",
      placeholder: "00.00.0000",
    },
    {
      fieldName: "phone",
      label: "Phone",
      type: "tel",
      placeholder: "+38000000000",
    },
    { fieldName: "city", label: "City", type: "text", placeholder: "Kyiv" },
  ];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleLogout = () => {
    handleClose();
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
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
      <div>
        {isLoading && <Loader />}

        <div className={css.myСomponent}>
          <div className={css.wrapper}>
            <Formik
              initialValues={{
                name: user.name,
                email: user.email,
                birthday: user.birthday,
                phone: user.phone,
                city: user.city,
              }}
            >
              {({ errors, touched }) => (
                <Form className={css.forma}>
                  <button onClick={handleEditAllFields}>
                    {editAllFields ? "Cancel Edit All" : "Edit All"}
                  </button>
                  <UserAvatar
                    previewImage={previewImage}
                    selectedImage={selectedImage}
                    isPhotoUploaded={isPhotoUploaded}
                    handleUpload={handleUpload}
                    handleDeleteAvatar={handleDeleteAvatar}
                    addAvatarBtn={addAvatarBtn}
                    handleChangeAvatar={handleChangeAvatar}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                  />
                  {user && (
                    <div className={css.formWrapper}>
                      {fields.map((field) => (
                        <div className={css.row} key={field.fieldName}>
                          <label className={css.label}>{field.label}:</label>

                          <div className={css.inputContainer}>
                            <input
                              name={field.fieldName}
                              type={field.type}
                              className={css.input}
                              value={formData[field.fieldName]}
                              placeholder={field.placeholder}
                              required={field.email}
                              onChange={handleChangeInput}
                              disabled={!editingFields[field.fieldName]}
                            />
                            {errors[field.fieldName] &&
                            touched[field.fieldName] ? (
                              <div>{errors[field.fieldName]}</div>
                            ) : null}
                          </div>
                        </div>
                      ))}
                      <UserLogoutBtn handleOpen={handleOpen} />
                      {isEditing && (
                        <button onClick={handleSaveChanges}>
                          Save Changes
                        </button>
                      )}
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserForm;
