import React from "react";
import Letras from "../atoms/Typo";

const Values = () => {
    const containerStyle = {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#f9f9f9", // Fondo claro
        padding: "40px 20px",
        flexWrap: "wrap", // Ajuste para pantallas pequeñas
    };

    const valueStyle = {
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
        fontFamily: Letras.textFont,
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "10px",
    };

    const descriptionStyle = {
        fontFamily: Letras.textFont,
        fontSize: "1rem",
        color: "#555",
        lineHeight: "1.6",
    };

    return (
        <div style={containerStyle}>
            {/* Proyectos */}
            <div style={valueStyle}>
                <i className="fas fa-seedling" style={iconStyle}></i>
                <h3 style={titleStyle}>Sostenibilidad</h3>
                <p style={descriptionStyle}>
                    Cada tallado contribuye a reforestar nuestro planeta, plantando un árbol por cada pieza creada.
                </p>
            </div>

            {/* Metodologias */}
            <div style={valueStyle}>
                <i className="fas fa-hands" style={iconStyle}></i>
                <h3 style={titleStyle}>Artesanía</h3>
                <p style={descriptionStyle}>
                    Diseños únicos y personalizados, hechos a mano con materiales de calidad.
                </p>
            </div>

            {/* Zona experimental */}
            <div style={valueStyle}>
                <i className="fas fa-palette" style={iconStyle}></i>
                <h3 style={titleStyle}>Personalización</h3>
                <p style={descriptionStyle}>
                    Ofrecemos opciones personalizadas para reflejar tu estilo y personalidad.
                </p>
            </div>
        </div>
    );
};

export default Values;
