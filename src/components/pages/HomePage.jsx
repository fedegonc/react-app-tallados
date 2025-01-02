import React from "react";
import MainTemplate from "../templates/MainTemplate";
import MainTitle from "../atoms/MainTitle";
import ContactForm from "../organisms/ContactForm";

const HomePage = () => {
  return (
    <MainTemplate
      leftContent={<MainTitle />}
      rightContent={<ContactForm />}
    />
  );
};

export default HomePage;
