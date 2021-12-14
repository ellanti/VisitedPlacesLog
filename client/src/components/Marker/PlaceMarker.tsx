import { Marker, useMapEvents } from "react-leaflet";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LeafletMouseEvent, LatLng } from "leaflet";
import { getLocationName } from "../../utils/locationName";
import { createPlace } from "../../utils/dataoperations";
import { fetchUrl } from "../../redux/visitedPlaces/vPAction";
import { RootState } from "../../redux/store";
import PopUp from "../Popup/PopUp";

const url = "/visited/";

function PlaceMarker() {
  const dispatch = useDispatch();
  const visitedPlacesState = useSelector(
    (state: RootState) => state.visitedPlaces
  );
  const { data } = visitedPlacesState;

  /* on every click on map try adding it to visited places
     does not add, when you click on water. Instead it gives an alert
  */
  useMapEvents({
    async click(e: LeafletMouseEvent) {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;
      const place = await getLocationName(lat, lng);
      if (place === "N/A") {
        alert("Cannot find place name! You might have not clicked on land! ");
      } else {
        const imgUrl = "N/A";
        const reqBody = {
          latitude: lat,
          longitude: lng,
          placeName: place,
          image: imgUrl,
        };
        createPlace(url, reqBody).then(() => {
          dispatch(fetchUrl(url));
        });
      }
    },
  });

  useEffect(() => {
    dispatch(fetchUrl(url));
  }, [dispatch]);

  return (
    <div>
      {data.map((place) => (
        <Marker
          key={place.id}
          position={new LatLng(place.latitude, place.longitude)}
        >
          <PopUp
            placeId={place.id}
            placeName={place.placeName}
            img={place.image}
          ></PopUp>
        </Marker>
      ))}
    </div>
  );
}

export default PlaceMarker;
