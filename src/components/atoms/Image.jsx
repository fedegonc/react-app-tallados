// ImageAtom.jsx
import React from 'react';

const ImageAtom = ({ src, alt, styles }) => {
  return <img src={src} alt={alt} style={styles} />;
};

export default ImageAtom;
