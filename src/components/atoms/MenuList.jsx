import React from "react";

const MenuList = ({ items = [], onItemClick }) => {
  // Estilo general de la lista
  const listStyles = {
    listStyle: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  // Función para obtener estilos dinámicos de los ítems
  const getListItemStyles = () => {
    const width = window.innerWidth;

    if (width <= 480) {
      // Pantallas pequeñas (móviles)
      return {
        cursor: "pointer",
        color: "#FFFFFF",
        padding: "5px 10px",
        fontSize: "0.9rem", // Letra más pequeña
        borderRadius: "5px",
        transition: "background-color 0.3s ease",
        backgroundColor: "transparent",
      };
    } else if (width <= 768) {
      // Pantallas medianas (tablets)
      return {
        cursor: "pointer",
        color: "#FFFFFF",
        padding: "5px 10px",
        fontSize: "1rem", // Letra ligeramente más grande
        borderRadius: "5px",
        transition: "background-color 0.3s ease",
        backgroundColor: "transparent",
      };
    } else {
      // Pantallas grandes (desktop)
      return {
        cursor: "pointer",
        color: "#FFFFFF",
        padding: "5px 10px",
        fontSize: "1.2rem", // Letra más grande
        borderRadius: "5px",
        transition: "background-color 0.3s ease",
        backgroundColor: "transparent",
      };
    }
  };

  return (
    <ul style={listStyles}>
      {items.map((item, index) => (
        <li
          key={index}
          style={getListItemStyles()} // Estilos dinámicos según el tamaño de pantalla
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#444")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
          onClick={() => onItemClick(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
