import React from 'react';
import Overlay from '../molecules/Overlay';
import Content from '../molecules/Content';

const Banner = () => {


  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
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

      }}
    >
      <Overlay />
      <Content
        titleText="Tradición y Artesanía en madera"
        paragraphText="Diseños personalizados que enriquecen tus espacios con durabilidad y estilo, reflejando un legado único."
        buttonText="Explora Más"
        onButtonClick={() => alert('¡Gracias por explorar más!')}

      />
    </div>
  );
};

export default Banner;
