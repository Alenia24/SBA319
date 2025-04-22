import mongoose from "mongoose";

const itenarySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    duration: { type: Number, required: true },
    locationation: { type: String, required: true },
    description: { type: String, required: true },
  },
  { versionKey: false }
);

const Itenary = mongoose.model("Itenary", itenarySchema);

export default Itenary;
