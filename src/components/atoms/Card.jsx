import React from "react";
import Card from "../atoms/Card";
import projectsData from "../amots/CardsData"; // Archivo con datos de proyectos

const Proyects = () => {
    const containerStyle = {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
        backgroundColor: "#fff", // Fondo diferente si aplica
        padding: "40px 20px",
        flexWrap: "wrap",
        gap: "20px",
    };

    return (
        <div style={containerStyle}>
            {projectsData.map((project, index) => (
                <Card key={index} icon={project.icon} title={project.title} description={project.description} />
            ))}
        </div>
    );
};

export default Proyects;
