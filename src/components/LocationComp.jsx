import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for missing marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// 🧭 Set your office location (example: Karachi)
// const officeCoordinates = [25.017846, 67.108125]; // [latitude, longitude]25°01'41.8"N 67°07'17.9"E
// const officeCoordinates = [25.028375029628958, 67.12148959889487]; // [latitude, longitude]25°01'41.8"N 67°07'17.9"E

const OfficeMap = ({address, title, officeCoordinates,scrollWheelZoom,dragging,zoomControl, _style}) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-lg leafleft-bottom leaflet-right ${_style ? _style : 'md:h-[500px] h-[300px] w-full '}`}>
      <MapContainer
        center={officeCoordinates}
        zoom={15}
        scrollWheelZoom={scrollWheelZoom}  // disable scroll zoom
        doubleClickZoom={true}  // disable double-click zoom
        dragging={dragging}         // disable map dragging
        zoomControl={zoomControl}      // hide zoom controls
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={officeCoordinates}>
          <Popup>
            <strong>{title}</strong>
            <br />
            {address}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default OfficeMap;
