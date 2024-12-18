import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import Button from '../atoms/Button';
import CardComponent from '../molecules/CardComponent';

const HomePage = () => {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start', // Alineación a la izquierda
    gap: '30px', // Mayor espacio entre elementos
    padding: '40px 20px', // Espaciado generoso
    backgroundColor: '#E8D8C3', // Fondo beige suave
    borderRadius: '10px', // Bordes suaves
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra ligera
  };

  const titleStyles = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#4A5D4E', // Verde oscuro calmado
    margin: '0', // Elimina márgenes por defecto
  };

  const textStyles = {
    fontSize: '1.1rem',
    color: '#2C2C2C', // Negro suave
    maxWidth: '600px',
    lineHeight: '1.6',
    margin: '0', // Elimina márgenes
  };

  const cardContainerStyles = {
    display: 'flex',
    gap: '20px',
    marginTop: '40px', // Espacio superior para la sección de tarjetas
    flexWrap: 'wrap', // Permite que las tarjetas se adapten en varias líneas
  };

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
        <CardComponent
          imageSrc="https://via.placeholder.com/300x180"
          title="Tallado en Madera"
          description="Descubre piezas únicas trabajadas a mano con detalle y pasión."
          buttonLabel="Ver detalles"
          onButtonClick={() => alert('Detalles de la tarjeta')}
        />
        <CardComponent
          imageSrc="https://via.placeholder.com/300x180"
          title="Proyectos Especiales"
          description="Personalizamos proyectos de tallado según tus necesidades."
          buttonLabel="Explorar"
          onButtonClick={() => alert('Explorar proyectos')}
        />
      </div>
    </MainTemplate>
  );
};

export default HomePage;
