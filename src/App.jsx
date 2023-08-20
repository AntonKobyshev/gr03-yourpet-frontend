import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "./shared/components/SharedLayout/SharedLayout";
import MainPage from "./pages/MainPage/MainPage";
import NoticesCategoriesList from "./modules/Notices/NoticesCategoriesList";
import NoticesPage from "./pages/NoticesPage/NoticesPage";

const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/main" element={<MainPage />} index />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notices" element={<NoticesPage />}>
          <Route index element={<Navigate to="sell" replace />} />
          <Route path=":categoryName" element={<NoticesCategoriesList />} />
        </Route>
        <Route path="/news" element={null} />
        <Route path="/friends" element={null} />
      </Route>
    </Routes>
  );
}

export default App;
