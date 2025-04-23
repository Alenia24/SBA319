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
