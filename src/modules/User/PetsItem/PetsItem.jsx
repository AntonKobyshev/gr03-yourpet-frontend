import { useState } from "react";
import DeleteIcon from "../../../images/icons/delete.svg";
import { defaultImageUrl } from "../../../shared/helpers/constants";
import css from "./PetsItem.module.css";

import ModalApproveActionDeletePet from "../../ModalApproveActionDeletePet/ModalApproveActionDeletePet";

const PetsItem = ({
  pet: { image, name, _id, birthday, breed, comments },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.petsContainer}>
      {isModalOpen && (
        < ModalApproveActionDeletePet closeModal={closeModal} _id={_id} name={name} />
      )}

      <div className={css.imgWrapper}>
        <img
          className={css.img}
          src={image ? image : defaultImageUrl}
          alt="pet"
        />
      </div>
      <div className={css.textContainer}>
        <button type="button" className={css.deleteBtn} onClick={handleDelete}>
          <img src={DeleteIcon} alt="Delete icon" />
        </button>

        <ul className={css.list}>
          <li className={css.item}>
            <p className={css.subtitle}>Name:</p>
            <p className={css.textData}>{name}</p>
          </li>
          <li className={css.item}>
            <p className={css.subtitle}>Date of birth:</p>
            <p className={css.textData}>{birthday}</p>
          </li>
          <li className={css.item}>
            <p className={css.subtitle}>Type:</p>
            <p className={css.textData}>{breed}</p>
          </li>

          <li>
            <p>
              <span className={css.subtitle}>Comments:</span> {comments}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PetsItem;
