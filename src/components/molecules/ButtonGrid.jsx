import React from "react";
import Button from "../atoms/Button";

const ButtonGrid = ({ buttons }) => {
  return (
    <div className="button-grid">
      {buttons.map((label, index) => (
        <Button
          key={index}
          label={label}
          styles={{
            width: "120px",
            height: "120px",
            backgroundColor: "#fff",
            color: "#000",
            border: "1px solid #ccc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        />
      ))}
      <style jsx>{`
        .button-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          width: 100%;
          justify-content: center;
          align-items: center;
          opacity: 0;
          animation: fadeIn 0.5s forwards; /* Animación de entrada */
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ButtonGrid;
