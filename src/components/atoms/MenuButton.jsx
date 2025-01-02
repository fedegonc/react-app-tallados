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

;

  return (
    <button style={menuButtonStyles} onClick={onClick}>
      <span style={textStyles}>Menu</span>
    </button>
  );
};

export default MenuButton;
