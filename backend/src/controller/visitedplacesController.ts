import { Request, Response } from "express";
import visitedPlaces from "../data/visitedPlacesData";

export const getAllVisitedPlaces = (req: Request, res: Response) => {
  res.json(visitedPlaces);
};

export const getPlaceDetails = (req: Request, res: Response) => {
  const placeId = req.params.id;
  const place = findPlaceById(placeId);
  res.status(200).json(place);
};

export const addVisitedPlace = (req: Request, res: Response) => {
  const newPlace = req.body;
  console.log(newPlace);
  const id = "id" + newPlace.latitude + "-" + newPlace.longitude;
  const place = findPlaceById(id);
  if (!place) {
    newPlace.id = id;
    visitedPlaces.push(newPlace);
  }
  res.status(200).json(newPlace);
};

export const editVisitedPlace = (req: Request, res: Response) => {
  const placeId = req.params.id;
  const place = findPlaceById(placeId);
  if (place) {
    const { name, image } = req.body;
    place.placeName = name;
    place.image = image;
    res.status(200).send("Edit successful");
  } else {
    res.status(200).send("Place does not exist");
  }
};

export const deleteVisitedPlace = (req: Request, res: Response) => {
  const placeId = req.params.id;
  const placeIndex = findPlaceIndexById(placeId);
  visitedPlaces.splice(placeIndex, 1);
  res.status(200).send("Delete successful");
};

const findPlaceById = (placeId: string) => {
  return visitedPlaces.find((place) => place.id === placeId);
};

const findPlaceIndexById = (placeId: string) => {
  return visitedPlaces.findIndex((place) => place.id === placeId);
};
