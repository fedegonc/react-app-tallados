import React, { useEffect, useState } from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";

const MainTemplate = ({ children }) => {
  const navbarHeight = 70; // Altura fija del Navbar
  const footerHeight = 70; // Altura fija del Footer

  // Estado para controlar si la animación ha terminado
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Desactivar la animación después de que se complete
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 1200); // Duración de la animación: 1.2s
    return () => clearTimeout(timer);
  }, []);

  const templateStyles = {
    display: "flex",
    flexDirection: "column",
    height: "100vh", // Ocupa exactamente el alto de la ventana
    margin: 0,
    padding: 0,
    overflow: "hidden", // Previene desbordamiento
    transform: isAnimated ? "translateY(0)" : "translateY(-100%)", // Movimiento inicial
    opacity: isAnimated ? 1 : 0, // Transición de visibilidad
    transition: "transform 1.2s ease-out, opacity 1.2s ease-out", // Efecto de despliegue suave
  };

  const mainStyles = {
    flex: 1, // Toma el espacio restante entre Navbar y Footer
    overflow: "hidden", // Previene el desbordamiento
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={templateStyles}>
      <div style={{ height: `${navbarHeight}px` }}>
        <Navbar />
      </div>
      <main style={mainStyles}>{children}</main>
      <div style={{ height: `${footerHeight}px` }}>
        <Footer />
      </div>
    </div>
  );
};

export default MainTemplate;
