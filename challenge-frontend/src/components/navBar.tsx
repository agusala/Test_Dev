import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navBar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-logo">
            <span className="logo-text">EGO</span>
          </div>
          <span
            className="navbar-link"
            onClick={() => navigate("/homeModelos")}
            style={{ cursor: "pointer" }}
          >
            Models
          </span>
          <span className="navbar-link">Fecha o modulo</span>
        </div>

        <div className="navbar-right" ref={buttonRef}>
          <span className="navbar-menu-text" onClick={toggleMenu}>
            Menu
          </span>
          <span
            className={`hamburger-icon ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            &#9776;
          </span>
        </div>
      </div>

      {menuOpen && (
        <div className="right-side-menu" ref={menuRef}>
          <div className="menu-header">
            <span className="menu-title">Menú</span>
            <span className="close-button" onClick={toggleMenu}>
              ×
            </span>
          </div>

          <div className="menu-sections">
            <div className="menu-section">
              <span className="dropdown-link">Modelos</span>
              <span className="dropdown-link">Servicios y Accesorios</span>
              <span className="dropdown-link">Financiacion</span>
              <span className="dropdown-link">Reviews y Comunidad</span>
            </div>

            <div className="menu-section">
              <span className="dropdown-link">Toyota Mobility Service</span>
              <span className="dropdown-link">Toyota Gazzo Racing</span>
              <span className="dropdown-link">Toyota Hibrido</span>
            </div>

            <div className="menu-section">
              <span className="dropdown-link">Concesionarios</span>
              <span className="dropdown-link">Test Drive</span>
              <span className="dropdown-link">Contactos</span>
            </div>

            <div className="last-section">
              <span className="dropdown-link">Actividades</span>
              <span className="dropdown-link">Servicio al Cliente</span>
              <span className="dropdown-link">Ventas Especiales</span>
              <span className="dropdown-link">Innovacion</span>
              <span className="dropdown-link">Prensa</span>
              <span className="dropdown-link">Acerca de...</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
