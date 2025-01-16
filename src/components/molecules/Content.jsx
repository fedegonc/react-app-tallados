import React from 'react';
import Title from '../atoms/Title';
import Paragraph from '../atoms/Paragraph';
import Button from '../atoms/Button';

const Content = ({ titleText, paragraphText, buttonText, onButtonClick, buttonStyles }) => {
  return (
    <div className="content">
      <Title text={titleText} />
      <Paragraph text={paragraphText} />
      {/* Pasamos el objeto `buttonStyles` como props al componente Button */}
      <Button label={buttonText} onClick={onButtonClick} styles={buttonStyles} />
      <style jsx>{`
        .content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 20px;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Content;
