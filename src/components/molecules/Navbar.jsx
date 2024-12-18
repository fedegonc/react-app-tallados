import React from 'react';

const Header = () => {
  const headerStyles = {
    backgroundColor: '#2C2C2C', // Fondo oscuro (negro suave)
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    color: '#FFFFFF',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Sombra ligera
  };

  const navStyles = {
    display: 'flex',
    gap: '25px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  };

  const linkStyles = {
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'color 0.3s ease, transform 0.2s ease',
  };

  const linkHoverStyles = {
    color: '#E8D8C3', // Color beige en hover
    transform: 'scale(1.05)', // Efecto sutil de aumento
  };

  return (
    <header style={headerStyles}>
      {/* Logo */}
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>
        TALLADO COLONIAL
      </div>

      {/* Navegación */}
      <nav>
        <ul style={navStyles}>
          <li>
            <a
              href="#home"
              style={linkStyles}
              onMouseEnter={(e) => {
                e.target.style.color = linkHoverStyles.color;
                e.target.style.transform = linkHoverStyles.transform;
              }}
              onMouseLeave={(e) => {
                e.target.style.color = linkStyles.color;
                e.target.style.transform = 'scale(1)';
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              style={linkStyles}
              onMouseEnter={(e) => {
                e.target.style.color = linkHoverStyles.color;
                e.target.style.transform = linkHoverStyles.transform;
              }}
              onMouseLeave={(e) => {
                e.target.style.color = linkStyles.color;
                e.target.style.transform = 'scale(1)';
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={linkStyles}
              onMouseEnter={(e) => {
                e.target.style.color = linkHoverStyles.color;
                e.target.style.transform = linkHoverStyles.transform;
              }}
              onMouseLeave={(e) => {
                e.target.style.color = linkStyles.color;
                e.target.style.transform = 'scale(1)';
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
