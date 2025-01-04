import React from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../molecules/Footer";

const MainTemplate = ({ children }) => {
  const templateStyles = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#000",
    margin: 0, // Añadir para asegurarse de que no hay margen
    padding: 0,
  };

  const mainStyles = {
    flex: 1, // Permite que el contenido dinámico ocupe el espacio disponible
    padding: "0", // Espaciado interno del contenido dinámico
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
