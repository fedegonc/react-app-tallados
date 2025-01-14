import React, { useState, useEffect } from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../molecules/Footer";

const MainTemplate = ({ children }) => {
  const navbarHeight = "70px"; // Ajusta según la altura del Navbar en su estado inicial
  const [visibleSections, setVisibleSections] = useState([]);

  const templateStyles = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#000",
    margin: 0,
    padding: 0,
  };

  const mainStyles = {
    flex: 1, // Permite que el contenido dinámico ocupe el espacio disponible
    paddingTop: navbarHeight, // Espaciado superior para evitar que el contenido quede oculto
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setVisibleSections((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    const sectionElements = document.querySelectorAll(".main-template-section");
    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div style={templateStyles}>
      {/* Navbar siempre visible */}
      <Navbar />

      {/* Contenido dinámico */}
      <main style={mainStyles}>
        {React.Children.map(children, (child, index) => (
          <div
            className="main-template-section"
            data-index={index}
            style={{
              opacity: visibleSections.includes(index) ? 1 : 0,
              transform: visibleSections.includes(index)
                ? "translateY(0)"
                : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            {child}
          </div>
        ))}
      </main>

      {/* Footer siempre visible */}
      <Footer />
    </div>
  );
};

export default MainTemplate;
