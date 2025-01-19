import React from 'react';

const Size = ({ width, height, children }) => {
  const styles = {
    width: width || '100%',
    height: height || '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return <div style={styles}>{children}</div>;
};

export default Size;
