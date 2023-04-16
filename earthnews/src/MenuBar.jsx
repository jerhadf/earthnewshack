import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import "./MenuBar.css";
import logo from '../public/img/planetpulselogo.png'; // Replace './logo.png' with the path to your logo file

const MenuBar = () => {
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
            onClick={() => console.log("About clicked")}
          >
            About
          </Button>
          {/* Logo image */}
          <img src={logo} alt="Logo" className="menu-logo" /> 
          <Button
            className="menu-button"
            color="inherit"
            onClick={() => console.log("Learn More clicked")}
          >
            Learn More
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;
