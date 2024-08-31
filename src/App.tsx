import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
// import EventsPage from "./pages/EventsPage";
// import MyEventsPage from "./pages/MyEventsPage";
// import ShopPage from "./pages/ShopPage";
// import CouponsPage from "./pages/CouponsPage";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* <Route path="/events" element={<EventsPage />} />
          <Route path="/my-events" element={<MyEventsPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/coupons" element={<CouponsPage />} /> */}
        </Routes>
      </BrowserRouter>
  );
}
