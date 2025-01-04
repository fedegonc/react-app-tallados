import React from "react";
import MainTemplate from "../templates/MainTemplate";
import MainTitle from "../atoms/MainTitle";
import ContactForm from "../organisms/ContactForm";

const Banner = () => {
  const bannerStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${process.env.PUBLIC_URL}/static/img1.jpeg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "flex-start", // Texto alineado a la izquierda
    alignItems: "center",
    paddingLeft: "20px", // Separación del borde izquierdo
    color: "#ffffff",
    fontSize: "2rem",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
  };

  return (
    <div style={bannerStyle}>
      Welcome to the Banner!
    </div>
  );
};

const HomePage = () => {
  return (
    <MainTemplate>
      {/* Banner debajo del Navbar */}
      <Banner />

      {/* Contenido principal 
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <MainTitle />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>*/}
    </MainTemplate>
  );
};

export default HomePage;
