import React from "react";

// imports for convex
import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";

// custom components
import MovableMap from "./MovableMap.jsx";
import ParallaxHero from "./ParallaxHero";

// material UI components
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

// other react imports
import { useRef } from "react";

// marker locations for the movable map demo
// populate this from the back end in the future
const markers = [
  {
    id: 1,
    lat: 51.505,
    lng: -0.09,
    title: "Marker 1",
    description: "This is marker 1",
  },
  {
    id: 2,
    lat: 51.51,
    lng: -0.1,
    title: "Marker 2",
    description: "This is marker 2",
  },
];

export default function App() {
  // ======================================== FUNCTIONS ========================================
  // functions from convex - for handling messages - deleted
  const messages = useQuery("listMessages") || [];

  // function for handling search from search bar
  const handleSearch = (event, value) => {
    // Perform search action here based on the value
    console.log("Search value:", value);
  };

  // handling scroll to map
  // useRef is a React Hook that allows you to create a mutable ref object that can be attached to a DOM element
  const mapRef = useRef(); // ref for the map
  const scrollToMap = () => {
    mapRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // put functions for handling articles data and maps here

  // ======================================== FRONTEND STARTS HERE ========================================
  return (
    <div className="app" role="main">
      {/* Hero section with background image */}
      <ParallaxHero>
        <h1 className="title">EARTH NEWS</h1>
        <p className="desc">
          A climate news aggregator, summarizer, explainer, and global
          visualizer
        </p>
        <div className="search-bar">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 500,
              maxWidth: "100%",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search for a location to explore news on Planet Earth"
              inputProps={{ "aria-label": "search for a location" }}
            />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={scrollToMap} // on click, scroll to the map
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
      </ParallaxHero>

      {/* Main content - map */}
      <main className="content">
        <div className="map-container" ref={mapRef}>
          <MovableMap markers={markers} />
        </div>
      </main>
    </div>
  );
}
