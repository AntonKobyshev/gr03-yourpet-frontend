import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
