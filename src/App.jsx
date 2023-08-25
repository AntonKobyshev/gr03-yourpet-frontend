import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import SharedLayout from "./shared/components/SharedLayout/SharedLayout";
import MainPage from "./pages/MainPage/MainPage";
import NoticesCategoriesList from "./modules/Notices/NoticesCategoriesList";
// import PublicRoute from "./Routes/PublicRoute/PublicRoute";
import Loader from "./shared/components/Loader/Loader";
import UserPage from "./pages/UserPage/UserPage";
import AddPetPage from "./pages/AddPetPage/AddPetPage";

// import NewsPage from "./pages/NewsPage/NewsPage";
import { RestrictedRoute } from "./Routes/RestrictedRoute";
import { PrivateRoute } from "./Routes/PrivateRoute";

// import AddPetPage from "./pages/AddPetPage/AddPetPage";

//  import AddPetPage from "./pages/AddPetPage/AddPetPage";

// import NoticesCategoriesList from "./modules/Notices/NoticesCategoriesList/NoticesCategoriesList";
const NoticesPage = lazy(() => import("./pages/NoticesPage/NoticesPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const OurFriendsPage = lazy(() =>
  import("./pages/OurFriendsPage/OurFriendsPage")
);
const NewsPage = lazy(() => import("./pages/NewsPage/NewsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainPage />} />
            <Route path="main" element={<MainPage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/user"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/user" component={<LoginPage />} />
              }
            />
            <Route path="/notices" element={<NoticesPage />}>
              <Route index element={<Navigate to="sell" replace />} />
              <Route path=":categoryName" element={<NoticesCategoriesList />} />
            </Route>
            <Route path="/news" element={<NewsPage />} />
            <Route path="friends" element={<OurFriendsPage />} />
            <Route
              path="/user"
              element={
                <PrivateRoute redirectTo="/login" component={<UserPage />} />
              }
            />
            <Route
              path="/add-pet"
              element={
                <PrivateRoute redirectTo="/login" component={<AddPetPage />} />
              }
            />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
