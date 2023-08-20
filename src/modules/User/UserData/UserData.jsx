import React, { useState } from "react";
import UserForm from "../UserForm/UserForm";
import css from "./UserData.module.css";
import EditIcon from "../../../images/icons/edit.svg";
import CrossIcon from "../../../images/icons/cross14.svg";

const UserData = () => {
  const initialValues = {
    name: "",
    email: "",
    birthday: "",
    phone: "",
    city: "",
    avatar: null,
  };

  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(!editing);
  };

  return (
    <div className={css.userContainer}>
      <UserForm
        initialValues={initialValues}
        editing={editing}
        onEdit={setEditing}
      />
      <button type="button" className={css.editBtn} onClick={handleEditClick}>
        <img
          src={editing ? CrossIcon : EditIcon}
          alt={editing ? "Close icon" : "Edit icon"}
        />
      </button>
    </div>
  );
};

export default UserData;
