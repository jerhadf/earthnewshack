import React from "react";
import { Parallax } from "react-parallax";
import "./ParallaxHero.css";

// this is the custom component for the entire hero section
const ParallaxHero = ({ children }) => {
  const backgroundImage = "../public/img/wideangleearth.png"; // Replace with your image path

  return (
    <div className="hero-section">
      {/* Parallax section */}
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={backgroundImage}
        bgImageAlt="Earth News Background"
        strength={300}
        className="parallax-container"
      >
        <div style={{ height: "100vh" }} />
      </Parallax>
      
      {/* Content section */}
      <div className="hero-content">{children}</div>
    </div>
  );
};

export default ParallaxHero;
