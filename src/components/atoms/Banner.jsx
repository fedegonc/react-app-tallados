import React from 'react';

const Banner = () => {
    const bannerStyle = {
        width: "100%",
        height: "400px",
        backgroundImage: `url(${process.env.PUBLIC_URL}/static/img1.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: "20px",
        color: "#ffffff",
        fontSize: "2rem",
        fontWeight: "bold",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        marginTop: "0", // Asegúrate de que no haya margen superior
      };

  return (
    <div style={bannerStyle}>
      Welcome to the Banner!
    </div>
  );
};

export default Banner;
