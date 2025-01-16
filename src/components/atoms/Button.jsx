import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button className="content-button" onClick={onClick}>
      {text}
      <style jsx>{`
        .content-button {
          padding: 10px 20px;
          font-size: 1rem;
          font-weight: bold;
          color: #000;
          background-color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .content-button:hover {
          background-color: #f1c40f;
        }
      `}</style>
    </button>
  );
};

export default Button;
