import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToggleGroupDemo } from "./components/navigationBar";

export default function App() {
  return (
    <>
      <div className="relative min-h-screen md:block">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<div></div>} />
            <Route path="/login" element={<div></div>} />
            <Route path="/register" element={<div></div>} />
            <Route path="/events" element={<div></div>} />
            <Route path="/my-events" element={<div></div>} />
            <Route path="/shop" element={<div></div>} />
            <Route path="/coupons" element={<div></div>} />
          </Routes>
        </BrowserRouter>
        <ToggleGroupDemo />
      </div>
    </>
  );
}
