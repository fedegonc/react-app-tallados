import React from 'react';
import TitleAtom from './atoms/TitleAtom';

const Banner = () => {
  const containerStyles = {
    display: 'flex',
    height: '100vh',
    width: '100%',
    backgroundImage: `url('/path-to-your-image.jpg')`, // Cambia la ruta por la imagen que usarás
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
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
      <div style={rightSectionStyles}>
        {/* Aquí puedes agregar la imagen como componente más adelante */}
      </div>
    </div>
  );
};

export default Banner;