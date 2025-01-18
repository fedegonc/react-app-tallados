import React, { useEffect, useState } from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";

const MainTemplate = ({ children }) => {
  const navbarHeight = 70; // Altura fija del Navbar
  const footerHeight = 70; // Altura fija del Footer

  // Estado para controlar si la animación debe ejecutarse
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Activa la animación al montar el componente
    setIsAnimated(true);
  }, []);

  const templateStyles = {
    display: "flex",
    flexDirection: "column",
    height: "100vh", // Ocupa exactamente el alto de la ventana
    margin: 0,
    padding: 0,
    overflow: "hidden", // Previene desbordamiento
    opacity: isAnimated ? 1 : 0, // Transición de opacidad
    transition: "opacity 1.5s ease-in-out", // Transición suave al aparecer
    backgroundImage: `url(${process.env.PUBLIC_URL}/static/img1.jpeg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative", // Necesario para el overlay
  };

  const overlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay semitransparente
    zIndex: 1, // Asegura que esté encima del fondo
  };

  const mainStyles = {
    flex: 1, // Toma el espacio restante entre Navbar y Footer
    overflow: "hidden", // Previene el desbordamiento
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2, // Asegura que el contenido esté sobre el overlay
    position: "relative",
  };

  return (
    <div style={templateStyles}>
      {/* Overlay */}
      <div style={overlayStyles} />

      {/* Navbar */}
      <div style={{ height: `${navbarHeight}px`, zIndex: 3 }}>
        <Navbar />
      </div>

      {/* Main content */}
      <main style={mainStyles}>{children}</main>

      {/* Footer */}
      <div style={{ height: `${footerHeight}px`, zIndex: 3 }}>
        <Footer />
      </div>
    </div>
  );
};

export default MainTemplate;
