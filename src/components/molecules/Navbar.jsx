import React, { useState } from 'react';
import Logo from '../atoms/Logo';
import MenuButton from '../atoms/MenuButton';
import Menu from '../molecules/Menu';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navbarStyles = {
    position: 'relative',
    backgroundColor: 'rgba(44, 44, 44, 0.8)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 30px', // Ajuste vertical eliminado
    height: '70px', // Fija la altura para evitar inconsistencias
    zIndex: 1000,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(10px)',
};

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleOptionClick = (option) => alert(`Seleccionaste: ${option}`);

  return (
    <header style={navbarStyles}>
      <Logo />
      <MenuButton onClick={handleMenuToggle} />
      <Menu
        isOpen={menuOpen}
        options={['Opción 1', 'Opción 2', 'Opción 3']}
        onOptionClick={handleOptionClick}
      />
    </header>
  );
};

export default Navbar;
