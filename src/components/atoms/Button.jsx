import React from 'react';

const Banner = () => {
  const bannerStyles = {
    position: 'relative',
    height: '100vh',
    width: '100%',
    backgroundImage: `url('/path-to-your-image.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    zIndex: 1,
  };

  const contentStyles = {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    color: '#fff',
    padding: '0 20px',
  };

  const titleStyles = {
    fontSize: '3rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
    marginBottom: '10px',
  };

  const descriptionStyles = {
    fontSize: '1.5rem',
    lineHeight: '1.6',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
  };

  return (
    <div style={bannerStyles}>
      <div style={overlayStyles}></div>
      <div style={contentStyles}>
        <h1 style={titleStyles}>Tradición y Artesanía en madera</h1>
        <p style={descriptionStyles}>
          Diseños personalizados que enriquecen tus espacios con durabilidad y estilo, reflejando un legado único.
        </p>
      </div>
    </div>
  );
};

export default Banner;
