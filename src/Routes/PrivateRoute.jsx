import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn, isRefreshing, token } = useSelector(
    (state) => state.auth
  );
  const shouldRedirect = !isLoggedIn && !isRefreshing && !token;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
