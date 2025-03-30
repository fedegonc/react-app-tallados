import React, { useState, useEffect } from "react";

// Hook personalizado para estilos responsivos
const useResponsiveStyles = (isHovered) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return {
        fontFamily: "'Alkatra', sans-serif", // Fuente añadida directamente
        fontWeight: "500",
        fontSize: isMobile ? "1.5rem" : "2rem", // Tamaño dinámico según la pantalla
        color: isHovered ? "#fff" : "#eee",
        backgroundColor: isHovered ? "#555" : "transparent",
        padding: isMobile ? "3px 8px" : "5px 10px",
        letterSpacing: isMobile ? "2px" : "3px",
        transition: "all 0.3s ease",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start", // Alinea el contenido a la izquierda
        borderRadius: "2px",
    };
};

const Logo = () => {
    const [isHovered, setIsHovered] = useState(false);
    const styles = useResponsiveStyles(isHovered);

    return (
        <div
            style={styles}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img 
                src="/static/logo_2.png" 
                alt="Logo" 
                style={{ 
                    width: '50px', 
                    height: '50px', 
                    marginRight: '10px' 
                }} 
            />
            El Guía del Tallado
        </div>
    );
};

export default Logo;
