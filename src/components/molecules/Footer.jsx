import React from "react";

const Footer = () => {
  const footerStyles = {
    background: "linear-gradient(90deg, #2C2C2C, #0E0E0E)", // Fondo degradado
    color: "#000", // Texto blanco para contraste
    padding: "20px", // Espaciado generoso
    textAlign: "center", // Centrar contenido
    fontSize: "0.9rem", // Tamaño de fuente más pequeño y moderno
    borderTop: "1px solid #4D4D4D", // Línea sutil en la parte superior
  };


  return (
    <footer style={footerStyles}>
      <p>Desarrollado por Federico Goncalvez</p>
    
    </footer>
  );
};

export default Footer;
