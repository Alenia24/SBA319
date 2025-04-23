import express from "express";
import Trip from "../models/trip.mjs";

const router = express.Router();

// Get all the trips
router.get("/", async (req, res) => {
  try {
    const filter = {};

    if (req.query.price) {
      filter.price = { $lte: Number(req.query.price) };
    }

    if (req.query.name) {
      filter.name = { $regex: req.query.name, $options: "i" };
    }

    if (req.query.destination) {
      filter.destination = { $regex: req.query.destination, $options: "i" };
    }

    const trips = await Trip.find(filter);
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
      {
        name: "Mystical Egypt Tour",
        destination: "Cairo, Luxor, Giza",
        start: "2025-06-01",
        end: "2025-06-10",
        price: 2500,
      },
      {
        name: "Great Australian Outback",
        destination: "Sydney, Melbourne, Alice Springs",
        start: "2025-07-05",
        end: "2025-07-15",
        price: 2900,
      },
      {
        name: "South American Adventure",
        destination: "Brazil, Argentina, Peru",
        start: "2025-08-01",
        end: "2025-08-14",
        price: 3200,
      },
      {
        name: "Italian Romance",
        destination: "Rome, Venice, Florence",
        start: "2025-09-01",
        end: "2025-09-10",
        price: 2700,
      },
      {
        name: "Scandinavian Wonders",
        destination: "Stockholm, Oslo, Copenhagen",
        start: "2025-10-01",
        end: "2025-10-10",
        price: 3100,
      },
      {
        name: "Safari in Kenya",
        destination: "Nairobi, Maasai Mara, Amboseli",
        start: "2025-11-01",
        end: "2025-11-10",
        price: 3500,
      },
      {
        name: "New Zealand Ultimate Tour",
        destination: "Auckland, Queenstown, Rotorua",
        start: "2025-12-01",
        end: "2025-12-10",
        price: 3300,
      },
      {
        name: "Majestic India Journey",
        destination: "Delhi, Agra, Jaipur",
        start: "2025-12-15",
        end: "2025-12-25",
        price: 2200,
      },
      {
        name: "Bali Beach & Culture",
        destination: "Ubud, Seminyak, Nusa Dua",
        start: "2025-06-15",
        end: "2025-06-22",
        price: 2400,
      },
      {
        name: "Alps Adventure",
        destination: "Switzerland, France, Austria",
        start: "2025-07-01",
        end: "2025-07-12",
        price: 3500,
      },
      {
        name: "The Ultimate Iceland Expedition",
        destination: "Reykjavik, Golden Circle, Blue Lagoon",
        start: "2025-08-05",
        end: "2025-08-12",
        price: 3100,
      },
      {
        name: "Asian Heritage Tour",
        destination: "Vietnam, Cambodia, Thailand",
        start: "2025-09-01",
        end: "2025-09-15",
        price: 2700,
      },
      {
        name: "Egyptian Nile Cruise",
        destination: "Cairo, Luxor, Aswan",
        start: "2025-10-01",
        end: "2025-10-10",
        price: 3200,
      },
      {
        name: "African Wonders",
        destination: "South Africa, Botswana, Zimbabwe",
        start: "2025-11-10",
        end: "2025-11-20",
        price: 4000,
      },
      {
        name: "Tropical Fiji Islands",
        destination: "Fiji, Coral Coast, Mamanuca Islands",
        start: "2025-12-01",
        end: "2025-12-10",
        price: 2500,
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

    res.json(trip);
  } catch (err) {
    console.log(err);
  }
});

// DELETE a trip by its id
router.delete("/:id", async (req, res) => {
  try {
    await Trip.findByIdAndDelete(req.params.id);

    res.redirect("/trips");
  } catch (err) {
    console.log(err);
  }
});

// Update an existing trip by id
router.put("/:id", async (req, res) => {
  try {
    await Trip.findByIdAndUpdate(req.params.id, req.body);

    res.redirect("/trips");
  } catch (err) {
    console.log(err);
  }
});

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
