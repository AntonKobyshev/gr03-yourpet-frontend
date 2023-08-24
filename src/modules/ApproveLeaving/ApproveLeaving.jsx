import React from "react";
import css from "./ApproveLeaving.module.css";
import logoutSvg from "../../images/icons/logoutWhite.svg";

const ApproveLeaving = ({ handleClose, handleLogout }) => {
  return (
    <>
      <p className={css.title}>Already leaving?</p>
      <div className={css.btnContainer}>
        <button onClick={handleClose} className={css.btnAccent} type="button">
          Cancel
        </button>
        <button className={css.btn} type="button" onClick={handleLogout}>
          <span>Yes</span> <img src={logoutSvg} alt="log out button" />
        </button>
      </div>
    </>
  );
};

export default ApproveLeaving;
