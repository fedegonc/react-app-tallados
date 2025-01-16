import React from 'react';

const Banner = () => {
  const styles = {
    banner: {
      position: 'relative',
      height: '100vh',
      width: '100%',
      backgroundImage: `url(${process.env.PUBLIC_URL}/static/img1.jpeg.jpeg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start', // Ajuste para alinear hacia arriba
      alignItems: 'center',
      color: '#fff',
      overflow: 'hidden',
      paddingTop: '10vh', // Control preciso de la posición vertical
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
      fontWeight: '400',
      fontFamily: "'Alkatra', sans-serif",
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
      marginBottom: '20px',
    },
    description: {
      fontSize: '1.5rem',
      lineHeight: '1.6',
      fontWeight: '300',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
      marginBottom: '30px',
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

  const handleClick = () => {
    alert('¡Gracias por hacer clic!');
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
          onClick={handleClick}
        >
          Explora Más
        </button>
      </div>
    </div>
  );
};

export default Banner;
