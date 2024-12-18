import React, { useState } from 'react';

const Button = ({ label, onClick }) => {
  const [isHovered, setIsHovered] = useState(false); // Estado para manejar hover

  const buttonStyles = {
    padding: '10px 20px',
    backgroundColor: isHovered ? '#FFFFFF' : '#000000', // Cambio de color al hacer hover
    color:  isHovered ? '#000000' : '#FFFFFF',
    border: '2px solidrgb(0, 0, 0)',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
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
