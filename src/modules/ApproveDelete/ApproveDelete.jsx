import React from "react";
import css from "./ApproveDelete.module.css";
import trash2 from "../../images/icons/trash2.svg";

const ApproveDelete = ({ handleClose }) => {
  return (
    <>
      <p className={css.title}>Delete adverstiment?</p>
      <div>
        <p className={css.text}>
          Are you sure you want to delete{" "}
          <span className={css.textAccent}>“Cute dog looking for a home”?</span>{" "}
        </p>{" "}
        <p className={css.text}>You can`t undo this action.</p>
      </div>
      <div className={css.btnContainer}>
        <button onClick={handleClose} className={css.btnAccent} type="button">
          Cancel
        </button>
        <button className={css.btn} type="button">
          <span>Yes</span>
          <img src={trash2} alt="trash" />
        </button>
      </div>
    </>
  );
};

export default ApproveDelete;
