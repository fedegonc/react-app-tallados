import React, { useState } from "react";
import Letras from "../atoms/Typo"; // Importa las fuentes desde el átomo

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    fontSize: "2.5rem", // Tamaño del texto
    fontWeight: "900", // Extra-bold para impacto
    color: isHovered ? "#fff" : "#eee", // Negro por defecto, blanco en hover
    backgroundColor: isHovered ? "#5555" : "transparent", // Fondo negro solo en hover
    padding: "5px 10px", // Espaciado interno
    fontFamily: Letras.logoFont, // Fuente definida en el átomo Letras
    letterSpacing: "3px", // Espaciado entre letras
    transition: "all 0.3s ease", // Transición suave
    cursor: "pointer", // Cursor pointer en hover
    display: "inline-block", // Tamaño ajustado al contenido
    borderRadius: "2px", // Bordes ligeramente redondeados
  };
  
  return (
    <div
      style={styles}
      onMouseEnter={() => setIsHovered(true)} // Activa hover
      onMouseLeave={() => setIsHovered(false)} // Desactiva hover
    >
      La Cabaña del Tallado
    </div>
  );
};

export default Logo;
