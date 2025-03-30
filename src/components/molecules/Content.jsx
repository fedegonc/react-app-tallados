import React from "react";
import Title from "../atoms/Title";
import Paragraph from "../atoms/Paragraph";
import Button from "../atoms/Button";

const Content = ({
  titleText,
  paragraphText,
  buttonText,
  buttonLink,
  onButtonClick,
  secondaryButtonText,
  onSecondaryButtonClick,
}) => {
  return (
    <div className="content">
      <Title text={titleText} />
      <Paragraph text={paragraphText} />
      <div className="buttons-container">
        <Button
          label={buttonText}
          onClick={onButtonClick}
          styles={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "#fff",
            padding: "0.8rem 2rem",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "all 0.3s ease",
            marginTop: "1rem",
            fontWeight: "500",
            letterSpacing: "0.5px",
          }}
        />
        {secondaryButtonText && onSecondaryButtonClick && (
          <Button
            label={secondaryButtonText}
            onClick={onSecondaryButtonClick}
            styles={{
              backgroundColor: "transparent",
              color: "#fff",
              padding: "0.8rem 2rem",
              border: "1px solid rgba(255, 255, 255, 0.8)",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "all 0.3s ease",
              marginTop: "1rem",
              fontWeight: "500",
              letterSpacing: "0.5px",
              marginLeft: "1rem",
            }}
          />
        )}
      </div>

      <style jsx>{`
        .content {
          position: relative;
          color: #fff;
          text-align: left;
          padding: 20px; /* Espaciado interno */
          max-width: 600px; /* Ancho máximo */
          margin: 0; /* Elimina el centrado horizontal */
          margin-left: 50px; /* Añade margen izquierdo para separarlo del borde */
        }

        .buttons-container {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .buttons-container {
            flex-direction: column;
          }

          .buttons-container button:last-child {
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Content;
