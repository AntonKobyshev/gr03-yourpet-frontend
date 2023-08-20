import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { selectAuth } from '../../redux/auth/auth-selectors';
import Loader from '../../shared/components/Loader/Loader';

const PublicRoute = () => {
  const { isLoggedIn, token } = useSelector(selectAuth);

  if (!isLoggedIn && token) {
    return <Loader />;
  }

  if (isLoggedIn) {
    return <Navigate to="/user" />;
  }

  return <Outlet />;
};

export default PublicRoute;
