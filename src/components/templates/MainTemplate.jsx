import React from 'react';
import Header from '../organisms/Header';

const MainTemplate = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#4A5D4E', // Fondo principal (verde oscuro calmado)
        color: '#FFFFFF', // Color de texto principal para mejor contraste
      }}
    >
      {/* Header */}
      <Header />

      {/* Contenido Dinámico */}
      <main style={{ flex: 1, padding: '20px', textAlign: 'left' }}>
        {children}
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#2C2C2C', // Negro suave
          color: '#E8D8C3', // Beige para el texto del footer
          padding: '10px 0',
          textAlign: 'center',
        }}
      >
        <p>&copy; 2024 Tallado Colonial. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainTemplate;
