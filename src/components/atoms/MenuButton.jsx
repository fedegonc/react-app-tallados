import React from "react";

const MenuButton = ({ label, onClick }) => {
  const buttonStyles = {
    margin: "10px 0",
    color: "#FFFFFF",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "1rem",
    cursor: "pointer",
    textAlign: "left",
    padding: "5px 0",
  };

  return (
    <button style={buttonStyles} onClick={onClick}>
      {label}
    </button>
  );
};

export default MenuButton;
