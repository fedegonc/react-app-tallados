import React from "react";

const MainParagraph = () => {
  const paragraphStyles = {
    fontSize: "1.1rem",
    color: "#2C2C2C",
    maxWidth: "600px",
    lineHeight: "1.6",
    margin: "0 0 20px",
  };

  return (
    <p style={paragraphStyles}>
      Explora nuestras creaciones únicas en madera tallada, trabajadas con dedicación y precisión. Cada pieza cuenta una historia y refleja el arte tradicional uruguayo.
    </p>
  );
};

export default MainParagraph;
