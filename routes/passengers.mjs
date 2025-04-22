import express from "express";
import Passenger from "../models/passenger.mjs";

const router = express.Router();

// Get all the passengers
router.get("/", async (req, res) => {
  try {
    const passengers = await Passenger.find();
    res.json(passengers);
  } catch (err) {
    console.log(err);
  }
});

export default router;
