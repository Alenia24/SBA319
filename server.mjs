import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Mongoose Connection
mongoose.connect(process.env.ATLAS_URI);
mongoose.connection.once("open", () => {
  console.log("Connected to mongoDB");
});

app.get("/", (req, res) => {
    res.send("Welcome to the API.")
})

// App.listen
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})
