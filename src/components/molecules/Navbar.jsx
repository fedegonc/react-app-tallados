import React from 'react';
import Logo from '../atoms/Logo';

const Navbar = () => {
  const navbarStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff', // Verde oscuro
    padding: '10px 20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const linkStyles = {
    color: '#000',
    textDecoration: 'none',
    margin: '0 10px',
    fontSize: '1rem',
    fontWeight: 'bold',
  };

  return (
    <nav style={navbarStyles}>
      {/* Logo */}
      <Logo />

      {/* Enlaces */}
      <div>
        <a href="/" style={linkStyles}>Home</a>
        <a href="/about" style={linkStyles}>About</a>
        <a href="/contact" style={linkStyles}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
