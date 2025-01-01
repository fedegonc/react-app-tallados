// CardComponent.jsx
import React from 'react';
import ImageAtom from '../atoms/ImageAtom';
import ContentMolecule from '../molecules/ContentMolecule';

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

  return (
    <div style={cardStyles}>
      <ImageAtom src={imageSrc} alt={title} styles={imageStyles} />
      <ContentMolecule
        title={title}
        description={description}
        buttonLabel={buttonLabel}
        onButtonClick={onButtonClick}
        styles={contentStyles}
      />
    </div>
  );
};

export default CardComponent;
