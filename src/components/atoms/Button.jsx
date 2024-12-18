import React, { useState } from 'react';

const Button = ({ label, onClick }) => {
  const [isHovered, setIsHovered] = useState(false); // Estado para manejar hover

  const buttonStyles = {
    padding: '10px 20px',
    backgroundColor: isHovered ? '#3A4A3A' : '#4A5D4E', // Verde más oscuro al hacer hover
    color: '#FFFFFF', // Texto blanco siempre
    border: '2px solid #3A4A3A', // Borde sutil
    borderRadius: '8px', // Bordes suavemente redondeados
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Aumenta ligeramente
    boxShadow: isHovered
      ? '0 4px 6px rgba(0, 0, 0, 0.2)'
      : '0 2px 4px rgba(0, 0, 0, 0.1)', // Sombra al hacer hover
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
