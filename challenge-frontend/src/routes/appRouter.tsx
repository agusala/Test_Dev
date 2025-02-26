import FichaPage from "../pages/fichaPage";
import HomeModelos from "../pages/homeModelos";
import { Routes, Route } from "react-router-dom";
import NavigationMenu from "../pages/navegacion";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <NavigationMenu
              onClose={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        />

        <Route path="/homeModelos" element={<HomeModelos />} />
        <Route path="/ficha/:id" element={<FichaPage />} />
      </Routes>
    </>
  );
};
export default AppRoutes;
