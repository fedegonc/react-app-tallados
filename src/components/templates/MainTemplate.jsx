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
