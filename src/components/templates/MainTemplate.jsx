import React from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../molecules/Footer";

const MainTemplate = ({ children }) => {
  const templateStyles = {
    display: "flex",
    flexDirection: "column", // Cambiado a columna para jerarquía Navbar → Main → Footer
    minHeight: "100vh", // Asegura que ocupe toda la pantalla
    backgroundColor: "#FEFEFE", // Fondo gris claro casi blanco
  };

  const mainStyles = {
    flex: 1, // Permite que el contenido dinámico ocupe el espacio disponible
    padding: "20px", // Espaciado interno del contenido dinámico
  };

  return (
    <div style={templateStyles}>
      {/* Navbar siempre visible */}
      <Navbar />

      {/* Contenido dinámico */}
      <main style={mainStyles}>{children}</main>

      {/* Footer siempre visible */}
      <Footer />
    </div>
  );
};

export default MainTemplate;
