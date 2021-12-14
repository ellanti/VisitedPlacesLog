import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import PlaceMarker from "../Marker/PlaceMarker";
import "./Map.css";

const Map = () => {
  const defaultPosition: LatLngExpression = [51.050407, 13.737262]; // Dresden position

  return (
    <div className="map_container">
      <LeafletMap center={defaultPosition} zoom={5}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.de/{z}/{x}/{y}.png"
        />
        <PlaceMarker />
      </LeafletMap>
    </div>
  );
};

export default Map;
