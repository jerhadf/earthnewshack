import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";
import React from "react";
import GoogleMapReact from 'google-map-react';
import GoogleMapReact from "google-map-react";
import Button from "@mui/material/Button";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function App() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  // functions from convex - for handling messages
  const messages = useQuery("listMessages") || [];

  const [newMessageText, setNewMessageText] = useState("");
  const sendMessage = useMutation("sendMessage");

  const [name] = useState(() => "User " + Math.floor(Math.random() * 10000));
  async function handleSendMessage(event) {
    event.preventDefault();
    setNewMessageText("");
    await sendMessage({ body: newMessageText, author: name });
  }

  // put functions for handling articles data and maps here

  // FRONTEND STARTS HERE - REACT COMPONENTS + HTML
  return (
    <main>
    <div className="container">
      <h1 className="title">EarthNews</h1>
      <div className="search-container">
        <input className="search-bar" type="text" placeholder="Search news..." />
        <button className="search-button">Search</button>
      </div>
      <h1>EarthNews</h1>
      <h2>
        EarthNews is a decentralized platform for climate news and AI-based
        content summarization & explanation.
      </h2>
      <div className="earth-news">
        {/* Header with EarthNews title and background image */}
        <header
          className="header"
          style={{ backgroundImage: `url(/path/to/your/image.jpg)` }}
        >
          <h1 className="title">EarthNews</h1>
        </header>
        {/* Section for map and search bar */}
        <main className="main-content">
          <YourMapComponent />
          {/* Search bar */}
          <input className="search-bar" type="text" placeholder="Search" />
          {/* Button from Material UI */}
          <div>
            <Button variant="contained">Hello World</Button>
          </div>
        </main>
      </div>

      {/* Deprecated - Messages Stuff - FROM CONVEX DEMO */}
      <p className="badge">
        <span>{name}</span>
      </p>
      <ul>
        {messages.map((message) => (
          <li key={message._id.toString()}>
            <span>{message.author}:</span>
            <span>{message.body}</span>
            <span>{new Date(message._creationTime).toLocaleTimeString()}</span>
          </li>
        ))}
      </ul>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43934475.96055831!2d63.33668226800676!3d47.77082869327741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x453c569a896724fb%3A0x1409fdf86611f613!2sRussia!5e0!3m2!1sen!2sus!4v1681587236497!5m2!1sen!2sus" width="1000" height="950" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <form onSubmit={handleSendMessage}>
         <input
           value={newMessageText}
           onChange={event => setNewMessageText(event.target.value)}
           placeholder="Write a message…"
         />
         <input type="submit" value="Send" disabled={!newMessageText} />
       </form>
      <form onSubmit={handleSendMessage}>
        <input
          value={newMessageText}
          onChange={(event) => setNewMessageText(event.target.value)}
          placeholder="Write a message…"
        />
        <input type="submit" value="Send" disabled={!newMessageText} />
      </form>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43934475.96055831!2d63.33668226800676!3d47.77082869327741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x453c569a896724fb%3A0x1409fdf86611f613!2sRussia!5e0!3m2!1sen!2sus!4v1681587236497!5m2!1sen!2sus"
        width="1000"
        height="950"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </main>
  );
}
