import React from "react";

const CardGrid = ({ cards }) => {
  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <div
          key={index}
          className="card"
          onClick={() => card.onClick()}
        >
          <span className="card-text">{card.label}</span>
        </div>
      ))}
      <style jsx>{`
        .card-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          width: 100%;
          padding: 20px;
          justify-items: center;
        }

        .card {
          width: 150px;
          height: 150px;
          background-color: #fff;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
        }

        .card-text {
          font-size: 1.2rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default CardGrid;
