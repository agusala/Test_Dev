import { Link } from "react-router-dom";
import "../styles/navegacion.css";

interface MenuItem {
  label: string;
  path?: string;
}

interface NavigationMenuProps {
  onClose: () => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ onClose }) => {
  const menuItems: MenuItem[] = [
    { label: "Modelos", path: "/homeModelos" },
    { label: "Servicios y Accesorios" },
    { label: "Financiación" },
    { label: "Reviews y Comunidad" },
    { label: "Toyota Mobility Service" },
    { label: "Toyota Gazoo Racing" },
    { label: "Toyota Híbridos" },
    { label: "Concesionarios" },
    { label: "Test Drive" },
    { label: "Contacto" },
    { label: "Actividades" },
    { label: "Servicios al Cliente" },
    { label: "Ventas Especiales" },
    { label: "Innovación" },
    { label: "Prensa" },
    { label: "Acerca de..." },
  ];

  return (
    <div className="navigation-overlay">
      <div className="navigation-menu">
        <div className="navigation-header">
          <button className="close-button" onClick={onClose}>
            Cerrar <span>✕</span>
          </button>
        </div>
        <div className="menu-items">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`menu-item ${
                index === 3 || index === 6 || index === 9
                  ? "with-separator"
                  : ""
              }`}
            >
              {item.path ? (
                <Link to={item.path} className="menu-link">
                  {item.label}
                </Link>
              ) : (
                <span className="menu-link">{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
