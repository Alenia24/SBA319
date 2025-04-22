import express from "express";
import Itenary from "../models/itenary.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
    res.send("Welcome to itenaries route!")
})

export default router;