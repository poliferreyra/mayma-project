import { GoogleMap, LoadScript } from "@react-google-maps/api";

interface MapProps {
  markups: { lat: number; lng: number };
}
export const Map: React.FC<MapProps> = ({ markups }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBy82ADLecsVRhtSRl3U0eJrmkHGU19RK8">
      <GoogleMap
        center={markups}
        zoom={9}
        mapContainerStyle={{
          width: "100%",
          height: "200px",
          borderRadius: "15px",
          margin: "30px 0 30px",
        }}
      ></GoogleMap>
    </LoadScript>
  );
};
