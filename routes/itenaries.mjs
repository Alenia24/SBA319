import express from "express";
import Itenary from "../models/itenary.mjs";

const router = express.Router();

// Get all the trips
router.get("/", async (req, res) => {
  try {
    const itenaries = await Itenary.find();
    res.json(itenaries);
  } catch (err) {
    console.log(err);
  }
});

export default router;