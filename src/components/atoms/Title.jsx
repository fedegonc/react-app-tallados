import React from 'react';

const Title = ({ text }) => {
  return (
    <h1 style={{
      fontSize: '3rem',
      fontWeight: '400',
      fontFamily: "'Alkatra', sans-serif",
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
      marginBottom: '20px',
    }}>
      {text}
    </h1>
  );
};

export default Title;
