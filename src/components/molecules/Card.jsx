import React from 'react';
import Title from '../atoms/Title';
import Paragraph from '../atoms/Paragraph';

const Card = ({ imageSrc, title, description, buttonText, onButtonClick }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%', // Ancho relativo
        maxWidth: '300px', // Ancho máximo
        height: '200px', // Alto fijo
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '12px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        color: '#fff',
        padding: '15px',
        boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 12px 18px rgba(0, 0, 0, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
      }}
    >
      <div style={{ zIndex: 1, backdropFilter: 'brightness(50%)' }}>
        <Title text={title} />
        <Paragraph text={description} />
        {buttonText && (
          <button
            style={{
              marginTop: '10px',
              padding: '8px 12px',
              border: 'none',
              borderRadius: '8px',
              backgroundColor: '#ff5722',
              color: '#fff',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onClick={onButtonClick}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = '#e64a19')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = '#ff5722')
            }
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
