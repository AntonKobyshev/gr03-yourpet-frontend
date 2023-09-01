import { useSelector } from "react-redux";
import Loader from "../../../shared/components/Loader/Loader";
import UserForm from "../UserForm/UserForm";
import { selectIsLoading } from "../../../redux/auth/auth-selectors";


const UserCard = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader />}

      <UserForm />
    </>
  );
};

export default UserCard;
