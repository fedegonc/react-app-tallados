import React from 'react';
import Header from '../organisms/Header';

const MainTemplate = ({ children }) => {
  // Define la altura fija del Navbar
  const navbarHeight = '70px'; // Cambia según la altura real de tu Navbar

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#4A5D4E', // Fondo principal
    color: '#FFFFFF', // Color de texto principal
  };

  const mainStyles = {
    flex: 1,
    padding: '20px',
    marginTop: navbarHeight, // Ajusta el espacio para evitar que quede debajo del Navbar
    textAlign: 'left',
  };

  const footerStyles = {
    backgroundColor: '#2C2C2C', // Fondo del footer
    color: '#E8D8C3', // Color del texto del footer
    padding: '10px 0',
    textAlign: 'center',
  };

  return (
    <div style={containerStyles}>
       
      <Header />
{/*
      {/* Contenido dinámico 
      <main style={mainStyles}>{children}</main>

      Footer 
      <footer style={footerStyles}>
        <p>&copy; 2024 Tallado Colonial. All rights reserved.</p>
      </footer>*/}
    </div>
  );
};

export default MainTemplate;
