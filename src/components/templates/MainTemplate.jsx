import React from 'react';
import Header from '../organisms/Header';

const MainTemplate = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header />

      {/* Contenido Dinámico */}
      <main style={{ flex: 1, padding: '20px', textAlign: 'left' }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#004d00', color: '#ffffff', padding: '10px 0' }}>
        <p>&copy; 2024 Tallado Colonial. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainTemplate;
