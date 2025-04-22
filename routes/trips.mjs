import express from "express";
import Trip from "../models/trip.mjs";

const router = express.Router();

// Get all the trips
router.get("/", async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (err) {
    console.log(err);
  }
});



export default router;
