"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
interface Props {
  position: any;
  center: any ;
  children: React.ReactNode;
}
const Map = ({ position, center, children }: Props) => {
  return (
    <>
    <MapContainer
      className=''
      center={center}
      zoom={14}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Set Coffee</Popup>
      </Marker>
    </MapContainer>
    <div className=''>{children}</div>
  </>
  );
};

export default Map;
