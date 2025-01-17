import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const modalStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    color: '#FFF',
    padding: '20px',
    borderRadius: '8px',
    zIndex: 1000,
    width: '300px',
    textAlign: 'center',
  };

  const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  };

  const closeButtonStyles = {
    marginTop: '10px',
    padding: '8px 16px',
    backgroundColor: '#f00',
    color: '#FFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <>
      <div style={overlayStyles} onClick={onClose}></div>
      <div style={modalStyles}>
        {children}
        <button style={closeButtonStyles} onClick={onClose}>
          Cerrar
        </button>
      </div>
    </>
  );
};

export default Modal;
