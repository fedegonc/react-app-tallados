import React from 'react';
import TitleAtom from './TitleAtom';

const Banner = () => {
  const containerStyles = {
    display: 'flex',
    height: '100vh',
    width: '100%',
    backgroundImage: `url(${process.env.PUBLIC_URL}/img1.jpg)`, // Imagen de fondo desde la carpeta public
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#fff',
  };

  const leftSectionStyles = {
    flex: 7, // 70% del ancho
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  };

  const rightSectionStyles = {
    flex: 3, // 30% del ancho
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    
      
 
        <TitleAtom text="Tradición y Artesanía en madera" />
      </div>
     
  
  );
};

export default Banner;