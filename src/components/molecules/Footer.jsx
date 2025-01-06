import React from "react";

const Footer = () => {
  const footerStyles = {
    background: "linear-gradient(90deg, #2C2C2C, #0E0E0E)", // Fondo degradado
    color: "#9f9f9f", // Texto blanco para contraste
    padding: "20px", // Espaciado generoso
    textAlign: "center", // Centrar contenido
    fontSize: "0.9rem", // Tamaño de fuente más pequeño y moderno
    borderTop: "1px solid #4D4D4D", // Línea sutil en la parte superior
  };

  const socialIconsStyles = {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  };

  const iconStyles = {
    color: "#ffffff",
    fontSize: "1.2rem",
    textDecoration: "none",
    transition: "color 0.3s ease",
  };

  const iconHoverStyles = {
    color: "#76C893", // Color de hover (puedes ajustarlo)
  };

  return (
    <footer style={footerStyles}>
      <p>Desarrollado por Federico Goncalvez</p>
      {/* Íconos de redes sociales */}
      <div style={socialIconsStyles}>
        <a
          href="https://twitter.com"
          style={iconStyles}
          onMouseEnter={(e) => (e.target.style.color = iconHoverStyles.color)}
          onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://github.com"
          style={iconStyles}
          onMouseEnter={(e) => (e.target.style.color = iconHoverStyles.color)}
          onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com"
          style={iconStyles}
          onMouseEnter={(e) => (e.target.style.color = iconHoverStyles.color)}
          onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
