import { useNavigate } from "react-router-dom";
import "../styles/card.css";

interface CardProps {
  id: number;
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ id, image, title, description }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => {
        console.log(`navegate: /ficha/${id}`);
        navigate(`/ficha/${id}`);
      }}
      style={{ cursor: "pointer" }}
    >
      <h2 className="card-title">{title}</h2>
      <p className="card-subtitle">{description}</p>
      <img className="card-image" src={image} alt={title} />
      <button
        onClick={() => navigate(`/ficha/${id}`)}
        className="button-datail"
      >
        Ver Detalle
      </button>
    </div>
  );
};

export default Card;
