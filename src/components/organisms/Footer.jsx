import React from 'react';

const Footer = () => {
  const footerStyles = {
    padding: "10px",
    textAlign: "center",
    fontSize: "0.9rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    backdropFilter: "blur(5px)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "rgba(200, 200, 200, 0.9)",
    transition: "all 0.3s ease",
    height: "70px",
  };

  return (
    <footer style={footerStyles}>
      <p>© 2025 Tradición y Artesanía. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
