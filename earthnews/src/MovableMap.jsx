import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import greenLeafIcon from "./assets/leaf_green.png";

// Fix the Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// make green leaf icon extension of L.Icon
var LeafIcon = L.Icon.extend({
  options: {
    iconUrl: greenLeafIcon,
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [19, 47], // Reduced size
    shadowSize: [10, 15], // Reduced size
    iconAnchor: [9, 47], // Adjusted to match the new icon size
    shadowAnchor: [2, 15], // Adjusted to match the new shadow size
    popupAnchor: [-1, -38], // Adjusted to match the new icon size
  },
});

// Create an instance of the green leaf icon
var greenIcon = new LeafIcon();

const MovableMap = ({ markers }) => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  return (
    <MapContainer
      className="MovableMap"
      center={[-3.4, -60.6]} // The MapContainer starts zoomed into the Amazon Rainforest
      zoom={3}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          icon={greenIcon} // pass in the greenIcon class
          position={[marker.lat, marker.lng]}
          eventHandlers={{
            click: () => {
              setSelectedMarker(marker);
            },
          }}
        />
      ))}
      {selectedMarker && (
        <Popup
          position={[selectedMarker.lat, selectedMarker.lng]}
          onClose={() => setSelectedMarker(null)}
        >
          <div>
            <h2>{selectedMarker.title}</h2>
            <p>{selectedMarker.description}</p>
          </div>
        </Popup>
      )}
    </MapContainer>
  );
};

export default MovableMap;
