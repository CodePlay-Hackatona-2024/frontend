import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./pages/FirstPage";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/login" element={<div></div>} />
          <Route path="/register" element={<div></div>} />
          <Route path="/events" element={<div></div>} />
          <Route path="/my-events" element={<div></div>} />
          <Route path="/shop" element={<div></div>} />
          <Route path="/coupons" element={<div></div>} />
        </Routes>
      </BrowserRouter>
  );
}
