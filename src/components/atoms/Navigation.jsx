import React from 'react';

const Navigation = () => {
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
    color: '#E8D8C3',
    transform: 'scale(1.05)',
  };

  return (
    <nav>
      <ul style={navStyles}>
        {['Home', 'About', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
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
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
