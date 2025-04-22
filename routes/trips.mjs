import express from "express";
import Trip from "../models/trip.mjs"

const router = express.Router();

router.get("/", async (req, res) => {
    res.send("Welcome to trip route!")
})

export default router;
