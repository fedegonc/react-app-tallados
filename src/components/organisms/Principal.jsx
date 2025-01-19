import React from "react";
import Content from "../molecules/Content";

const Principal = ({
  titleText,
  paragraphText,
  buttonText,
  buttonLink,
  onButtonClick,
}) => {
  return (
    <div>
      <Content
        titleText={titleText}
        paragraphText={paragraphText}
        buttonText={buttonText}
        buttonLink={buttonLink} // Pasar el enlace si existe
        onButtonClick={onButtonClick}
      />
    </div>
  );
};

export default Principal;
