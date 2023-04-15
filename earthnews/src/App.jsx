import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";
import React from "react";
import GoogleMapReact from 'google-map-react';
import {Text, StyleSheet} from "react-native-web";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function App() {

  
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

// import { Text } from "../../components";

const HomePagePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-coda items-center justify-start mx-auto pb-[475px] w-full">
        <div className="bg-bluegray_100 flex items-center justify-start p-[137px] md:px-10 sm:px-5 w-full">
          <Text className="font-normal mb-[11px] not-italic sm:text-[40px] md:text-[46px] text-[50px] text-black_900 text-left w-auto">
            EARTH NEWS
          </Text>
        </div>
      </div>
    </>
  );
};

  const messages = useQuery("listMessages") || [];

  const [newMessageText, setNewMessageText] = useState("");
  const sendMessage = useMutation("sendMessage");

  const [name] = useState(() => "User " + Math.floor(Math.random() * 10000));
  async function handleSendMessage(event) {
    event.preventDefault();
    setNewMessageText("");
    await sendMessage({ body: newMessageText, author: name });
  }
  return (
    <div className="container">
      <h1 className="title">EarthNews</h1>
      <div className="search-container">
        <input className="search-bar" type="text" placeholder="Search news..." />
        <button className="search-button">Search</button>
      </div>
    </div>)};

//     <div className="container">
//       <header className="header">
//         <h1 className="logo">EarthMaps</h1>
//         <nav className="nav">
//           {/* Add navigation links here */}
//           <a href="#about" className="nav-link">About</a>
//           <a href="#features" className="nav-link">Features</a>
//           <a href="#contact" className="nav-link">Contact</a>
//         </nav>
//       </header>
//       <section id="hero" className="hero">
//         <div className="hero-text">
//           <h2 className="hero-title">Discover the World with EarthMaps</h2>
//           <p className="hero-subtitle">Explore breathtaking maps of our planet</p>
//           <a href="#features" className="hero-cta">Learn More</a>
//         </div>
//         {/* Add hero image here */}
//         <img src="hero-image.jpg" alt="EarthMaps Hero" className="hero-image" />
//       </section>
//       <section id="about" className="about">
//         <h2 className="section-title">About EarthMaps</h2>
//         <p className="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere ipsum vel sem lacinia, ut tristique dolor laoreet. Pellentesque bibendum suscipit odio, id auctor nisl auctor et. Vestibulum finibus lacus nisl, non aliquet justo dignissim non. Nam tempus malesuada vestibulum.</p>
//         {/* Add about section content here */}
//       </section>
//       <section id="features" className="features">
//         <h2 className="section-title">Features</h2>
//         <ul className="features-list">
//           <li className="feature">
//             <h3 className="feature-title">Interactive Maps</h3>
//             <p className="feature-description">Explore detailed maps with zoom and pan features to discover new places and landmarks.</p>
//           </li>
//           <li className="feature">
//             <h3 className="feature-title">Real-time Weather</h3>
//             <p className="feature-description">Get up-to-date weather information for any location on the map.</p>
//           </li>
//           <li className="feature">
//             <h3 className="feature-title">Custom Markers</h3>
//             <p className="feature-description">Add your own markers to mark your favorite places or plan your trips.</p>
//           </li>
//         </ul>
//       </section>
//       <section id="contact" className="contact">
//         <h2 className="section-title">Contact Us</h2>
//         <p className="section-description">Have questions or feedback? We'd love to hear from you!</p>
//         {/* Add contact form or contact information here */}
//       </section>
//       <footer className="footer">
//         <p className="footer-text">© 2023 EarthMaps. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };
    // <main>
    //         <div className="bg-white_A700 flex font-coda items-center justify-start mx-auto pb-[475px] w-full">
    //     <div className="bg-bluegray_100 flex items-center justify-start p-[137px] md:px-10 sm:px-5 w-full">
    //       <Text className="font-normal mb-[11px] not-italic sm:text-[40px] md:text-[46px] text-[50px] text-black_900 text-left w-auto">
    //         EARTH NEWS
    //       </Text>
    //     </div>
    //   </div>
    //   {/* <div>
    //   <GoogleMapReact
    //     bootstrapURLKeys={{ key: "" }}
    //     defaultCenter={defaultProps.center}
    //     defaultZoom={defaultProps.zoom}
    //   >
    //     <AnyReactComponent
    //       lat={59.955413}
    //       lng={30.337844}
    //       text="My Marker"
    //     />
    //   </GoogleMapReact>
    // </div> */}
    //   <h1>EarthNews</h1>
    //   <p className="badge">
    //     <span>{name}</span>
    //   </p>
    //   <ul>
    //     {messages.map(message => (
    //       <li key={message._id.toString()}>
    //         <span>{message.author}:</span>
    //         <span>{message.body}</span>
    //         <span>{new Date(message._creationTime).toLocaleTimeString()}</span>
    //       </li>
    //     ))}
    //   </ul>
    //   <form onSubmit={handleSendMessage}>
    //     <input
    //       value={newMessageText}
    //       onChange={event => setNewMessageText(event.target.value)}
    //       placeholder="Write a message…"
    //     />
    //     <input type="submit" value="Send" disabled={!newMessageText} />
    //   </form>
    //   {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43934475.96055831!2d63.33668226800676!3d47.77082869327741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x453c569a896724fb%3A0x1409fdf86611f613!2sRussia!5e0!3m2!1sen!2sus!4v1681587236497!5m2!1sen!2sus" width="1000" height="950" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    //  */}
    // </main>
//   );
// }


