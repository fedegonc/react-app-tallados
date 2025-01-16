import React from 'react';

const Paragraph = ({ text }) => {
  return (
    <p style={{
      fontSize: '1.5rem',
      lineHeight: '1.6',
      fontWeight: '300',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
      marginBottom: '30px',
    }}>
      {text}
    </p>
  );
};

export default Paragraph;
