import React, { useEffect, useState } from 'react';
import Content from '../molecules/Content';

const Principal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Activa la animación al montar el componente
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Retraso inicial para suavizar la transición
    return () => clearTimeout(timeout);
  }, []);

  const containerStyles = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: isVisible ? 'transparent' : 'black', // Fondo negro inicial
    opacity: isVisible ? 1 : 0, // Controla la opacidad para el desvanecimiento
    transition: 'opacity 1.5s ease-in-out, background-color 1.5s ease-in-out', // Suaviza opacidad y color de fondo
  };

  return (
    <div style={containerStyles}>
      <Content
        titleText="Tradición y Artesanía en madera"
        paragraphText="Diseños personalizados que enriquecen tus espacios con durabilidad y estilo, reflejando un legado único."
        buttonText="Explora Más"
        onButtonClick={() => alert('¡Gracias por explorar más!')}
      />
    </div>
  );
};

export default Principal;
