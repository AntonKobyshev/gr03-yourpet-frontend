import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { logout } from "../../../redux/auth/auth-operations";
import ApproveLeaving from "../../ApproveLeaving/ApproveLeaving";
import { fetchUpdateUser } from "../../../redux/auth/auth-operations";
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
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import CloseIcon from "@mui/icons-material/Close";
import { fields } from "../../../shared/helpers/constants";

const UserForm = () => {
  const { token } = useSelector(selectAuth);
  const isLoading = useSelector(selectIsLoading);
  const { user } = useSelector(userInfo);
  const [isEditing, setIsEditing] = useState(false);
  const [editAllFields, setEditAllFields] = useState(false);

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
          const updatedUser = {
            ...user,
            [result.payload.fieldToUpdate]: result.payload.newValue,
          };
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
                <Form className={css.formContainer}>
                  <>
                    <button type="button"
                      onClick={handleEditAllFields}
                      className={css.buttonClose}
                    >
                      {editAllFields ? (
                        <CloseIcon className={css.icon} />
                      ) : (
                        <DriveFileRenameOutlineIcon className={css.icon} />
                      )}
                    </button>
                  </>

                  <UserAvatar
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

                      {isEditing && (
                        <button type="button"
                          className={css.btnSave}
                          onClick={handleSaveChanges}
                        >
                          Save
                        </button>
                      )}
                      <UserLogoutBtn
                        handleOpen={handleOpen}
                        editAllFields={editAllFields}
                      />
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
