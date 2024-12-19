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

  const cardStyles = {
    flex: '1 1 calc(33.333% - 20px)', // flex-grow: 1, base: 33.3% menos el gap
    minWidth: '250px', // Evita que las tarjetas sean demasiado pequeñas
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    backgroundColor: '#FFFFFF',
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
        <div style={cardStyles}>
          <CardComponent
            imageSrc="https://via.placeholder.com/300x180"
            title="Tallado en Madera"
            description="Descubre piezas únicas trabajadas a mano con detalle y pasión."
            buttonLabel="Ver detalles"
            onButtonClick={() => alert('Detalles de la tarjeta')}
          />
        </div>
        <div style={cardStyles}>
          <CardComponent
            imageSrc="https://via.placeholder.com/300x180"
            title="Proyectos Especiales"
            description="Personalizamos proyectos de tallado según tus necesidades."
            buttonLabel="Explorar"
            onButtonClick={() => alert('Explorar proyectos')}
          />
        </div>
        <div style={cardStyles}>
          <CardComponent
            imageSrc="https://via.placeholder.com/300x180"
            title="Decoraciones"
            description="Adorna tu hogar con piezas exclusivas de madera tallada."
            buttonLabel="Ver más"
            onButtonClick={() => alert('Ver más')}
          />
        </div>
      </div>
    </MainTemplate>
  );
};

export default HomePage;
