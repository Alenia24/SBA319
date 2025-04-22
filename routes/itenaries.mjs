import express from "express";
import Itenary from "../models/itenary.mjs";

const router = express.Router();

// Get all the itenaries
router.get("/", async (req, res) => {
  try {
    const itenaries = await Itenary.find();
    res.json(itenaries);
  } catch (err) {
    console.log(err);
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
    ]);
    res.redirect("/itenaries");
  } catch (err) {
    console.error(err);
  }
});

// GET an itenary by its id
router.get("/:id", async (req, res) => {
    try {
        const itenary = await Itenary.findById(req.params.id);

        res.json(itenary)
    } catch (err) {
        console.log(err);
    }
})

// POST Create a new itenary
router.post("/", async (req, res) => {
  try {
    await Itenary.create(req.body);
    res.redirect("/itenaries");
  } catch (err) {
    console.log(err);
  }
});


export default router;