import React from "react";
import MainTemplate from "../templates/MainTemplate";
import MainTitle from "../atoms/MainTitle";
import ContactForm from "../organisms/ContactForm";
import Banner from "../atoms/Banner"; // Importa el componente Banner

const HomePage = () => {
  return (
    <>
      {/* Banner */}
      <Banner />
      
      {/* Main Content */}
      <MainTemplate
        leftContent={<MainTitle />}
        rightContent={<ContactForm />}
      />
    </>
  );
};

export default HomePage;
