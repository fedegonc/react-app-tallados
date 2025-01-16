import React from 'react';
import Overlay from '../molecules/Overlay';
import Content from '../molecules/Content';

const Banner = () => {
  const buttonStyles = {
    padding: '12px 24px',
    defaultBackground: '#1E90FF', // Azul claro por defecto
    hoverBackground: '#4682B4', // Azul más oscuro en hover
    textColor: '#FFFFFF', // Texto blanco
    borderColor: '#5F9EA0', // Color de borde
    borderRadius: '10px', // Bordes redondeados
    defaultShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Sombra por defecto
    hoverShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Sombra al hacer hover
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${process.env.PUBLIC_URL}/static/img1.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -1,
      }}
    >
      <Overlay />
      <Content
        titleText="Tradición y Artesanía en madera"
        paragraphText="Diseños personalizados que enriquecen tus espacios con durabilidad y estilo, reflejando un legado único."
        buttonText="Explora Más"
        onButtonClick={() => alert('¡Gracias por explorar más!')}
        buttonStyles={buttonStyles} // Pasamos los estilos personalizados del botón
      />
    </div>
  );
};

export default Banner;
