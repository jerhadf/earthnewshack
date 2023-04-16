import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";
import React from "react";
import MovableMap from "./MovableMap.jsx";

// marker locations for the movable map demo
const markers = [
  { id: 1, lat: 51.505, lng: -0.09, title: "Marker 1", description: "This is marker 1" },
  { id: 2, lat: 51.51, lng: -0.1, title: "Marker 2", description: "This is marker 2" },
];


export default function App() {
  // functions from convex - for handling messages - deleted 
  const messages = useQuery("listMessages") || [];

  // put functions for handling articles data and maps here

  // FRONTEND STARTS HERE - REACT COMPONENTS + HTML
  return (
    <main>
      <div className="earth-news">
        {/* Header with EarthNews title and background image */}
        {/* <header
          className="header"
          style={{ backgroundImage: "earthnews/img/americasspace.png" }}
        >
          <h1 className="title">EarthNews</h1>
        </header> */}

        {/* Section for content - map and search bar */}
        <main className="main-content">
          {/* Search bar */}
          {/* <div className="search-container">
            <input
              className="search-bar"
              type="text"
              placeholder="Search news..."
            />
            <button className="search-button">Search</button>
          </div> */}
          {/* <input className="search-bar" type="text" placeholder="Search" /> */}
          {/* Button from Material UI */}

          {/* <YourMapComponent /> */}
          <MovableMap markers={markers} />
        </main>
      </div>
    </main>
  );
}
