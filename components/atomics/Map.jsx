import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"

const Map = ({ lat, long }) => {
  return (
    <MapContainer
      center={[lat, long]}
      zoom={16}
      className="!h-96 !w-full !rounded-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  )
}

export default Map
