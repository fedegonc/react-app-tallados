import React from "react";
import Logo from "../atoms/Logo"; 
import Menu from "../molecules/Menu";

const Navbar = () => {
  const navbarStyles = {
    position: "relative",
    backgroundColor: "rgba(44, 44, 44, 0.8)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 30px",
    height: "70px",
    zIndex: 1000,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(10px)",
  };

  return (
    <header style={navbarStyles}>
      <Logo />
      <Menu />
    </header>
  );
};

export default Navbar;
