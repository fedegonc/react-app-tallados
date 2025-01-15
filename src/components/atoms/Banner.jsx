import React from 'react';
import TitleAtom from './TitleAtom';

const Banner = () => {
  const containerStyles = {
    display: 'flex',
    height: '100vh',
    width: '100%',
    backgroundColor: '#000',
    color: '#fff',
  };

  const leftSectionStyles = {
    flex: 7,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  };

  const rightSectionStyles = {
    flex: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={containerStyles}>
      <div style={leftSectionStyles}>
        <TitleAtom text="Tradición y Artesanía en madera" />
      </div>

    </div>
  );
};

export default Banner;
