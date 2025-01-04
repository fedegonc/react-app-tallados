import React from "react";
import Logo from "../atoms/Logo"; 
import Menu from "../molecules/Menu";

const Navbar = () => {
  const navbarStyles = {
    position: "absolute", // Cambiado a 'absolute' para superponerse al fondo
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(0, 50, 0, 0.3)", // Semitransparente
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 30px",
    height: "70px",
    zIndex: 1000, // Asegura que esté encima de otros elementos
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(10px)", // Efecto de desenfoque
  };

  return (
    <header style={navbarStyles}>
      <Logo />
      <Menu />
    </header>
  );
};

export default Navbar;
