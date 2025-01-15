import React from 'react';

const TitleAtom = ({ text }) => {
  const styles = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    margin: 0,
  };

  return <h1 style={styles}>{text}</h1>;
};

export default TitleAtom;
