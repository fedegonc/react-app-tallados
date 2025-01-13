import React from "react";
import cardsData from "./CardsData";

const Card = () => {
    const styles = {
        container: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
        },
        card: {
            textAlign: "center",
            width: "300px",
            margin: "20px",
            backgroundColor: "#222", // Fondo opcional para contraste
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
        icon: {
            fontSize: "3rem",
            color: "#76C893",
            marginBottom: "10px",
        },
        title: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#aaa",
            marginBottom: "10px",
        },
        description: {
            fontSize: "1rem",
            color: "#eee",
            lineHeight: "1.6",
        },
    };

    return (
        <div style={styles.container}>
            {cardsData.map((card, index) => (
                <div key={index} style={styles.card}>
                    <i className={card.icon} style={styles.icon} aria-hidden="true"></i>
                    <h3 style={styles.title}>{card.title}</h3>
                    <p style={styles.description}>{card.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Card;
