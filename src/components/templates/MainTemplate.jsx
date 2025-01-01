import React from 'react';
import Header from '../organisms/Header';

const MainTemplate = ({ children }) => {
  // Define la altura fija del Navbar
  const navbarHeight = '70px';

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#4A5D4E', // Fondo principal
    color: '#FFFFFF',
  };

  const navbarBorderStyles = {
    height: '4px', // Altura de la línea
    backgroundColor: '#2C2C2C', // Color oscuro para la línea
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Sombra sutil
  };

  const mainStyles = {
    flex: 1,
    padding: '0px', // Más espacio para darle aire
    marginTop: navbarHeight, // Ajuste para que no quede debajo del Navbar
    border: '2px solid #2C2C2C', // Borde alrededor del contenido dinámico
    borderRadius: '10px', // Bordes redondeados
    backgroundColor: '#E8D8C3', // Fondo beige claro para contraste
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra alrededor
    textAlign: 'left',
  };

  const footerStyles = {
    backgroundColor: '#2C2C2C',
    color: '#E8D8C3',
    padding: '20px 0', // Espaciado generoso
    textAlign: 'center',
    borderTop: '4px solid #4A5D4E', // Línea en la parte superior del footer
  };

  return (
    <div style={containerStyles}>
      {/* Header */}
      <Header />
      <div style={navbarBorderStyles}></div> {/* Línea oscura debajo del Navbar */}

      {/* Contenido dinámico */}
      <main style={mainStyles}>{children}</main>

      {/* Footer */}
      <footer style={footerStyles}>
        <p>&copy; 2024 Tallado Colonial. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainTemplate;
