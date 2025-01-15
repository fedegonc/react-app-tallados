import React from "react";

const Banner = () => {
  const bannerStyle = {
    width: "100%",
    height: "100vh", // Ocupa toda la pantalla
    backgroundImage: `url(${process.env.PUBLIC_URL}/static/img1.jpeg)`,
    backgroundSize: "cover", // Asegura que la imagen cubra todo el espacio
    backgroundPosition: "center", // Centra la imagen
    backgroundRepeat: "no-repeat", // Evita que la imagen se repita
    position: "relative",
    display: "flex",
    flexDirection: "column", // Organiza el texto en columnas
    justifyContent: "flex-start", // Alinea el contenido hacia la parte superior
    alignItems: "center", // Centra horizontalmente
    paddingTop: "15vh", // Ajusta el espacio superior del texto
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Superposición para mejorar contraste
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    color: "#ffffff",
    padding: "0 20px", // Espaciado para evitar que el texto toque los bordes
  };

  const titleStyle = {
    fontSize: "3rem", // Tamaño grande para el título
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
    marginBottom: "10px", // Separación del texto secundario
  };

  const descriptionStyle = {
    fontSize: "1.5rem", // Tamaño más pequeño para el texto secundario
    lineHeight: "1.6",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
  };

  return (
    <div style={bannerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <div style={titleStyle}>
          Tradición y Artesanía en madera
        </div>
        <div style={descriptionStyle}>
          Diseños personalizados que enriquecen tus espacios con durabilidad y estilo, reflejando un legado único.
        </div>
      </div>
    </div>
  );
};

export default Banner;
