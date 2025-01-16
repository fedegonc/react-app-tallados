import React, { useState, useEffect } from "react";
import Logo from "../atoms/Logo";
import Menu from "../molecules/Menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyles = {
    position: "fixed", // Fijo para mantenerse visible
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between", // Separación entre logo y menú
    alignItems: "center", // Centrar verticalmente
    zIndex: 1000,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(5px)",
    backgroundColor: scrolled ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.5)",
    transition: "all 0.3s ease", // Transición más suave
    padding: scrolled ? "0 15px" : "0 20px", // Reducir espaciado al hacer scroll
    height: scrolled ? "50px" : "70px", // Altura dinámica
  };

  const logoStyles = {
    display: "flex",
    alignItems: "center", // Asegura que el logo esté centrado verticalmente
    fontSize: scrolled ? "1.4rem" : "1.8rem", // Tamaño dinámico del logo
    transition: "font-size 0.3s ease", // Transición del tamaño del logo
  };

  const menuStyles = {
    display: "flex",
    alignItems: "center", // Centrar íconos del menú
    fontSize: scrolled ? "1.2rem" : "1.6rem", // Tamaño dinámico del menú
    transition: "font-size 0.3s ease", // Transición del tamaño del menú
  };

  return (
    <header style={navbarStyles}>
      <div style={logoStyles}>
        <Logo />
      </div>
      <div style={menuStyles}>
        <Menu />
      </div>
    </header>
  );
};

export default Navbar;
