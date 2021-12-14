import express from "express";

import {
  getAllVisitedPlaces,
  getPlaceDetails,
  addVisitedPlace,
  editVisitedPlace,
  deleteVisitedPlace,
} from "../controller/visitedplacesController";

const router = express.Router();

router
  .get("/visited", getAllVisitedPlaces)
  .get("/place/:id", getPlaceDetails)
  .post("/visited", addVisitedPlace)
  .put("/visited/:id", editVisitedPlace)
  .delete("/visited/:id", deleteVisitedPlace);

export default router;
