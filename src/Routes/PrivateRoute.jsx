import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/auth/auth-selectors.js";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn } = useSelector(selectAuth);
  console.log(isLoggedIn);
  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
