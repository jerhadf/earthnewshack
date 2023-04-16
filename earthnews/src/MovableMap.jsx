import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

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

const MovableMap = ({ markers, icon }) => {
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
          icon={icon} // add custom icons from the prop
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
