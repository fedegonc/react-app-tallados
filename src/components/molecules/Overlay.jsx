const Overlay = () => {
  return (
    <div className="overlay">
      <style jsx>{`
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1; /* Asegúrate de que no bloquee el botón */
        }
      `}</style>
    </div>
  );
};

export default Overlay;
