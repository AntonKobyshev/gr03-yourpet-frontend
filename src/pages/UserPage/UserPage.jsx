import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { selectIsLoading } from '../../redux/auth/auth-selectors';
import { fetchUser } from '../../redux/auth/auth-operations';

import Loader from '../../shared/components/Loader/Loader';
import UserData from "../../modules/User/UserData/UserData";
import PetsData from "../../modules/User/PetsData/PetsData";
import css from "./UserPage.module.css";

const UserPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

    useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className={css.container}>
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
