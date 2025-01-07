import React from "react";
import Letras from "../atoms/Typo";

const Banner = () => {
    const bannerStyle = {
        width: "100%",
        height: "400px",
        backgroundImage: `url(${process.env.PUBLIC_URL}/static/img1.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        display: "flex",
        alignItems: "center",
        padding: "0 20px", // Ajustar padding en móviles
    };

    const overlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Superposición oscura
    };

    const contentStyle = {
        position: "relative",
        zIndex: 2,
        textAlign: "left", // Alinear contenido a la izquierda
        color: "#ffffff",
    };

    const textStyle = {
        fontSize: "2.5rem",
        fontWeight: "bold",
        textShadow: `
            3px 3px 0px rgba(0, 0, 0, 0.6), 
            6px 6px 0px rgba(0, 0, 0, 0.3)`,
        fontFamily: Letras.textFont,
        marginBottom: "20px", // Separación entre el texto y el botón
    };

    const buttonStyle = {
        padding: "10px 20px",
        backgroundColor: "#76C893", // Verde vibrante
        color: "#ffffff",
        border: "none",
        borderRadius: "5px",
        fontSize: "1rem",
        cursor: "pointer",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
        transition: "background-color 0.3s ease",
    };

    const buttonHoverStyle = {
        backgroundColor: "#5DA381", // Color más oscuro en hover
    };

    return (
        <div style={bannerStyle}>
            {/* Superposición */}
            <div style={overlayStyle}></div>
            {/* Contenido */}
            <div style={contentStyle}>
                <div style={textStyle}>
                    Plantamos un árbol <br/>por  cada tallado que hacemos
                </div>
                <button
                    style={buttonStyle}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#76C893")}
                    onClick={() => alert("¡Gracias por tu interés!")} // Cambia esto a tu funcionalidad real
                >
                    Conoce más
                </button>
            </div>
        </div>
    );
};

export default Banner;
