import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import Button from '../atoms/Button';


const HomePage = () => {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start', // Alineación a la izquierda
    gap: '30px',
    padding: '40px 20px',
    backgroundColor: '#E8D8C3',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const titleStyles = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#4A5D4E',
    margin: '0',
  };

  const textStyles = {
    fontSize: '1.1rem',
    color: '#2C2C2C',
    maxWidth: '600px',
    lineHeight: '1.6',
    margin: '0',
  };

  const cardContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap', // Permite que las tarjetas pasen a la siguiente fila
    gap: '20px',
    marginTop: '40px',
  };
;

  return (
    <MainTemplate>
      {/* Contenido Principal */}
      <div style={containerStyles}>
        <h1 style={titleStyles}>Bienvenido a Tallado Colonial</h1>
        <p style={textStyles}>
          Explora nuestras creaciones únicas en madera tallada, trabajadas con dedicación y precisión.
        </p>
        <Button label="Ver más" onClick={() => alert('Explorando más...')} />
      </div>

      {/* Sección de Tarjetas */}
      <div style={cardContainerStyles}>
        
       
      </div>
    </MainTemplate>
  );
};

export default HomePage;
