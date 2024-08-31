import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>;
      </div>
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
    </>
  );
}
