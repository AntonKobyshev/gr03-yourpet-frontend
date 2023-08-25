import { useSelector } from "react-redux";
import {
  userMyPets,
  selectIsLoading,
} from "../../../redux/auth/auth-selectors";
import Loader from "../../../shared/components/Loader/Loader";
import PetsItem from "../PetsItem/PetsItem";
import css from "./PetsList.module.css";

const PetsList = () => {
  const isLoading = useSelector(selectIsLoading);
  const pets = useSelector(userMyPets);

  return (
    <div className={css.listContainer}>
      {isLoading && pets.length > 0 && (
        <div className={css.petCardWrapper}>
          <ul className={css.list}>
            {pets.map((pet, index) => {
              return (
                <li key={index} className={css.item}>
                  <PetsItem pet={pet} />
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {!isLoading && (
        <div className={css.petCardWrapper}>
          {pets.length > 0 ? (
            <ul className={css.list}>
              {pets.map((pet, index) => {
                return (
                  <li key={index} className={css.item}>
                    <PetsItem pet={pet} />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className={css.title}>{"My pets list empty"}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PetsList;
