import React from 'react';
import Button from '../atoms/Button';

const ProductSection = ({ title, description, imagePath, buttonText, onButtonClick }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={imagePath} alt={title} className="product-image" />
      </div>
      <div className="product-content">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <Button 
          label={buttonText} 
          onClick={onButtonClick || (() => {})}
        />
      </div>

      <style jsx>{`
        .product-card {
          background-color: rgba(20, 20, 20, 0.8);
          border-radius: 8px;
          overflow: hidden;
          width: 100%;
          max-width: 350px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
        }
        
        .product-image-container {
          width: 100%;
          height: 220px;
          overflow: hidden;
        }
        
        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .product-card:hover .product-image {
          transform: scale(1.05);
        }
        
        .product-content {
          padding: 1.5rem;
        }
        
        .product-title {
          font-size: 1.5rem;
          color: #fff;
          margin-bottom: 0.8rem;
          font-family: 'Alkatra', sans-serif;
        }
        
        .product-description {
          font-size: 0.95rem;
          color: #ddd;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .product-card {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductSection;
