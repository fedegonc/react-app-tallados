import React, { useState, useRef, useEffect } from "react";
import MenuToggle from "../atoms/MenuToggle";
import MenuList from "../atoms/MenuList";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionClick = (option) => {
    alert(`Seleccionaste: ${option}`);
    setIsOpen(false); // Cierra el menú
  };

  const menuStyles = {
    position: "absolute",
    top: "70px",
    right: "0",
    backgroundColor: "#2C2C2C",
    color: "#FFFFFF",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    display: isOpen ? "block" : "none",
    minWidth: "150px",
  };

  return (
    <div ref={menuRef}>
      <MenuToggle onClick={() => setIsOpen(!isOpen)} />

      {/* Opciones del menú usando MenuList */}
      <div style={menuStyles}>
        <MenuList
          items={[
            
            "Inicio", 
            "Servicios", 
            "Contacto"
        ]}
          onItemClick={handleOptionClick}
        />
      </div>
    </div>
  );
};

export default Menu;
