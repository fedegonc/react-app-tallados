import React from 'react';

const Banner = () => {
  const bannerStyle = {
    width: '100%', // Ancho completo
    height: '400px', // Altura del banner
    backgroundImage: `url(${process.env.PUBLIC_URL}/static/images/banner.jpg)`, // Ruta de la imagen
    backgroundSize: 'cover', // La imagen cubre todo el contenedor
    backgroundPosition: 'center', // Centra la imagen
    backgroundRepeat: 'no-repeat', // Evita repeticiones
    display: 'flex', // Usamos flexbox para posicionar contenido si es necesario
    justifyContent: 'center', // Centra contenido horizontalmente
    alignItems: 'center', // Centra contenido verticalmente
    color: '#ffffff', // Texto blanco por defecto
    fontSize: '2rem', // Tamaño del texto
    fontWeight: 'bold', // Peso de fuente
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Sombra para mejor legibilidad
  };

  return (
    <div style={bannerStyle}>
      <p>Welcome to the Banner!</p>
    </div>
  );
};

export default Banner;
