import React from "react";
import Content from "../molecules/Content";

const Principal = ({ titleText, paragraphText, buttonText, onButtonClick }) => {
  return (
    <div>
      <Content
        titleText={titleText}
        paragraphText={paragraphText}
        buttonText={buttonText}
        onButtonClick={onButtonClick}
      />
    </div>
  );
};

export default Principal;
