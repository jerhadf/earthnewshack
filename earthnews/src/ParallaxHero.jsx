import React from "react";
import { Parallax } from "react-parallax";
import "./ParallaxHero.css";
import MenuBar from "./MenuBar";
import backgroundImage from "./assets/wideangleearth.png";

// this is the custom component for the entire hero section
const ParallaxHero = ({ children }) => {
  // wide angle image of earth from space -- generated by Jeremy with Midjourney v5
  // const backgroundImage = "../public/img/wideangleearth.png"; // Replace with your image path

  // vector art of a green jungle landscape with mountains -- generated by Jeremy with Midjourney v5
  // const backgroundImage = "../public/img/greenjungle.png"; // Replace with your image path

  // vector art of polar landscape -- generated by Jeremy with Midjourney v5
  // const backgroundImage = "../public/img/polarvector.png"; // Replace with your image path

   // vector art of Baker Library landscape with trees -- generated by Jeremy with Midjourney v5
  // const backgroundImage = "../public/img/baker_trees_view.png"; // Replace with your image path

  return (
    <div className="hero-section">
      {/* Transparent menu bar at the top */}
      <MenuBar />
      
      {/* Parallax section */}
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={backgroundImage}
        bgImageAlt="Planet Pulse Background"
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
