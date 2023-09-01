import { useSelector } from 'react-redux';
import { selectIsLoading, isModalOpen } from '../../redux/auth/auth-selectors';


import ModalCongrats from '../../modules/ModalCongrats/ModalCongrats';
import Loader from '../../shared/components/Loader/Loader';
import UserData from "../../modules/User/UserData/UserData";
import PetsData from "../../modules/User/PetsData/PetsData";
import css from "./UserPage.module.css";

const UserPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const showModal = useSelector(isModalOpen);
  return (
    <div className={css.container}>
   
      {showModal && <ModalCongrats />}
      {isLoading && <Loader />}
      <div className={css.userContainer}>
        <p className={css.title}>My information:</p>
        <UserData />
      </div>
      <div className={css.petsContainer}>
        <p className={css.title}>My pets:</p>
        <PetsData />
      </div>
    </div>
  );
};

export default UserPage;
