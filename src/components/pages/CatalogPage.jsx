import React from 'react';
import Button from '../atoms/Button';
import Font from '../atoms/Font';

const CatalogPage = ({ onBack }) => {
  return (
    <section className="catalog">
      <div className="image-container">
        <img src="/static/img1.jpg" alt="Imagen Central" />
      </div>
      <div className="text-container">
        <h3>Imagen Central</h3>
        <p>Descripción de la imagen central.</p>
      </div>
      <div className="button-container">
        <Button label="Volver" onClick={onBack} className="back-button" />
      </div>

      <style jsx>{`
        .catalog {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
          min-height: 100vh;
          font-family: ${Font.primary};
          background: transparent;
        }

        .image-container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }

        .image-container img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        .text-container {
          margin-top: 20px;
          text-align: center;
          color: white;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          background: transparent;
          padding: 15px;
          border-radius: 8px;
        }

        .text-container h3 {
          font-size: 24px;
          margin: 0 0 10px;
        }

        .text-container p {
          font-size: 16px;
          margin: 0;
        }

        .button-container {
          margin-top: 20px;
        }

        :global(.back-button) {
          padding: 12px 24px;
          background-color: rgba(0, 51, 51, 0.7);
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-family: ${Font.primary};
          font-size: 16px;
          transition: background-color 0.3s ease;
        }

        :global(.back-button:hover) {
          background-color: rgba(0, 68, 68, 0.8);
        }
      `}</style>
    </section>
  );
};

export default CatalogPage;
