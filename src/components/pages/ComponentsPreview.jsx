import React from "react";
import Colors from "../atoms/Colors"; // Asegúrate de que esta ruta sea correcta

const ComponentsPreview = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Components Preview</h1>

      <section>
        <h2>Colors Object</h2>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {Object.keys(Colors).map((colorKey) => (
            <div
              key={colorKey}
              style={{
                backgroundColor: Colors[colorKey],
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                color: Colors[colorKey] === "#FFFFFF" ? "#000" : "#FFF",
                fontSize: "10px",
                fontWeight: "bold",
                border: "1px solid #000",
              }}
            >
              {colorKey}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ComponentsPreview;
