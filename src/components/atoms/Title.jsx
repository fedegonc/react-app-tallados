import React from 'react';

const Title = ({ text }) => {
  const styles = {
    fontSize: '3rem',
    fontWeight: '400',
    fontFamily: "'Alkatra', sans-serif",
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
    marginBottom: '20px',
    color: '#fff',
  };

  return <h1 style={styles}>{text}</h1>;
};

export default Title;
