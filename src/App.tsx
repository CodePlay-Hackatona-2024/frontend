import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/events" element={<div></div>} />
          <Route path="/my-events" element={<div></div>} />
          <Route path="/shop" element={<div></div>} />
          <Route path="/coupons" element={<div></div>} />
        </Routes>
      </BrowserRouter>
  );
}
