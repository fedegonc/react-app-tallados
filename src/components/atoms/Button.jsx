import React from 'react';

const Button = ({ label, onClick }) => {
  const styles = {
    padding: '10px 20px',
    backgroundColor: '#006400', // Verde oscuro
    color: '#ffffff',
    border: '2px solid #004d00',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  };

  return (
    <button style={styles} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
