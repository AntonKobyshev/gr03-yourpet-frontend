import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, useEffect } from "react";
import SharedLayout from "./shared/components/SharedLayout/SharedLayout";
import MainPage from "./pages/MainPage/MainPage";
import NoticesCategoriesList from "./modules/Notices/NoticesCategoriesList";
import Loader from "./shared/components/Loader/Loader";

import NewsPage from "./pages/NewsPage/NewsPage";
import { RestrictedRoute } from "./Routes/RestrictedRoute";
import { useDispatch, useSelector } from "react-redux";
import { current } from "./redux/auth/auth-operations";

import UserPage from "./pages/UserPage/UserPage";
import AddPetPage from "./pages/AddPetPage/AddPetPage";

import { PrivateRoute } from "./Routes/PrivateRoute";

// import NoticesCategoriesList from "./modules/Notices/NoticesCategoriesList/NoticesCategoriesList";

const NoticesPage = lazy(() => import("./pages/NoticesPage/NoticesPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const OurFriendsPage = lazy(() =>
  import("./pages/OurFriendsPage/OurFriendsPage")
);
const NewsPage = lazy(() => import("./pages/NewsPage/NewsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const AddPetPage = lazy(() => import("./pages/AddPetPage/AddPetPage"));
const UserPage = lazy(() => import("./pages/UserPage/UserPage"));

function App() {
  const { isRefreshing } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="main" element={<MainPage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/user" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/user" component={<LoginPage />} />
          }
        />
        <Route
          path="/add-pet"
          element={
            <PrivateRoute redirectTo="/login" component={<AddPetPage />} />
          }
        />
        <Route
          path="/user"
          element={
            <PrivateRoute redirectTo="/login" component={<UserPage />} />
          }
        />
        <Route path="/notices" element={<NoticesPage />}>
          <Route index element={<Navigate to="sell" replace />} />
          <Route path=":categoryName" element={<NoticesCategoriesList />} />
        </Route>
        <Route path="/news" element={<NewsPage />} />
        <Route path="friends" element={<OurFriendsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
