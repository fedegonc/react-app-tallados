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
    fontSize: scrolled ? "1.6rem" : "2.0rem",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    zIndex: 1000,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(5px)",
    backgroundColor: scrolled ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.5)",
    transition: "all 0.1s ease", // Transiciones suaves
    padding: "0 20px", // Espaciado uniforme
    height: scrolled ? "40px" : "60px", // Altura no demasiado reducida
  };

  return (
    <header style={navbarStyles}>
      <Logo />
      <Menu />
    </header>
  );
};

export default Navbar;