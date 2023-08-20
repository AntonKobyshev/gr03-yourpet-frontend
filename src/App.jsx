import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "./shared/components/SharedLayout/SharedLayout";
// import NoticesCategoriesList from "./modules/Notices/NoticesCategoriesList/NoticesCategoriesList";

const NoticesPage = lazy(() => import("./pages/NoticesPage/NoticesPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/main" element={null} index />
        <Route path="/register" element={null} />
        <Route path="/login" element={null} />
        <Route path="/notices" element={<NoticesPage />}>
          {/* <Route index element={<NoticesCategoriesList />} />
          <Route path="sell" element={<NoticesCategoriesList />} />
          <Route path="lost-found" element={<NoticesCategoriesList />} />
          <Route path="for-free" element={<NoticesCategoriesList />} />
          <Route path="favorite" element={<NoticesCategoriesList />} />
          <Route path="own" element={<NoticesCategoriesList />} /> */}
        </Route>
        <Route path="/news" element={null} />
        <Route path="/friends" element={null} />
      </Route>
    </Routes>
  );
}

export default App;
