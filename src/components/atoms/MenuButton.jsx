import React from 'react';

const MenuButton = ({ onClick }) => {
  const menuButtonStyles = {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#FFFFFF',
    fontSize: '1.5rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center', // Centra verticalmente
    gap: '5px',
    fontFamily: 'inherit', 
  };

  const textStyles = {
    display: 'flex',
    alignItems: 'center',
    lineHeight: '1', // Asegura altura de línea uniforme
  };

  const dotStyles = {
    fontSize: '1.5rem', // Asegúrate de que el tamaño de fuente sea el mismo
    display: 'flex',
    alignItems: 'center',
    lineHeight: '1',
  };

  return (
    <button style={menuButtonStyles} onClick={onClick}>
      <span style={textStyles}>Menu</span>
      <span style={dotStyles}>⋮</span> {/* Tres puntos verticales */}
    </button>
  );
};

export default MenuButton;
