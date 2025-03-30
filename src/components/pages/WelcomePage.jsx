import React from 'react';
import Principal from '../organisms/Principal';

const WelcomePage = ({ onNext, onBack }) => {
  return (
    <Principal
      titleText="Bienvenido"
      paragraphText="Descubre nuestras piezas únicas y personalizadas, hechas con la mejor calidad de madera y diseño artesanal."
      buttonText="Explorar"
      onButtonClick={onNext}
      onBack={onBack}
    />
  );
};

export default WelcomePage;
