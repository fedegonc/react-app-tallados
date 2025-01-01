import React, { useState } from 'react';

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false); // Estado hover

  const styles = {
    fontSize: '2rem', // Tamaño del texto
    fontWeight: '900', // Extra-bold para impacto
    color: isHovered ? '#000000' : '#ffffff', // Negro por defecto, blanco en hover
    backgroundColor: isHovered ? '#ffffff' : 'transparent', // Fondo negro solo en hover
    padding: '5px 10px', // Espaciado interno
    fontFamily: "'Merriweather', serif", // Fuente Merriweather
    letterSpacing: '3px', // Espaciado entre letras
    transition: 'all 0.3s ease', // Transición suave
    cursor: 'pointer', // Cursor pointer en hover
    display: 'inline-block', // Tamaño ajustado al contenido
    borderRadius: '2px', // Bordes ligeramente redondeados
  };

  return (
    <div
      style={styles}
      onMouseEnter={() => setIsHovered(true)} // Activa hover
      onMouseLeave={() => setIsHovered(false)} // Desactiva hover
    >
      Provider Austral
    </div>
  );
};

export default Logo;
