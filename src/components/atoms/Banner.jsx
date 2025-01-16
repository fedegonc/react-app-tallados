import React from 'react';

const Banner = () => {
  const styles = {
    banner: {
      position: 'relative',
      height: '100vh',
      width: '100%',
      backgroundImage: `url(${process.env.PUBLIC_URL}/static/img1.jpeg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      overflow: 'hidden',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ajuste del contraste
      zIndex: 1,
    },
    content: {
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      padding: '0 20px',
    },
    title: {
      fontSize: '3rem',
      fontWeight: '400', // Reducción del grosor de la fuente
      fontFamily: "'Alkatra', sans-serif", // Fuente más delgada o personalizada
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
      marginBottom: '20px',
      animation: 'fadeInDown 1s ease-in-out',
    },
    description: {
      fontSize: '1.5rem',
      lineHeight: '1.6',
      fontWeight: '300', // También ajustar el peso del subtítulo
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
      marginBottom: '30px',
      animation: 'fadeInUp 1.2s ease-in-out',
    },
    button: {
      padding: '10px 20px',
      fontSize: '1rem',
      fontWeight: 'bold',
      color: '#000',
      backgroundColor: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      animation: 'fadeIn 1.5s ease-in-out',
    },
    buttonHover: {
      backgroundColor: '#f1c40f',
    },
  };

  const handleHover = (e, isHovering) => {
    e.target.style.backgroundColor = isHovering
      ? styles.buttonHover.backgroundColor
      : styles.button.backgroundColor;
  };

  return (
    <div style={styles.banner}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <h1 style={styles.title}>Tradición y Artesanía en madera</h1>
        <p style={styles.description}>
          Diseños personalizados que enriquecen tus espacios con durabilidad y estilo, reflejando un legado único.
        </p>
        <button
          style={styles.button}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          Explora Más
        </button>
      </div>
    </div>
  );
};

export default Banner;
