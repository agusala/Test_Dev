import CarList from "../components/carList";
import Filter from "../components/filter";
import Navbar from "../components/navBar";

const ModelsHome = () => {
  return (
    <div>
      <h1>Descubri Todos los Modelos</h1>
      <Navbar />
      <Filter />
      <CarList />
    </div>
  );
};
export default ModelsHome;
