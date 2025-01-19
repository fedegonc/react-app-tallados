import React from 'react';

const Forma = ({ width, height, style = {} }) => {
  return (
    <div
      style={{
        width: width || '100px',
        height: height || '50px',
        border: '2px solid #000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
    ></div>
  );
};

export default Forma;
