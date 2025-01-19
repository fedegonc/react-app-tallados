import React from 'react';
import Forma from '../atoms/Forma';

const TemplateExample = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        height: '100vh', // Altura total de la pantalla
        boxSizing: 'border-box', // Asegura que el padding no afecte el 100vh
        padding: '10px', // Mantenemos el padding general
      }}
    >
      {/* Header */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: '0 0 10%', // El header ocupa el 10% del alto total
        }}
      >
        <Forma width="150px" height="50px" />
        <Forma width="150px" height="50px" />
      </header>

      {/* Main Content */}
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          flex: '1 1 auto', // El contenido principal ocupa el espacio restante
        }}
      >
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '10px',
            flex: '1 1 auto', // Ajusta el tamaño dinámicamente
          }}
        >
          {/* Left Column */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <Forma width="100%" height="100%" />
            <Forma width="100%" height="100%" />
          </div>
          {/* Right Column */}
          <Forma width="100%" height="100%" />
        </section>

        {/* Full-width Section */}
        <section
          style={{
            flex: '0 0 20%', // La sección de ancho completo ocupa el 20% del alto total
          }}
        >
          <Forma width="100%" height="100%" />
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          flex: '0 0 10%', // Ajustamos el alto del footer para eliminar el elemento adicional
        }}
      >
        <Forma width="100%" height="60px" />
        <Forma width="100%" height="40px" />
      </footer>
    </div>
  );
};

export default TemplateExample;
