import React from "react";
import css from "./Logout.module.css";
import LogoutIcon from "../../../images/icons/logout.svg";

const Logout = () => {
  const handleButtonClick = () => {
    alert("ButtonClick");
  };

  return (
    <div>
      <button
        type="button"
        className={css.logoutBtn}
        onClick={handleButtonClick}
      >
        Log Out
        <img src={LogoutIcon} alt="Logout icon" />
      </button>
    </div>
  );
};

export default Logout;
