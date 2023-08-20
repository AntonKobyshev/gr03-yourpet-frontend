import React from "react";
import css from "./UserPage.module.css";
import UserData from "../../modules/User/UserData/UserData";
import PetsData from "../../modules/User/PetsData/PetsData";

const UserPage = () => {
  return (
    <div className={css.container}>
      <div className={css.userContainer}>
        <p className={css.title}>My information:</p>
        <UserData></UserData>
      </div>
      <div className={css.petsContainer}>
        <p className={css.title}>My pets:</p>
        <PetsData />
      </div>
    </div>
  );
};

export default UserPage;
