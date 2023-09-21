

// import { useLoadScript,GoogleMap  } from "@react-google-maps/api";
// import { useMemo } from "react";

// // import Map from "../components/map";

// export default function Home() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyCGLln8lKHCSWL3repHu9cUpDX5l98DHgk",
//     libraries: ["places"],
//   });
//   const center= useMemo(()=>({lat:24.80498,lng:92.77359}),[]);
//   if (!isLoaded) return <div>Loading...</div>;
//   return  (
    
//     <div>
//         <GoogleMap zoom={10} center={center} mapContainerClassName="map-Container"></GoogleMap>
//     </div>
// );
// }

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import "leaflet/dist/leaflet.css";
import './Map.css';
// import MarkerClusterGroup from "react-leaflet-cluster";
import { useDispatch, useSelector } from "react-redux";
import { getAllAgencyAsync, selectAllAgency } from "./agencySlice";
import { useEffect } from "react";

export default function Map() {

    const customIcon = new Icon({
        // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
        iconUrl: require("./location.png"),
        iconSize: [38, 38] // size of the icon
      });
      const markers = [
        {
          geocode: [24.80498, 92.77359],
          popUp: "Hello, I am pop up 1"
        },
        {
          geocode: [24.82619, 92.80031],
          popUp: "Hello, I am pop up 2"
        },
        {
          geocode: [24.82371, 92.79774],
          popUp: "Hello, I am pop up 3"
        }
      ];
      const dispatch= useDispatch();
      useEffect(()=>{
        dispatch(getAllAgencyAsync());

},[dispatch]);

      const agencies = useSelector(selectAllAgency);
      console.log(agencies);
   return (
    <>
    <div>
      
    </div>
      {agencies && <MapContainer center={[24.80498, 92.77359]} zoom={13}>
        {/* OPEN STREEN MAPS TILES */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />


        {/* Mapping through the markers */}
       {/* {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))} */}
       {agencies.map((marker) => (
          <Marker position={marker.coordinates} icon={customIcon}>
            <Popup>{marker.deptName}</Popup>
          </Marker>
        ))}

        {/* Hard coded markers */}
        {/* <Marker position={[51.505, -0.09]} icon={customIcon}>
          <Popup>This is popup 1</Popup>
        </Marker>
        <Marker position={[51.504, -0.1]} icon={customIcon}>
          <Popup>This is popup 2</Popup>
        </Marker>
        <Marker position={[51.5, -0.09]} icon={customIcon}>
          <Popup>This is popup 3</Popup>
        </Marker>
       */}
      
       </MapContainer>}
       </>
    )}