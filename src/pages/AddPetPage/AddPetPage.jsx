import { AddPetForm } from "../../modules/AddPetForm/AddPetForm"
import { useEffect } from 'react';
import css from "./AddPetPage.module.css"

const AddPetPage = () => {
  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.add(css.bodyBg);

    return () => {
      body.classList.remove(css.bodyBg)
    };
  }, []);
  return (
    <>
    < AddPetForm/>
    </>
  );

};

export default AddPetPage;
