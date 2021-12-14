import axios from "axios";
import { Place } from "../types/Placetype";

//getAllplaces
export async function getAllPlaces(url = ""): Promise<Place[]> {
  const response = await axios.get(url);
  return response.data;
}
//getPlaceInfo
export async function getPlaceInfo(url = "") {
  const response = await axios.get(url);
  return response.data;
}
//create Visited place
export async function createPlace(url = "", data = {}) {
  const response = await axios.post(url, data);
  return response.data;
}

// Edit Visited place
export async function editPlace(url = "", data = {}) {
  const response = await axios.put(url, data);
  return response.data;
}

//Delete Visitedplace
export async function deletePlace(url = "") {
  const response = await axios.delete(url);
  return response.data;
}
