import React from 'react';
import Button from '../atoms/Button';

const CardComponent = ({ imageSrc, title, description, buttonLabel, onButtonClick }) => {
  const cardStyles = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '10px',
  };

  const imageStyles = {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  };

  const contentStyles = {
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  const titleStyles = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333333',
    margin: 0,
  };

  const descriptionStyles = {
    fontSize: '1rem',
    color: '#555555',
    margin: 0,
    lineHeight: '1.4',
  };

  return (
    <div style={cardStyles}>
      {/* Imagen */}
      <img src={imageSrc} alt={title} style={imageStyles} />

      {/* Contenido */}
      <div style={contentStyles}>
        <h3 style={titleStyles}>{title}</h3>
        <p style={descriptionStyles}>{description}</p>

        {/* Botón */}
        <Button label={buttonLabel} onClick={onButtonClick} />
      </div>
    </div>
  );
};

export default CardComponent;
