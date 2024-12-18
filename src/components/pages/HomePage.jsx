import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import Button from '../atoms/Button';
import CardComponent from '../molecules/CardComponent';

const HomePage = () => {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    
    alignItems: 'flex-start', // Alinea los elementos a la izquierda
    height: '70vh',
    gap: '20px', // Espacio entre elementos
    padding: '0 20px', // Espaciado horizontal
  };

  const titleStyles = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#004d00', // Verde oscuro para título
  };

  const textStyles = {
    fontSize: '1.2rem',
    color: '#333333', // Gris oscuro para descripción
    maxWidth: '600px', // Limita el ancho del texto
    lineHeight: '1.5',
  };

  return (
    <MainTemplate>
      <div style={containerStyles}>
        <h1 style={titleStyles}>Bienvenido a Tallado Colonial</h1>
        <p style={textStyles}>
          Explora nuestras creaciones únicas en madera tallada, trabajadas con
          dedicación y precisión.
        </p>
        <Button label="Ver más" onClick={() => alert('Explorando más...')} />
      </div>
      <CardComponent
        imageSrc="https://via.placeholder.com/300x180" // Imagen de prueba
        title="Título de la Tarjeta"
        description="Esta es una breve descripción de la tarjeta. Aquí puedes agregar contenido relevante."
        buttonLabel="Ver más"
      />
    </MainTemplate>
  );
};

export default HomePage;
