import React, { useState, useEffect } from "react";
import cardsData from "./atoms/CardsData";

const Card = () => {
    const [visibleCards, setVisibleCards] = useState([]);

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
            backgroundColor: "#222",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
        },
        cardVisible: {
            opacity: 1,
            transform: "translateY(0)",
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

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleCards((prev) =>
                            prev.includes(entry.target.dataset.index)
                                ? prev
                                : [...prev, entry.target.dataset.index]
                        );
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cardElements = document.querySelectorAll(".card-item");
        cardElements.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <div style={styles.container}>
            {cardsData.map((card, index) => (
                <div
                    key={index}
                    data-index={index}
                    className="card-item"
                    style={{
                        ...styles.card,
                        ...(visibleCards.includes(String(index)) ? styles.cardVisible : {}),
                    }}
                >
                    <i className={card.icon} style={styles.icon} aria-hidden="true"></i>
                    <h3 style={styles.title}>{card.title}</h3>
                    <p style={styles.description}>{card.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Card;