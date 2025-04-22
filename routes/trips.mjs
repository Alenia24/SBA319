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

// SEED the route(database)
router.get("/seed", async (req, res) => {
  try {
    await Trip.create([
      {
        name: "Tropical Escape",
        destination: "Bali, Indonesia",
        start: "2025-06-15",
        end: "2025-06-25",
        price: 2200,
      },
      {
        name: "European Road Trip",
        destination: "France, Italy, Germany",
        start: "2025-07-01",
        end: "2025-07-14",
        price: 3200,
      },
      {
        name: "Japan Adventure",
        destination: "Tokyo, Kyoto, Osaka",
        start: "2025-08-10",
        end: "2025-08-20",
        price: 2800,
      },
      {
        name: "Alaskan Wilderness Expedition",
        destination: "Anchorage, Denali National Park",
        start: "2025-09-01",
        end: "2025-09-07",
        price: 3500,
      },
      {
        name: "Caribbean Beach Retreat",
        destination: "Aruba",
        start: "2025-11-01",
        end: "2025-11-07",
        price: 2800,
      },
    ]);
    res.redirect("/fruits");
  } catch (error) {
    console.error(error);
  }
});

export default router;
