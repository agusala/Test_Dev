import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getModelDetail, ModelDetail } from "../api/models";
import "../styles/fichapage.css";

const FichaPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [model, setModel] = useState<ModelDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchModel = async () => {
      try {
        const data = await getModelDetail(Number(id));
        setModel(data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Error al cargar el modelo");
      } finally {
        setLoading(false);
      }
    };

    fetchModel();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!model) return <p>No se encontró el modelo</p>;

  return (
    <div className="ficha-container">
      {/* Sección principal con imagen y título */}
      <div className="main-info">
        <img src={model.photo} alt={model.name} className="model-photo" />
        <div className="model-details">
          <h1>{model.name}</h1>
          <p className="model-description">
            Texto de descripción genérico para el modelo {model.name}.
          </p>
        </div>
      </div>

      {/* Características del modelo */}
      <div className="features-container">
        {model.model_features.map((feature, index) => (
          <div key={index} className="feature-card">
            <img
              src={feature.photo}
              alt={feature.name}
              className="feature-img"
            />
            <h3>{feature.name}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Resaltados del modelo */}
      <div className="highlights-container">
        {model.model_highlights.map((highlight, index) => (
          <div key={index} className="highlight">
            <img
              src={highlight.image}
              alt={highlight.title}
              className="highlight-img"
            />
            <div className="highlight-text">
              <h2>{highlight.title}</h2>
              <p>{highlight.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FichaPage;
