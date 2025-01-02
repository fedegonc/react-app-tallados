import React from "react";

const MenuToggle = ({ onClick }) => {
  const toggleStyles = {
    backgroundColor: "transparent",
    border: "none",
    color: "#FFFFFF",
    fontSize: "1.5rem",
    cursor: "pointer",
  };

  return (
    <button style={toggleStyles} onClick={onClick}>
      ☰
    </button>
  );
};

export default MenuToggle;
