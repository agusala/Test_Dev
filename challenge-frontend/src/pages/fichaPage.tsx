import { useParams } from "react-router-dom";
import FichaTec from "../components/fichaTec";
import Filter from "../components/filter";
import Navbar from "../components/navBar";

const FichaPage = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  if (!id) return <p>Modelo no encontrado</p>;
  return (
    <div>
      <h1>Descubri Todos los Modelos</h1>
      <Navbar />
      <Filter />
      <FichaTec />
    </div>
  );
};
export default FichaPage;
