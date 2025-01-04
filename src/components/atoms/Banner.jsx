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
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: "20px",
        color: "#ffffff",
        fontSize: "2.5rem", // Tamaño un poco mayor para destacar
        fontWeight: "bold",
        textShadow: `
            3px 3px 0px rgba(0, 0, 0, 0.6), 
            6px 6px 0px rgba(0, 0, 0, 0.3)`, // Sombra de bloque más notable
        fontFamily: Letras.textFont,
    };

    return (
        <div style={bannerStyle}>
            Plantamos un árbol por cada tallado que hacemos
        </div>
    );
};

export default Banner;
