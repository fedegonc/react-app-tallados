import React from 'react';

const Banner = () => {
  const bannerStyle = {
    width: '100%',
    height: '400px',
    backgroundImage: `url(${process.env.PUBLIC_URL}/static/img1.jpeg)`, // Ruta corregida
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    fontSize: '2rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  };

  return (
    <div style={bannerStyle}>
      Welcome to the Banner!
    </div>
  );
};

export default Banner;
