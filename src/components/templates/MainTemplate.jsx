import React, { useEffect, useState } from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";

const MainTemplate = ({ children }) => {
  const navbarHeight = 70; // Altura fija del Navbar

  // Estado para controlar la animación del contenido
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Activa la animación del contenido
    const timeout = setTimeout(() => {
      setIsAnimated(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  // Estilo del fondo negro (div de fondo)
  const backgroundStyles = {
    position: "fixed", // Fijo para que permanezca durante el scroll
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black", // Fondo negro puro
    zIndex: 0, // Detrás de todo
  };

  // Estilo del contenido con la imagen de fondo
  const contentWrapperStyles = {
    position: "relative", // Permite manejar capas sobre el fondo negro
    zIndex: 1, // Sobre el fondo negro
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    opacity: isAnimated ? 1 : 0, // Transición de opacidad para suavidad
    transition: "opacity 1.5s ease-in-out", // Suavidad al aparecer
    backgroundImage: `url(${process.env.PUBLIC_URL}/static/img1.jpeg)`, // Imagen de fondo original
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed", // Fija la imagen durante el scroll
  };

  // Estilo del overlay para oscurecer la imagen
  const overlayStyles = {
    position: "fixed", // Fijo para que permanezca durante el scroll
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Oscurece la imagen con transparencia
    zIndex: 1, // Entre el fondo negro y el contenido
    pointerEvents: "none", // Permite que el contenido sea interactivo
  };

  // Estilo del contenido principal
  const mainStyles = {
    flex: 1, // Espacio restante entre Navbar y Footer
    display: "flex",
    flexDirection: "column",
    zIndex: 2, // Encima del overlay
    marginTop: `${navbarHeight}px`, // Espacio para el navbar fijo
  };

  // Estilos para navbar fijo
  const navbarStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: `${navbarHeight}px`,
    zIndex: 10, // Por encima de todo
  };

  // Estilos para footer al final de la página
  const footerStyles = {
    width: "100%",
    zIndex: 10, // Por encima de todo
  };

  return (
    <>
      {/* Fondo negro */}
      <div style={backgroundStyles} />

      {/* Overlay para oscurecer */}
      <div style={overlayStyles} />

      {/* Navbar fijo */}
      <div style={navbarStyles}>
        <Navbar />
      </div>

      {/* Contenido principal */}
      <div style={contentWrapperStyles}>
        {/* Contenido dinámico */}
        <main style={mainStyles}>{children}</main>

        {/* Footer al final de la página */}
        <div style={footerStyles}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainTemplate;
