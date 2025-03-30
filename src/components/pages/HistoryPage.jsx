import React from 'react';
import Principal from '../organisms/Principal';

const HistoryPage = ({ onNext, onBack }) => {
  return (
    <Principal
      titleText="Nuestra Historia"
      paragraphText="Con raíces en la artesanía local, buscamos combinar técnicas tradicionales con diseños modernos para crear obras que trasciendan el tiempo."
      buttonText="Conoce Nuestro Trabajo"
      onButtonClick={onNext}
      onBack={onBack}
      backButton
    />
  );
};

export default HistoryPage;
