import { text } from "express";
import mongoose from "mongoose";

const emergency_contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  relationship: { type: String, required: true },
  telephone: { type: String, required: true },
});

const passengerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    telephone: { type: String, required: true },
    address: { type: String, required: true },
    emergency_contact: { type: emergency_contactSchema, required: true},
    passport: { type: String, required: true },
  },
  { versionKey: false }
);

passengerSchema.index({ name: text });   

const Passenger = mongoose.model("Passenger", passengerSchema);

export default Passenger;