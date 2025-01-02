import React from "react";

const MainTemplate = ({ leftContent, rightContent }) => {
  const templateStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "40px",
    padding: "40px 20px",
    flexWrap: "wrap", // Permite que las columnas se ajusten automáticamente
    minHeight: "100vh", // Asegura que ocupe toda la pantalla
    backgroundColor: "#FEFEFE", // Fondo gris claro casi blanco
  };

  const leftColumnStyles = {
    flex: "1 1 60%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const rightColumnStyles = {
    flex: "1 1 35%",
    maxWidth: "400px",
    backgroundColor: "#FFFFFF", // Fondo blanco del formulario
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Sombra suave
    margin: "0 auto", // Centra en pantallas pequeñas
  };

  return (
    <div style={templateStyles}>
      <div style={leftColumnStyles}>{leftContent}</div>
      <div style={rightColumnStyles}>{rightContent}</div>
    </div>
  );
};

export default MainTemplate;
