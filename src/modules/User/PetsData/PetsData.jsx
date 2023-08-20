import React from "react";
import css from "./PetsData.module.css";
import PlusIcon from "../../../images/icons/plus.svg";
import PetsList from "../PetsList/PetsList";

const PetsData = () => {
  const handleButtonClick = () => {
    alert("ButtonClick");
  };

  return (
    <div className={css.petsDataContainer}>
      <button type="button" className={css.addBtn} onClick={handleButtonClick}>
        <img src={PlusIcon} alt="Add icon" />
        <p>Add pet</p>
      </button>
      <PetsList />
    </div>
  );
};

export default PetsData;
