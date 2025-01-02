import React from "react";

const Footer = () => {
  const footerStyles = {
    backgroundColor: "#2C2C2C",
    color: "#E8D8C3",
    padding: "20px 0", // Espaciado generoso
    textAlign: "center",
    borderTop: "4px solid #C0C0C0", // Línea en la parte superior del footer
  };

  return (
    <footer style={footerStyles}>
      <p>&copy; 2024 Tallado Colonial. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
