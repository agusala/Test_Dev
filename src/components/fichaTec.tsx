import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getModelDetail, ModelDetail } from "../api/models";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/fichaTec.css";
import { Carousel } from "react-responsive-carousel";

const FichaTec = () => {
  const { id } = useParams<{ id: string }>();
  const [model, setModel] = useState<ModelDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("ID de modelo no encontrado.");
      setLoading(false);
      return;
    }

    const fetchModel = async () => {
      try {
        console.log("Fetching model details for ID:", id);
        const data = await getModelDetail(Number(id));
        console.log("Model details:", data);
        setModel(data);
      } catch (err) {
        console.error("Error Model details:", err);
        setError("Error al obtener los detalles del modelo.");
      } finally {
        setLoading(false);
      }
    };

    fetchModel();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!model) return <p>No se encontró el modelo.</p>;

  return (
    <div className="ficha-container">
      <div className="main-info">
        <img className="model-photo" src={model.photo} alt={model.name} />
        <div className="model-details">
          <h1>{model.name}</h1>
          <p className="model-description">Preparada para cualquier desafío</p>
        </div>
      </div>
      <div>
        {model.model_features.length ? (
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            {" "}
            {model.model_features.map((feature, index) => (
              <div key={index} className="carousel-slide">
                <img
                  src={feature.photo}
                  alt={feature.name}
                  className="feature-img"
                />
                <h3>{feature.name}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </Carousel>
        ) : (
          ""
        )}
      </div>

      <div className="highlights-container">
        {model.model_highlights.length
          ? model.model_highlights.map((highlight, index) => (
              <div key={index} className="highlight">
                <img
                  className="highlight-img"
                  src={highlight.image}
                  alt={highlight.title}
                />
                <div className="highlight-text">
                  <h2>{highlight.title}</h2>
                  <p>{highlight.content}</p>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default FichaTec;
