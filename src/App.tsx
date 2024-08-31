import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/login" element={<Header></Header>} />
          <Route path="/register" element={<div></div>} />
          <Route path="/events" element={<div></div>} />
          <Route path="/my-events" element={<div></div>} />
          <Route path="/shop" element={<div></div>} />
          <Route path="/coupons" element={<div></div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
