import React from "react";

const ContactForm = () => {
  const formStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "20px",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const inputStyles = {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #CCC",
  };

  const buttonStyles = {
    padding: "10px",
    fontSize: "1rem",
    backgroundColor: "#4A5D4E",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <form style={formStyles}>
      <input style={inputStyles} type="text" placeholder="Nombre" />
      <input style={inputStyles} type="email" placeholder="Correo electrónico" />
      <textarea style={inputStyles} rows="5" placeholder="Mensaje" />
      <button style={buttonStyles} type="submit">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
