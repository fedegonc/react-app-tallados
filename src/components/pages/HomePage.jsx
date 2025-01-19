import React, { useState } from "react";
import MainTemplate from "../templates/MainTemplate";
import Principal from "../organisms/Principal";

const HomePage = () => {
  // Lista de contenidos dinámicos
  const contents = [
    {
      titleText: "Dale un toque unico a tu establecimiento u hogar",
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
      buttonLink: "https://wa.me/tu-numero-de-whatsapp", // Enlace a WhatsApp
    },
  ];


  // Estado para seleccionar el contenido actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar al siguiente contenido (puede ser un botón o evento)
  const handleNextContent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
  };

  return (
    <MainTemplate>
      {/* Pasar el contenido actual a Principal */}
      <Principal
        titleText={contents[currentIndex].titleText}
        paragraphText={contents[currentIndex].paragraphText}
        buttonText={contents[currentIndex].buttonText}
        onButtonClick={handleNextContent} // Cambia al siguiente contenido
      />
    </MainTemplate>
  );
};

export default HomePage;
