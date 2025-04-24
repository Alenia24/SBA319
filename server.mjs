import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import trips from "./routes/trips.mjs"
import itenaries from "./routes/itenaries.mjs"
import passengers from "./routes/passengers.mjs";
import reviews from "./routes/reviews.mjs"

const app = express();
const port = process.env.PORT || 3000;

//for body parsing
app.use(express.urlencoded({ extended:true}));
app.use(express.json());

app.use("/trips", trips)
app.use("/itenaries", itenaries)
app.use("/passengers", passengers);
app.use("/reviews", reviews)

// Mongoose Connection
mongoose.connect(process.env.ATLAS_URI);
mongoose.connection.once("open", () => {
  console.log("Connected to mongoDB");
});

app.get("/", (req, res) => {
    res.send("Welcome to the API.")
})

// 404 Middleware
app.use((req, res) => {
  res.status(404);
  res.json("Resource Not Found");
});

// App.listen
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})
