import React from "react";
import { MapContainer, TileLayer} from "react-leaflet";
import classes from "./StaticMap.module.css"
import "leaflet/dist/leaflet.css";

export default function StaticMap({title}) {
  const position = [33.749, -84.388]; // Atlanta, GA coordinates

  return (
    <div className={classes.map}>
      {title && <p>{title}</p>}
      <MapContainer
        center={position}
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: "150px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* marker and popup components are broken */}
      </MapContainer>
    </div>
  );
}
