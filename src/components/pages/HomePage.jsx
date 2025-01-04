import React from "react";
import MainTemplate from "../templates/MainTemplate";
import Banner from "../atoms/Banner";





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
