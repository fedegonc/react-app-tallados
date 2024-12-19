import React from 'react';

const Menu = ({ isOpen, options, onOptionClick }) => {
  const menuContainerStyles = {
    position: 'absolute',
    top: '60px',
    right: '15px',
    backgroundColor: '#2C2C2C',
    color: '#FFFFFF',
    width: '200px',
    borderRadius: '5px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    padding: '10px',
    overflow: 'hidden',
    textAlign: 'left',
    fontFamily: 'Merriweather, serif',
    transform: isOpen ? 'scaleY(1)' : 'scaleY(0)', // Escalado vertical
    transformOrigin: 'top', // La animación se origina desde la parte superior
    transition: 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.5s ease', // Transición más lenta y suave
    opacity: isOpen ? 1 : 0, // Asegura que desaparezca visualmente cuando está cerrado
  };

  const optionStyles = {
    padding: '10px',
    cursor: 'pointer',
    borderBottom: '1px solid #444',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={menuContainerStyles}>
      {options.map((option, index) => (
        <div
          key={index}
          style={optionStyles}
          onClick={() => onOptionClick(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default Menu;
