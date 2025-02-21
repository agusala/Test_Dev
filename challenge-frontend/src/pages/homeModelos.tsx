import CarList from "../components/carList";
import Filter from "../components/filter";

const Home = () => {
  return (
    <div>
      <h1>Descubri Todos los Modelos</h1>
      <Filter />
      <CarList />
    </div>
  );
};
export default Home;
