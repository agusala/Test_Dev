import FichaPage from "../pages/fichaPage";
import HomeModelos from "../pages/homeModelos";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeModelos />} />
        <Route path="/ficha" element={<FichaPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
