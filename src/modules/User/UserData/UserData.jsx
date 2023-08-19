import React from "react";
import UserForm from "../UserForm/UserForm";
import css from "./UserData.module.css";
import Logout from "../UserForm/Logout";

const UserData = () => {
  return (
    <div className={css.userContainer}>
      <UserForm />
      <Logout />
    </div>
  );
};

export default UserData;
