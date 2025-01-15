import React, { useState, useEffect } from "react";
import Navbar from "../organisms/Navbar";
import Banner from "../atoms/Banner";

const MainTemplate = () => {
  const navbarHeight = 70; // Altura del Navbar en píxeles
  const [isLoaded, setIsLoaded] = useState(false); // Estado para la animación de carga

  const templateStyles = {
    display: "flex",
    flexDirection: "column",
    height: "100vh", // Altura fija para evitar scroll adicional
    backgroundColor: "#000", // Fondo negro uniforme
    margin: 0,
    padding: 0,
    overflow: "hidden", // Previene scroll innecesario
  };

  const mainStyles = {
    flex: 1,
    marginTop: `${navbarHeight}px`, // Espaciado para evitar solapamiento
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: isLoaded ? 1 : 0, // Efecto de opacidad
    transform: isLoaded ? "translateY(0)" : "translateY(20px)", // Efecto de entrada
    transition: "opacity 0.6s ease, transform 0.6s ease", // Animación suave
  };

  useEffect(() => {
    // Simula la carga inicial del contenido
    const timer = setTimeout(() => setIsLoaded(true), 100); // Retraso de 100ms

    return () => clearTimeout(timer); // Limpieza del temporizador
  }, []);

  return (
    <div style={templateStyles}>
      {/* Navbar fijo */}
      <Navbar />

      {/* Contenido dinámico (solo el Banner) */}
      <main style={mainStyles}>
        <Banner />
      </main>
    </div>
  );
};

export default MainTemplate;
