import { GoogleMap, LoadScript } from "@react-google-maps/api";

const buenosAiresCoords = {
  lat: -34.6037,
  lng: -58.3816,
};
export const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBy82ADLecsVRhtSRl3U0eJrmkHGU19RK8">
      <GoogleMap
        center={buenosAiresCoords} // Centra el mapa en Buenos Aires
        zoom={9} // Ajusta el nivel de zoom según sea necesario
        mapContainerStyle={{
          width: "100%",
          height: "200px",
          borderRadius: "15px",
          marginTop: "30px",
        }} // Establece el estilo del contenedor del mapa
      ></GoogleMap>
    </LoadScript>
  );
};
