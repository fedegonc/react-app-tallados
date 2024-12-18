import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import Button from '../atoms/Button';


const HomePage = () => {
  return (
    <MainTemplate>
   
      <h1>Bienvenido a Tallado Colonial</h1>
      <p>Explora nuestras creaciones únicas en madera tallada.</p>
      <Button label="Ver más" onClick={() => alert('Explorando más...')} />
    </MainTemplate>
  );
};

export default HomePage;
