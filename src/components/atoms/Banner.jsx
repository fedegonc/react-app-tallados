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
    alignItems: "center",
    justifyContent: "center",
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

  const getTextStyle = () => {
    const width = window.innerWidth;

    if (width <= 480) {
      return {
        fontSize: "1.5rem", // Tamaño compacto para móviles
        lineHeight: "1.4",
        padding: "0 5px",
      };
    } else if (width <= 768) {
      return {
        fontSize: "2rem", // Más pequeño para pantallas tablet
        lineHeight: "1.4",
        padding: "0 10px",
      };
    } else if (width <= 1024) {
      return {
        fontSize: "2.5rem", // Reducir tamaño para pantallas medianas
        lineHeight: "1.4",
        padding: "0 15px",
      };
    } else {
      return {
        fontSize: "3rem", // Tamaño normal para pantallas grandes
        lineHeight: "1.4",
        padding: "0 20px",
      };
    }
  };

  const textStyle = getTextStyle();

  return (
    <div style={bannerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <div style={textStyle}>
          Conecta con la tradición y el arte atemporal de nuestros tallados en
          madera. Diseñados con precisión y personalización, cada pieza
          enriquece tus espacios y perdura como un legado.
        </div>
      </div>
    </div>
  );
};

export default Banner;
