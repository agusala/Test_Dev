import { useState } from "react";
import "../styles/navBar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <span className="logo-text">EGO</span>
        </div>

        <span className="navbar-link">Models</span>

        <span className="navbar-link">Fecha o modulo</span>
      </div>

      <div className="navbar-right">
        <span className="navbar-menu-text" onClick={toggleMenu}>
          Menu
        </span>
        <span className="hamburger-icon" onClick={toggleMenu}>
          &#9776;
        </span>
      </div>
      {menuOpen && (
        <div className="dropdown-menu">
          <span className="dropdown-link">Modelos</span>
          <span className="dropdown-link">Servicios y Accesorios</span>
          <span className="dropdown-link">Financiacion</span>
          <span className="dropdown-link">Reviews y Comunidad</span>
          <br></br>
          <span className="dropdown-link">Toyota Mobility Service</span>
          <span className="dropdown-link">Toyota Gazzo Racing</span>
          <span className="dropdown-link">Toyota Hibrido</span>
          <br></br>
          <span className="dropdown-link">Concesionarios</span>
          <span className="dropdown-link">Test Drive</span>
          <span className="dropdown-link">Contactos</span>
          <br></br>
          <span className="dropdown-link">Actividades</span>
          <span className="dropdown-link">Servicio al Cliente</span>
          <span className="dropdown-link">Ventas Especiales</span>
          <span className="dropdown-link">Innovacion</span>
          <span className="dropdown-link">Prensa</span>
          <span className="dropdown-link">Acerca de...</span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
