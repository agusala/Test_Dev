import React from "react";
import "../styles/card.css";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-subtitle">{description}</p>
      <img className="card-image" src={image} alt={title} />
    </div>
  );
};

export default Card;
