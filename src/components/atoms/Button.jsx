import React, { useState, useEffect } from 'react';

// Hook personalizado para estilos dinámicos
const useButtonStyles = (isHovered) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    padding: isMobile ? '10px 20px' : '12px 24px', // Ajuste de padding para móvil
    backgroundColor: isHovered ? '#FFFFFF' : '#4A5D4E', // Fondo dinámico
    color: isHovered ? '#4A5D4E' : '#FFFFFF', // Texto dinámico
    fontSize: isMobile ? '1rem' : '1.2rem', // Tamaño de fuente dinámico
    fontWeight: 'bold',
    border: 'none', // Sin borde
    borderRadius: '6px', // Bordes ligeramente redondeados
    cursor: 'pointer',
    transition: 'all 0.3s ease', // Transición suave
    transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Efecto de hover
    boxShadow: isHovered
      ? '0 4px 6px rgba(0, 0, 0, 0.2)' // Sombra pronunciada en hover
      : '0 2px 4px rgba(0, 0, 0, 0.1)', // Sombra estándar
    zIndex: 20, // Asegura que el botón esté por encima de otros elementos
  };
};

const Button = ({ label, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const styles = useButtonStyles(isHovered);

  return (
    <button
      style={styles}
      onMouseEnter={() => setIsHovered(true)} // Activa el hover
      onMouseLeave={() => setIsHovered(false)} // Desactiva el hover
      onClick={onClick} // Llama a la función pasada como prop
    >
      {label}
    </button>
  );
};

export default Button;
