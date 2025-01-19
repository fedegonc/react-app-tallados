import React from "react";
import Title from "../atoms/Title";
import Paragraph from "../atoms/Paragraph";
import Button from "../atoms/Button";

const Content = ({ titleText, paragraphText, buttonText, onButtonClick }) => {
  return (
    <div className="content">
      <Title text={titleText} />
      <Paragraph text={paragraphText} />
      <Button
        label={buttonText}
        onClick={onButtonClick}
        styles={{
          position: "relative", // Asegura que respete el flujo local
          zIndex: 3, // Más alto que cualquier elemento como un overlay
        }}
      />
      <style jsx>{`
        .content {
          position: relative;
          color: #fff;
          text-align: left;
          padding: 20px; /* Espaciado interno */
          max-width: 600px; /* Ancho máximo */
          margin: 0 auto; /* Centra horizontalmente el bloque */
        }
      `}</style>
    </div>
  );
};

export default Content;
