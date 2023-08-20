import React from "react";
import css from "./PetsItem.module.css";
import DeleteIcon from "../../../images/icons/trash2.svg";

const PetsItem = ({ pet }) => {
  const handleButtonClick = () => {
    alert("ButtonClick");
  };

  return (
    <div className={css.petsContainer}>
      <div className={css.imgWrapper}>
        <img src="#" alt="pet" />
      </div>
      <div className={css.textContainer}>
        <button
          type="button"
          className={css.deleteBtn}
          onClick={handleButtonClick}
        >
          <img src={DeleteIcon} alt="Delete icon" />
        </button>

        <ul className={css.list}>
          <li className={css.item}>
            <p className={css.subtitle}>Name:</p>
            <p className={css.textData}>{pet.name}</p>
          </li>
          <li className={css.item}>
            <p className={css.subtitle}>Date of birth:</p>
            <p className={css.textData}>{pet.birthDate}</p>
          </li>
          <li className={css.item}>
            <p className={css.subtitle}>Type:</p>
            <p className={css.textData}>{pet.type}</p>
          </li>

          <li>
            <p>
              <span className={css.subtitle}>Comments:</span> {pet.comments}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PetsItem;
