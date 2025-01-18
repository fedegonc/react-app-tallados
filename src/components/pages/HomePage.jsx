import React, { useState } from "react";
import MainTemplate from "../templates/MainTemplate";
import Principal from "../organisms/Principal";

const HomePage = () => {
  // Lista de contenidos dinámicos
  const contents = [
    {
      titleText: "Tradición y Artesanía en madera",
      paragraphText:
        "Diseños personalizados que enriquecen tus espacios con durabilidad y estilo, reflejando un legado único.",
      buttonText: "Explora Más",
    },
    {
      titleText: "Innovación y Diseño Moderno",
      paragraphText:
        "Creamos piezas únicas para espacios contemporáneos, combinando creatividad y funcionalidad.",
      buttonText: "Conoce Más",
    },
    {
      titleText: "Sostenibilidad y Elegancia",
      paragraphText:
        "Nuestros diseños priorizan el cuidado del medio ambiente sin comprometer la calidad.",
      buttonText: "Descubre Más",
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
