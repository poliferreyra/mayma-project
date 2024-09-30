import { GoogleMap as Map, useJsApiLoader } from "@react-google-maps/api";
import { FC } from "react";

import { Marker } from "@/components/googleMaps/Marker";

const containerStyle = {
  width: "100%",
  height: "200px",
  borderRadius: "15px",
  margin: "20px 0 20px",
};

interface LatLongProp {
  lat: number;
  lng: number;
}

interface GoogleMapProps {
  center?: LatLongProp;
  markers?:
    | {
        id: number;
        bussinessName?: string;
        fantasyName?: string;
        lat?: number;
        lng?: number;
      }[];
  styles?: { width: string; height: string };
}

// Coordenadas promedio BsAs - Santa Fe
const center = { lat: -33.1185, lng: -59.5408 };

const GoogleMap: FC<GoogleMapProps> = ({ markers, styles }) => {
  const mapContainerStyle = styles || containerStyle;

  const { VITE_GOOGLE_MAPS_API_KEY } = import.meta.env as Record<
    string,
    string
  >;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return null;

  return (
    <Map mapContainerStyle={mapContainerStyle} center={center} zoom={5}>
      {!!markers?.length &&
        markers.map((marker, i) => (
          <Marker key={`marker-${marker.id}-${i}`} entity={marker} />
        ))}
    </Map>
  );
};

export default GoogleMap;
