import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { ToggleGroupDemo } from "./components/navigationBar";
import EventsPage from "./pages/EventsPage";
import { Header } from "./components/header/Header";
import MyEventsPage from "./pages/MyEventsPage";
import ShopPage from "./pages/ShopPage";

const AppRouter: React.FC = () => {
  const isAuthenticated = true;
  return (
    <BrowserRouter>
      {/* This will appear on every page */}
      <Routes>
        <Route element={<PublicWrapper auth={{ isAuthenticated }} />}>
          <Route path="/" element={<FirstPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<PrivateWrapper auth={{ isAuthenticated }} />}>
          <Route path="/events" element={<EventsPage />} />
          <Route path="/my-events" element={<MyEventsPage />} />
          <Route path="/rewards" element={<div />} />
          <Route path="/shop" element={<ShopPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const PrivateRoute = ({
  auth: { isAuthenticated },
  children,
}: {
  auth: { isAuthenticated: boolean };
  children: React.ReactNode;
}) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const PrivateWrapper = ({
  auth: { isAuthenticated },
}: {
  auth: { isAuthenticated: boolean };
}) => {
  return isAuthenticated ? (
    <>
      <Header></Header>
      <Outlet />
      <ToggleGroupDemo />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

const PublicWrapper = ({
  auth: { isAuthenticated },
}: {
  auth: { isAuthenticated: boolean };
}) => {
  return isAuthenticated ? <Navigate to="/events" /> : <Outlet />;
};

export default AppRouter;
