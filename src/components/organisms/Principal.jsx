import React from 'react';
import Overlay from '../molecules/Overlay';
import Content from '../molecules/Content';

const Principal = () => {
  return (
    <div
      style={{
        position: 'relative', // Cambiado a relativo para ajustarse al MainTemplate
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%', // Ocupa todo el espacio dentro del MainTemplate
        width: '100%',
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

export default Principal;
