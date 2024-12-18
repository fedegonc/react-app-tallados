import React, { useState } from 'react';

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false); // Estado hover

  const styles = {
    fontSize: '2rem', // Aumentamos el tamaño
    fontWeight: '900', // Extra-bold para más impacto
    color: isHovered ? '#ffffff' : '#000000', // Negro por defecto, blanco en hover
    backgroundColor: isHovered ? '#000000' : 'transparent', // Fondo negro solo en hover
    padding: '5px 10px', // Espaciado interno para efecto hover
    fontFamily: "'Arial Black', Gadget, sans-serif", // Fuente más moderna y gruesa
   
    letterSpacing: '3px', // Espaciado entre letras
    transition: 'all 0.3s ease', // Transición suave
    cursor: 'pointer', // Cursor tipo pointer en hover
    display: 'inline-block', // Tamaño ajustado al contenido
    
       
        padding: '5px 15px', // Más espacio horizontal
        borderRadius: '2px', // Bordes ligeramente redondeados
       
      
  };

  return (
    <div
      style={styles}
      onMouseEnter={() => setIsHovered(true)} // Activa hover
      onMouseLeave={() => setIsHovered(false)} // Desactiva hover
    >
      Tallado Colonial
    </div>
  );
};

export default Logo;
