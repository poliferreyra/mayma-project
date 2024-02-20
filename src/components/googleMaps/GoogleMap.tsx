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

const GoogleMap: FC<GoogleMapProps> = ({ markers, styles, center }) => {
  const mapContainerStyle = styles || containerStyle;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBy82ADLecsVRhtSRl3U0eJrmkHGU19RK8",
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
