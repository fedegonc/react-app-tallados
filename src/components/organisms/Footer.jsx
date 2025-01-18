import React, { useState } from 'react';
import Modal from '../molecules/Modal';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const footerStyles = {
    padding: "10px",
    textAlign: "center",
    fontSize: "0.9rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    backdropFilter: "blur(1px)",
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    color: "rgba(200, 200, 200, 0.9)",
    transition: "all 0.3s ease",
    height: "70px",
  };

  return (
    <>
      <footer style={footerStyles}>
        <p onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer' }}>
          © 2025  Provider by Vercel-React code by FG
        </p>
      </footer>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>Este es el contenido del modal</p>
      </Modal>
    </>
  );
};

export default Footer;
