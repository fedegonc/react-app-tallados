import React from "react";

const MenuList = ({ items = [], onItemClick }) => {
  const listStyles = {
    listStyle: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const listItemStyles = {
    cursor: "pointer",
    color: "#FFFFFF",
    padding: "5px 10px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
    backgroundColor: "transparent",
  };

  const listItemHoverStyles = {
    ...listItemStyles,
    backgroundColor: "#444",
  };

  return (
    <ul style={listStyles}>
      {items.map((item, index) => (
        <li
          key={index}
          style={listItemStyles}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#444")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
          onClick={() => onItemClick(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
