import { useState } from "react";
import "../styles/filter.css";

const categories = [
  "Todos",
  "Autos",
  "Pickups y Comerciales",
  "SUVs y Crossovers",
];
const ordenarPor = [
  "Nada",
  "Precio más bajo",
  "Precio más alto",
  "Mas Nuevo",
  "Mas Viejo",
];

const Filter: React.FC = () => {
  const [selected, setSelected] = useState<string>("Todos");
  const [ordenar, setOrdenar] = useState<string>("Nada");
  const [showMenu, setShowMenu] = useState<boolean>(false);

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
      <span className="order-label" onClick={() => setShowMenu(!showMenu)}>
        Ordenar por ▼
      </span>
      {showMenu && (
        <div className="order-dropdown">
          {ordenarPor.map((orden) => (
            <button
              key={orden}
              className={`order-item ${ordenar === orden ? "active" : ""}`}
              onClick={() => setOrdenar(orden)}
            >
              {orden}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
