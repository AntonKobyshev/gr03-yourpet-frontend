import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { selectAuth } from "../../redux/auth/auth-selectors";
import Loader from "../../shared/components/Loader/Loader";

const PrivateRoute = () => {
  const { isLoggedIn, token } = useSelector(selectAuth);

  if (!isLoggedIn && token) {
    return <Loader />;
  }

  if (!isLoggedIn && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
