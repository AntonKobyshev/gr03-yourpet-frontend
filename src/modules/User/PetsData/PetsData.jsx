import React from "react";
import css from "./PetsData.module.css";
import PlusIcon from "../../../images/icons/plus.svg";
import PetsList from "../PetsList/PetsList";
import { useNavigate } from "react-router-dom";

const PetsData = () => {
  const navigate = useNavigate()
  const handleButtonClick = () => {
    navigate('/add-pet') 
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
