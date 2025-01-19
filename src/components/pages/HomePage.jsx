import React, { useState } from "react";
import MainTemplate from "../templates/MainTemplate";
import Principal from "../organisms/Principal";
import ButtonGrid from "../molecules/ButtonGrid";

const HomePage = () => {
  const contents = [
    {
      titleText: "Dale un toque único a tu establecimiento u hogar",
      paragraphText:
        "Creamos piezas únicas que conectan tradición y diseño, hechas con madera de la más alta calidad y personalizadas según tus necesidades.",
      buttonText: "Saber Más",
    },
    {
      titleText: "Nuestra Historia",
      paragraphText:
        "Con raíces en la artesanía local, buscamos combinar técnicas tradicionales con diseños modernos para crear obras que trasciendan el tiempo.",
      buttonText: "Conoce Nuestro Trabajo",
    },
    {
      titleText: "¿Tienes un Proyecto en Mente?",
      paragraphText:
        "Nos encantaría escucharte y ayudarte a convertir tu idea en una realidad tangible. Cada proyecto es especial y único para nosotros.",
      buttonText: "Habla con Nosotros",
      buttonLink: "https://wa.me/tu-numero-de-whatsapp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButtonGrid, setShowButtonGrid] = useState(false);

  const handleNextContent = () => {
    if (currentIndex < contents.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowButtonGrid(true); // Mostrar la cuadrícula de botones
    }
  };

  return (
    <MainTemplate>
      {!showButtonGrid ? (
        <Principal
          titleText={contents[currentIndex].titleText}
          paragraphText={contents[currentIndex].paragraphText}
          buttonText={contents[currentIndex].buttonText}
          onButtonClick={handleNextContent}
        />
      ) : (
        <ButtonGrid buttons={["1", "2", "3", "4", "5", "6"]} />
      )}
    </MainTemplate>
  );
};

export default HomePage;
