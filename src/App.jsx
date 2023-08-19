import { Routes, Route } from "react-router-dom";
import { lazy } from 'react';
import SharedLayout from "./shared/components/SharedLayout/SharedLayout";

const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/main" element={null} index />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notices" element={null} />
        <Route path="/news" element={null} />
        <Route path="/friends" element={null} />
      </Route>
    </Routes>
  );
}

export default App;