import React, { useState } from 'react';

const Button = ({ label, onClick }) => {
  const [isHovered, setIsHovered] = useState(false); // Estado para manejar hover

  // Variables de estilo para colores y tamaños
  const colors = {
    defaultBackground: '#4A5D4E',
    hoverBackground: '#3A4A3A',
    textColor: '#FFFFFF',
    borderColor: '#3A4A3A',
  };

  const sizes = {
    padding: '10px 20px',
    borderRadius: '8px',
  };

  const shadows = {
    default: '0 2px 4px rgba(0, 0, 0, 0.1)',
    hover: '0 4px 6px rgba(0, 0, 0, 0.2)',
  };

  const buttonStyles = {
    padding: sizes.padding,
    backgroundColor: isHovered ? colors.hoverBackground : colors.defaultBackground,
    color: colors.textColor,
    border: `2px solid ${colors.borderColor}`,
    borderRadius: sizes.borderRadius,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Aumenta ligeramente
    boxShadow: isHovered ? shadows.hover : shadows.default, // Sombra dinámica
  };

  return (
    <button
      style={buttonStyles}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)} // Activa el hover
      onMouseLeave={() => setIsHovered(false)} // Desactiva el hover
    >
      {label}
    </button>
  );
};

export default Button;
