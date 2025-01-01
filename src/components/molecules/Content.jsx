// ContentMolecule.jsx
import React from 'react';
import TitleAtom from '../atoms/TitleAtom';
import DescriptionAtom from '../atoms/DescriptionAtom';
import Button from '../atoms/Button';

const ContentMolecule = ({ title, description, buttonLabel, onButtonClick, styles }) => {
  return (
    <div style={styles}>
      <TitleAtom text={title} styles={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333333', margin: 0 }} />
      <DescriptionAtom text={description} styles={{ fontSize: '1rem', color: '#555555', margin: 0, lineHeight: '1.4' }} />
      <Button label={buttonLabel} onClick={onButtonClick} />
    </div>
  );
};

export default ContentMolecule;
