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
    <>
      {isLoading && pets.length > 0 && (
        <div className={css.listContainer}>
          <ul>
            {pets.map((pet, index) => {
              return (
                <li key={index}>
                  <PetsItem pet={pet} />
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {!isLoading && (
        <div className={css.listContainer}>
          {pets.length > 0 ? (
            <ul>
              {pets.map((pet, index) => {
                return (
                  <li key={index}>
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
    </>
  );
};

export default PetsList;
