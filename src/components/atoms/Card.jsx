// Card.js
import React from "react";
import cardsData from "./CardsData";

const Card = () => {
    const cardStyle = {
        textAlign: "center",
        width: "300px",
        margin: "20px",
    };

    const iconStyle = {
        fontSize: "3rem",
        color: "#76C893",
        marginBottom: "10px",
    };

    const titleStyle = {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#aaa",
        marginBottom: "10px",
    };

    const descriptionStyle = {
        fontSize: "1rem",
        color: "#eee",
        lineHeight: "1.6",
    };

    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {cardsData.map((card, index) => (
                <div key={index} style={cardStyle}>
                    <i className={card.icon} style={iconStyle}></i>
                    <h3 style={titleStyle}>{card.title}</h3>
                    <p style={descriptionStyle}>{card.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Card;