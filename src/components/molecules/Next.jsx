import React from 'react';
import Title from '../atoms/Title';
import Paragraph from '../atoms/Paragraph';

const Next = ({ titleText, paragraphText, imageSrc }) => {
  const styles = {
    container: {
      textAlign: 'center',
      margin: '20px 0',
      color: '#FFFFFF', // Color blanco explícito para mejor contraste
    },
    image: {
      width: '100%',
      maxWidth: '500px',
      height: 'auto',
      marginTop: '10px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
  };

  return (
    <div style={styles.container}>
      <Title text={titleText} />
      <Paragraph text={paragraphText} />
      {imageSrc && <img src={imageSrc} alt="Next Content" style={styles.image} />}
    </div>
  );
};

export default Next;
