import { useState } from "react";
import "../styles/filter.css";

const categories = [
  "Todos",
  "Autos",
  "Pickups y Comerciales",
  "SUVs y Crossovers",
];

const Filter: React.FC = () => {
  const [selected, setSelected] = useState<string>("Todos");

  return (
    <div className="filter-container">
      <span className="filter-label">Filtrar por</span>
      <div className="filter-options">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${selected === category ? "active" : ""}`}
            onClick={() => setSelected(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <span className="order-label">Ordenar por ▼</span>
    </div>
  );
};

export default Filter;
