import React from "react";
import css from "./Logout.module.css";
import LogoutIcon from "../../../images/icons/logout.svg";

const handleButtonClick = () => {
  alert("ButtonClick");
};

const Logout = () => {
  return (
    <div>
      <button
        type="button"
        className={css.logoutBtn}
        onClick={handleButtonClick}
      >
        <img src={LogoutIcon} alt="Logout icon" />
        <p>Log Out</p>
      </button>
    </div>
  );
};

export default Logout;
