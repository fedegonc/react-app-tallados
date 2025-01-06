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
    backgroundColor: "rgba(0, 50, 0, 0.3)", // Semitransparente
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: scrolled ? "0 20px" : "0 30px",
    height: scrolled ? "50px" : "70px", // Reduce altura al hacer scroll
    zIndex: 1000,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(10px)", // Efecto de desenfoque
    transition: "all 0.3s ease", // Transiciones suaves
  };

  return (
    <header style={navbarStyles}>
      <Logo />
      <Menu />
    </header>
  );
};

export default Navbar;
