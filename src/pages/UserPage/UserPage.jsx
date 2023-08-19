import React from "react";
import css from "./UserPage.module.css";
import UserData from "../../modules/User/UserData/UserData";

const UserPage = () => {
  return (
    <>
      <div className={css.userInfoContainer}>
        <p className={css.title}>My information:</p>
        <UserData></UserData>
      </div>
      <div className={css.petsContainer}>
        <p className={css.title}>My pets:</p>
      </div>
    </>
  );
};

export default UserPage;
