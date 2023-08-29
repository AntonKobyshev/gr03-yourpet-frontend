import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectIsLoading, isModalOpen, selectRegistrationSuccessful } from '../../redux/auth/auth-selectors';
import { fetchUser, openModal } from '../../redux/auth/auth-operations';

import ModalDeleteCardNotice from '../../modules/ModalDeleteCardNotice/ModalDeleteCardNotice';
import ModalCongrats from '../../modules/ModalCongrats/ModalCongrats';
import Loader from '../../shared/components/Loader/Loader';
import UserData from "../../modules/User/UserData/UserData";
import PetsData from "../../modules/User/PetsData/PetsData";
import css from "./UserPage.module.css";

const UserPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const showModal = useSelector(isModalOpen);
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchUser());
  }, [dispatch]);

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
