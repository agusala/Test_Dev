import { useEffect, useState } from "react";
import Card from "./card";
import { getModels, Modelos } from "../api/models";

const CarList = () => {
  const [models, setModels] = useState<Modelos[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getModels()
      .then((data) => {
        console.log(data);
        setModels(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="models-list">
      {models.map((model) => (
        <Card
          key={model.id}
          id={model.id}
          title={model.name}
          description={`${model.year}| $${model.price}`}
          image={model.photo}
        />
      ))}
    </div>
  );
};
export default CarList;
