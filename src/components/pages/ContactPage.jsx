import React from 'react';
import Principal from '../organisms/Principal';

const ContactPage = ({ onNext, onBack }) => {
  return (
    <Principal
      titleText="¿Tienes un Proyecto en Mente?"
      paragraphText="Nos encantaría escucharte y ayudarte a convertir tu idea en una realidad tangible. Cada proyecto es especial y único para nosotros."
      buttonText="Habla con Nosotros"
      buttonLink="https://wa.me/59892224955"
      onButtonClick={onNext}
      onBack={onBack}
    />
  );
};

export default ContactPage;
