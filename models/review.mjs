import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    trip_name: { type: String, required: true },
    destination: { type: String, required: true },
    rating: { type: Number, required: true },
    review: { type: String, required: true },
  },
  { versionKey: false }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;