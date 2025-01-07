import React from "react";

const Card = ({ icon, title, description }) => {
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
        color: "#333",
        marginBottom: "10px",
    };

    const descriptionStyle = {
        fontSize: "1rem",
        color: "#555",
        lineHeight: "1.6",
    };

    return (
        <div style={cardStyle}>
            <i className={icon} style={iconStyle}></i>
            <h3 style={titleStyle}>{title}</h3>
            <p style={descriptionStyle}>{description}</p>
        </div>
    );
};

export default Card;
