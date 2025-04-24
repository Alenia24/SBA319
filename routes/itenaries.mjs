import express from "express";
import Itenary from "../models/itenary.mjs";

const router = express.Router();

// Get all the itenaries
router.get("/", async (req, res, next) => {
  try {
    const filter = {};

    if (req.query.name) {
      filter.name = { $regex: req.query.name, $options: "i" };
    }

    if (req.query.location) {
      filter.location = { $regex: req.query.location, $options: "i" };
    }

    const itenaries = await Itenary.find(filter);

    if (!itenaries || itenaries.length === 0) {
      return res.json("No itenaries found.");
    }

    res.json(itenaries);
  } catch (err) {
    res.json({ message: "Not found." });
  }
});

// SEED the route(database)
router.get("/seed", async (req, res) => {
  try {
    await Itenary.create([
      {
        name: "Snorkeling in Nusa Penida",
        duration: 4,
        location: "Nusa Penida, Bali",
        description:
          "Explore the clear waters and vibrant coral reefs of Nusa Penida. Swim alongside colorful fish and sea turtles in one of Bali's most famous snorkeling spots.",
      },
      {
        name: "Wine Tasting in Bordeaux",
        duration: 2,
        location: "Bordeaux, France",
        description:
          "Indulge in a wine tasting experience in Bordeaux, one of the world’s premier wine regions. Sample exquisite wines paired with local delicacies.",
      },
      {
        name: "Visit the Meiji Shrine",
        duration: 3,
        location: "Shibuya, Tokyo",
        description:
          "Start your day with a visit to the Meiji Shrine, one of Tokyo’s most important Shinto shrines. Take a peaceful walk through the surrounding forested area.",
      },
      {
        name: "Wildlife Viewing",
        duration: 3,
        location: "Denali National Park, Alaska",
        description:
          "Venture into the Alaskan wilderness to spot wildlife such as bears, moose, wolves, and eagles in their natural habitat.",
      },
      {
        name: "Sunset Cruise",
        duration: 3,
        location: "Aruba Waters",
        description:
          "Set sail on a relaxing sunset cruise along the coast of Aruba, enjoying stunning views of the sun setting over the Caribbean Sea.",
      },
      {
        name: "Hiking the Inca Trail",
        duration: 5,
        location: "Machu Picchu, Peru",
        description:
          "Embark on a challenging and scenic hike along the ancient Inca Trail, leading you to the breathtaking ruins of Machu Picchu, with panoramic views of the Andes.",
      },
      {
        name: "Hot Air Balloon Ride over Cappadocia",
        duration: 2,
        location: "Cappadocia, Turkey",
        description:
          "Float above the surreal landscape of Cappadocia in a hot air balloon, enjoying views of its unique fairy chimneys and ancient cave dwellings at sunrise.",
      },
      {
        name: "Cooking Class in Tuscany",
        duration: 4,
        location: "Florence, Italy",
        description:
          "Join a cooking class in the heart of Tuscany, learning how to prepare traditional Italian dishes using fresh, local ingredients, followed by a delicious meal.",
      },
      {
        name: "Kayaking in Halong Bay",
        duration: 3,
        location: "Halong Bay, Vietnam",
        description:
          "Paddle through the emerald waters of Halong Bay, navigating between towering limestone karsts and enjoying the serenity of this UNESCO World Heritage site.",
      },
      {
        name: "Northern Lights Viewing in Iceland",
        duration: 3,
        location: "Reykjavik, Iceland",
        description:
          "Experience the magical northern lights in Iceland. Venture into the countryside, away from city lights, to see the aurora borealis dance across the winter sky.",
      },
      {
        name: "Safari in Kruger National Park",
        duration: 5,
        location: "Kruger National Park, South Africa",
        description:
          "Embark on an unforgettable safari in Kruger National Park, where you'll have the chance to spot the Big Five: lions, elephants, leopards, buffalo, and rhinos.",
      },
      {
        name: "Paragliding in Interlaken",
        duration: 2,
        location: "Interlaken, Switzerland",
        description:
          "Soar above the stunning Swiss Alps with a tandem paragliding experience in Interlaken, taking in breathtaking views of snow-capped mountains and crystal-clear lakes.",
      },
      {
        name: "Snorkeling at the Great Barrier Reef",
        duration: 4,
        location: "Great Barrier Reef, Australia",
        description:
          "Dive into the clear waters of the Great Barrier Reef, one of the world’s most famous underwater ecosystems, where you can see vibrant coral and diverse marine life.",
      },
      {
        name: "Cycling Through Amsterdam",
        duration: 3,
        location: "Amsterdam, Netherlands",
        description:
          "Take a leisurely bike ride through the charming streets of Amsterdam, exploring its canals, iconic bridges, and historic landmarks at your own pace.",
      },
      {
        name: "Machu Picchu Sunrise Tour",
        duration: 4,
        location: "Machu Picchu, Peru",
        description:
          "Get an early start and witness the sunrise over Machu Picchu. Watch as the mist lifts to reveal the ancient citadel in its full glory.",
      },
      {
        name: "Mount Fuji Climb",
        duration: 6,
        location: "Mount Fuji, Japan",
        description:
          "Embark on a challenging yet rewarding trek to the summit of Mount Fuji, Japan’s tallest peak, where you'll be rewarded with panoramic views of the surrounding region.",
      },
      {
        name: "Cultural Walking Tour in Kyoto",
        duration: 3,
        location: "Kyoto, Japan",
        description:
          "Discover Kyoto’s rich cultural heritage as you walk through historic temples, tranquil gardens, and ancient streets that have remained unchanged for centuries.",
      },
      {
        name: "Ziplining in Costa Rica",
        duration: 4,
        location: "Monteverde, Costa Rica",
        description:
          "Experience the thrill of ziplining through the lush rainforest canopy in Monteverde, with stunning views of the surrounding mountains and wildlife.",
      },
      {
        name: "Desert Safari in Dubai",
        duration: 4,
        location: "Dubai, UAE",
        description:
          "Take a thrilling desert safari in Dubai, riding through the golden dunes, watching a traditional belly dance performance, and enjoying a delicious barbecue dinner under the stars.",
      },
      {
        name: "Island Hopping in the Philippines",
        duration: 6,
        location: "Palawan, Philippines",
        description:
          "Explore the pristine beaches, hidden lagoons, and crystal-clear waters of Palawan’s islands, with opportunities for snorkeling, swimming, and relaxing in paradise.",
      },
    ]);
    res.redirect("/itenaries");
  } catch (err) {
    res.json(err.message);
  }
});

// GET an itenary by its id
router.get("/:id", async (req, res, next) => {
  try {
    const itenary = await Itenary.findById(req.params.id);

    if (!itenary) {
      res.json({ message: "No Itenary found" });
    }
    res.json(itenary);
  } catch (err) {
    res.json({ message: "Invalid itenary ID" });
  }
});

// DELETE an itenary by its id
router.delete("/:id", async (req, res) => {
  try {
    await Itenary.findByIdAndDelete(req.params.id);

    res.redirect("/itenaries");
  } catch (err) {
    res.json({ message: "Invalid itenary ID" });
  }
});

// Update an existing itenary by id
router.put("/:id", async (req, res) => {
  try {
    await Itenary.findByIdAndUpdate(req.params.id, req.body);

    res.redirect("/itenaries");
  } catch (err) {
    res.json({ message: "Invalid itenary ID" });
  }
});

// POST Create a new itenary
router.post("/", async (req, res) => {
  try {
    await Itenary.create(req.body);
    res.redirect("/itenaries");
  } catch (err) {
    res.json(err.message);
  }
});

export default router;
