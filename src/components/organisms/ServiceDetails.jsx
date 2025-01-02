import React from "react";

const ServiceDetails = () => {
  const containerStyles = {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const itemStyles = {
    padding: "10px",
    backgroundColor: "#F5F5F5",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const services = [
    "Tallado personalizado para muebles",
    "Diseños únicos en madera tallada",
    "Restauración y mantenimiento artesanal",
  ];

  return (
    <div style={containerStyles}>
      {services.map((service, index) => (
        <div key={index} style={itemStyles}>
          {service}
        </div>
      ))}
    </div>
  );
};

export default ServiceDetails;
