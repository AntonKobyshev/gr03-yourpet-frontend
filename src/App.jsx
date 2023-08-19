import { Routes, Route } from "react-router-dom";
import SharedLayout from "./shared/components/SharedLayout/SharedLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/main" element={null} index />
        <Route path="/register" element={null} />
        <Route path="/login" element={null} />
        <Route path="/notices" element={null} />
        <Route path="/news" element={null} />
        <Route path="/friends" element={null} />
      </Route>
    </Routes>
  );
}

export default App;