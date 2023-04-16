import React from "react";

// imports for convex
import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";

// custom components
import MovableMap from "./MovableMap.jsx";
import EarthSearch from "./EarthSearch";

// material UI components
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

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

  // put functions for handling articles data and maps here

  // ======================================== FRONTEND STARTS HERE ========================================
  return (
    <div className="app" role="main">
      {/* Hero section */}
      <div className="hero">
        <div className="earth-news">
          {/* Header with EarthNews title and background image */}
          {/* Design ideas: 
          Parallax effect
          Complex gradient + image
          Memphis design 
           */}
          <h1 className="title">EARTH NEWS</h1>
          <p className="desc">
            A climate news aggregator, summarizer, explainer, and global
            visualizer
          </p>
        </div>
      </div>

      {/* Main content - map & search bar */}
      <main className="content">
        {/* Search bar for climate news */}
        <div className="search-bar">
          <EarthSearch
            id="earth-search"
            freeSolo={true}
            disableClearable
            // onInputChange={handleSearch}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Climate News"
                margin="normal"
                variant="outlined"
                InputProps={{ ...params.InputProps, type: "search" }}
              />
            )}
          />
        </div>
        {/* <YourMapComponent /> */}
        <MovableMap markers={markers} />
      </main>
    </div>
  );
}
