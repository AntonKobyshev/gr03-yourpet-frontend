import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "./shared/components/SharedLayout/SharedLayout";
import MainPage from "./pages/MainPage/MainPage";
import NoticesCategoriesList from "./modules/Notices/NoticesCategoriesList";
import PublicRoute from "./Routes/PublicRoute/PublicRoute";
import PrivateRoute from "./Routes/PrivateRoute/PrivateRoute";
import ModalTitle from "./modules/ModalTitle/ModalTitle";
import UserPage from "./pages/UserPage/UserPage";
import AddPetPage from "./pages/AddPetPage/AddPetPage";

import NewsPage from "./pages/NewsPage/NewsPage";
// import AddPetPage from "./pages/AddPetPage/AddPetPage";

//  import AddPetPage from "./pages/AddPetPage/AddPetPage";

// import NoticesCategoriesList from "./modules/Notices/NoticesCategoriesList/NoticesCategoriesList";
const NoticesPage = lazy(() => import("./pages/NoticesPage/NoticesPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notices" element={<NoticesPage />}>
          <Route index element={<Navigate to="sell" replace />} />
          <Route path=":categoryName" element={<NoticesCategoriesList />} />
        </Route>
        <Route path="/news" element={<NewsPage />} />
        <Route path="/friends" element={null} />
        <Route element={<PublicRoute />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="user" element={<UserPage />} />
          {<Route path="add-pet" element={<AddPetPage />} />}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
