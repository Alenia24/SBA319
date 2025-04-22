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
    res.redirect("/trips");
  } catch (err) {
    console.error(err);
  }
});

// GET a trip by its id
router.get("/:id", async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id);

        res.json(trip)
    } catch (err) {
        console.log(err);
    }
})

// DELETE a trip by its id
router.delete("/:id", async (req, res) => {
    try {
        await Trip.findByIdAndDelete(req.params.id);

        res.redirect("/trips")
    } catch (err) {
        console.log(err);
    }
})

// Update an existing trip by id
router.put("/:id", async (req, res) => {
    try {
        await Trip.findByIdAndUpdate(req.params.id, req.body)

        res.redirect("/trips");
    } catch(err) {
        console.log(err);
    }
})



// POST Create a new trip 
router.post("/", async (req, res) => {
  try {
    await Trip.create(req.body);
    res.redirect("/trips");
  } catch (err) {
    console.log(err);
  }
});

export default router;
