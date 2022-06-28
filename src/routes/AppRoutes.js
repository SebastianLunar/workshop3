import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateProduct } from "../components/CreateProduct";
import { Home } from "../container/Home";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
};
