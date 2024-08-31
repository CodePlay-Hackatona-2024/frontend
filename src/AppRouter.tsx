import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { ToggleGroupDemo } from "./components/navigationBar";
import EventsPage from "./pages/EventsPage";
import { Header } from "./components/header/Header";
import MyEventsPage from "./pages/MyEventsPage";
import ShopPage from "./pages/ShopPage";
import { AuthProvider, useAuth } from "./context/AuthContext";
import EventInfoPage from "./pages/EventInfoPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppRouter: React.FC = () => {
  return (
    <AuthProvider>
      <ToastContainer /> {/* Adicione o ToastContainer aqui */}
      <BrowserRouter>
        <Routes>
          <Route element={<PublicWrapper />}>
            <Route path="/" element={<FirstPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route element={<PrivateWrapper />}>
            <Route path="/events" element={<EventsPage />} />
            <Route path="/my-events" element={<MyEventsPage />} />
            <Route path="/rewards" element={<div />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/event-info/:id" element={<EventInfoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

const PrivateWrapper = () => {
  // const { isAuthenticated } = useAuth();
  const isAuthenticated = true;

  return isAuthenticated ? (
    <>
      <Header />
      <Outlet />
      <ToggleGroupDemo />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

const PublicWrapper = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to="/events" /> : <Outlet />;
};

export default AppRouter;
