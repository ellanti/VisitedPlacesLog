type Place = {
  id: string;
  latitude: number;
  longitude: number;
  placeName: string;
  image: string;
};
let place1 = {
  id: "17.385044-78.486671",
  latitude: 51.083871349763044,
  longitude: 13.73231474430765,
  placeName: "Dresden",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/100130_150006_Dresden_Frauenkirche_winter_blue_sky-2.jpg/360px-100130_150006_Dresden_Frauenkirche_winter_blue_sky-2.jpg",
};

let visitedPlaces: Place[] = [];
visitedPlaces.push(place1);
export default visitedPlaces;
