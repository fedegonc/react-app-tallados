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
    overflow: 'hidden',
    textAlign: 'left',
    fontFamily: 'Merriweather, serif',
    transition: 'height 0.5s ease, opacity 0.5s ease', // Animación suave para altura y opacidad
    height: isOpen ? '150px' : '0px', // Despliega/oculta ajustando la altura
    opacity: isOpen ? 1 : 0, // Oculta visualmente cuando está cerrado
    visibility: isOpen ? 'visible' : 'hidden', // Asegura que no interfiera con el diseño cerrado
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
