import React from 'react';
import Card from '../molecules/Card';

const CardGrid = () => {
  const cards = [
    { id: 1, title: 'Card 1', description: 'Test description 1' },
    { id: 2, title: 'Card 2', description: 'Test description 2' },
    { id: 3, title: 'Card 3', description: 'Test description 3' },
    { id: 4, title: 'Card 4', description: 'Test description 4' },
    { id: 5, title: 'Card 5', description: 'Test description 5' },
    { id: 6, title: 'Card 6', description: 'Test description 6' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Altura mínima para ocupar toda la pantalla
        backgroundColor: '#f9f9f9', // Fondo claro
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
        }}
      >
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imageSrc="https://via.placeholder.com/200"
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
