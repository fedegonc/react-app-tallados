import React from "react";
import Logo from "../atoms/Logo";
import Menu from "../molecules/Menu";

const Navbar = () => {
  const navbarStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "70px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
    backdropFilter: "blur(5px)", // Transparencia con efecto blur
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semitransparente
    padding: "0 20px",
    color: "#fff", // Contraste del texto
  };

  return (
    <header style={navbarStyles}>
      <Logo />
      <Menu />
    </header>
  );
};

export default Navbar;
