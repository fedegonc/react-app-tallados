import React from 'react';
import Title from '../atoms/Title';
import Paragraph from '../atoms/Paragraph';
import Button from '../atoms/Button';

const Content = ({ titleText, paragraphText, buttonText, onButtonClick }) => {
  return (
    <div className="content">
      <Title text={titleText} />
      <Paragraph text={paragraphText} />
      <Button text={buttonText} onClick={onButtonClick} />
      <style jsx>{`
        .content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 20px;
          color: #fff; /* Define explícitamente el color del texto */
        }
      `}</style>
    </div>
  );
};

export default Content;
