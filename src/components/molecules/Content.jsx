import React from 'react';
import Title from '../atoms/Title';
import Paragraph from '../atoms/Paragraph';
import Button from '../atoms/Button';

const Content = ({ titleText, paragraphText, buttonText, onButtonClick }) => {
  return (
    <div className="content">
      <Title text={titleText} />
      <Paragraph text={paragraphText} />
      <Button
        label={buttonText}
        onClick={onButtonClick}
        styles={{
          position: "relative", // Asegura que respete el flujo local
          zIndex: 3, // Más alto que el Overlay
        }}
      />
      <style jsx>{`
        .content {
          position: relative;

          text-align: center;
          padding: 0 20px;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Content;
