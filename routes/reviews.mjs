import express from "express";
import Review from "../models/review.mjs";

const router = express.Router();

// Get all the reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    console.log(err);
  }
});

// SEED the route(database)
router.get("/seed", async (req, res) => {
  try {
    await Review.create([
      {
        name: "Olivia Carter",
        trip_name: "Scandinavian Northern Lights Quest",
        destination: "Tromsø, Norway",
        rating: 10,
        review:
          "A dream come true! The aurora borealis was even more stunning in person. Our guide was incredibly knowledgeable and made the trip magical.",
      },
      {
        name: "Sebastian Roberts",
        trip_name: "Moroccan Desert & Culture Tour",
        destination: "Marrakech, Merzouga, Fes – Morocco",
        rating: 9,
        review:
          "Riding camels into the Sahara at sunset was surreal. The markets were vibrant and full of life. A fantastic cultural immersion.",
      },
      {
        name: "Madeline Walker",
        trip_name: "New Zealand Adventure Escape",
        destination: "Queenstown, Rotorua, Fiordland – New Zealand",
        rating: 10,
        review:
          "Hands down the best trip I’ve ever taken. From bungee jumping to exploring glowworm caves — every moment was a thrill!",
      },
      {
        name: "Emma Davis",
        trip_name: "African Safari Expedition",
        destination: "Kenya & Tanzania",
        rating: 10,
        review:
          "Incredible experience! Seeing the 'Big Five' in the wild was unforgettable. The Serengeti and Ngorongoro Crater were highlights of the trip.",
      },
      {
        name: "James Miller",
        trip_name: "Mediterranean Coastal Escape",
        destination: "Spain, Italy, Greece",
        rating: 8,
        review:
          "Amazing mix of stunning coastlines, ancient ruins, and delicious food. Barcelona and Athens were fantastic, and I loved relaxing in the Mediterranean sun.",
      },
    ]);
    res.redirect("/reviews");
  } catch (err) {
    console.error(err);
  }
});

// GET a review by its id
router.get("/:id", async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);

        res.json(review)
    } catch (err) {
        console.log(err);
    }
})

// DELETE a review by its id
router.delete("/:id", async (req, res) => {
    try {
        await Review.findByIdAndDelete(req.params.id);

        res.redirect("/reviews")
    } catch (err) {
        console.log(err);
    }
})

// POST Create a new review 
router.post("/", async (req, res) => {
  try {
    await Review.create(req.body);
    res.redirect("/reviews");
  } catch (err) {
    console.log(err);
  }
});



export default router;
