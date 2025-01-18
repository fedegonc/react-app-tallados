import React, { useEffect, useState } from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";

const MainTemplate = ({ children }) => {
  const navbarHeight = 70; // Altura fija del Navbar
  const footerHeight = 70; // Altura fija del Footer

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
    position: "absolute", // Ocupa todo el espacio detrás del contenido
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
    height: "100vh",
    overflow: "hidden",
    opacity: isAnimated ? 1 : 0, // Transición de opacidad para suavidad
    transition: "opacity 1.5s ease-in-out", // Suavidad al aparecer
    backgroundImage: `url(${process.env.PUBLIC_URL}/static/img1.jpeg)`, // Imagen de fondo
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  // Estilo del overlay para oscurecer la imagen
  const overlayStyles = {
    position: "absolute",
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
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2, // Encima del overlay
  };

  return (
    <>
      {/* Fondo negro */}
      <div style={backgroundStyles} />

      {/* Contenido principal */}
      <div style={contentWrapperStyles}>
        {/* Overlay para oscurecer */}
        <div style={overlayStyles} />

        {/* Navbar */}
        <div style={{ height: `${navbarHeight}px`, zIndex: 2 }}>
          <Navbar />
        </div>

        {/* Contenido dinámico */}
        <main style={mainStyles}>{children}</main>

        {/* Footer */}
        <div style={{ height: `${footerHeight}px`, zIndex: 2 }}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainTemplate;
