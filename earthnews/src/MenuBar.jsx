import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import "./MenuBar.css";
import logo from '../public/img/planetpulselogo.png'; // Replace './logo.png' with the path to your logo file


const MenuBar = () => {


  const handleAboutClick = () => {
    // Function to handle About button click
    console.log("About clicked"); // Replace with your desired logic
    window.location.href = "https://docs.google.com/presentation/d/1LDB3gvV9cwCqZ-O7yDdkXeSpXPWxQ7MqTYXKUkgzP8g/edit?usp=sharing"; // Redirect to the About page
  }

  const handleLearnMore = () => {
    // Function to handle About button click
    console.log("Learn more clicked"); // Replace with your desired logic
    window.location.href = "https://count-us-in.com/"; // Redirect 
  }

  return (
    <AppBar
      className="menu-bar"
      position="absolute"
      color="transparent"
      elevation={0}
    >
      {/* Add style prop here */}
      <Toolbar>
        <div className="button-container">
          <Button
            className="menu-button"
            color="inherit"
            onClick={handleAboutClick}
          >
            About
          </Button>
          {/* Logo image */}
          <img src={logo} alt="Logo" className="menu-logo" /> 
          <Button
            className="menu-button"
            color="inherit"
            onClick={handleLearnMore}
          >
            Learn More
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;

