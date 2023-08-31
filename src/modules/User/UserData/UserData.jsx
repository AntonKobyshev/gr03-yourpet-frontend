import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Loader from "../../../shared/components/Loader/Loader";
import UserForm from "../UserForm/UserForm";
import { selectIsLoading } from "../../../redux/auth/auth-selectors";
import { fetchUser } from "../../../redux/auth/auth-operations";

const UserCard = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}

      <UserForm />
    </>
  );
};

export default UserCard;
