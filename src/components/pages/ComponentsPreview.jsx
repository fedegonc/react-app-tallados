import React from "react";
import Button from "../components/atoms/Button";
import Colors from "../components/atoms/Colors";
import Description from "../components/atoms/Description";
import Image from "../components/atoms/Image";
import Logo from "../components/atoms/Logo";
import MenuButton from "../components/atoms/MenuButton";
import Navigation from "../components/atoms/Navigation";
import Title from "../components/atoms/Title";

const ComponentsPreview = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Components Preview</h1>
      
      <section>
        <h2>Button Component</h2>
        <Button />
      </section>

      <section>
        <h2>Colors Object</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          {Object.keys(Colors).map((color) => (
            <div
              key={color}
              style={{
                backgroundColor: Colors[color],
                width: "50px",
                height: "50px",
                border: "1px solid #000",
              }}
            >
              <span style={{ fontSize: "10px", color: "#FFF" }}>{color}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Description Component</h2>
        <Description />
      </section>

      <section>
        <h2>Image Component</h2>
        <Image />
      </section>

      <section>
        <h2>Logo Component</h2>
        <Logo />
      </section>

      <section>
        <h2>MenuButton Component</h2>
        <MenuButton />
      </section>

      <section>
        <h2>Navigation Component</h2>
        <Navigation />
      </section>

      <section>
        <h2>Title Component</h2>
        <Title />
      </section>
    </div>
  );
};

export default ComponentsPreview;
