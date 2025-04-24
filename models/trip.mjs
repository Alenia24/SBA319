import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    destination: { type: String, required: true },
    start: { type: String, required: true },
    end: { type: String, required: true },
    price: { type: Number, required: true },
},{ versionKey: false });


tripSchema.index({ price: -1 });   

const Trip = mongoose.model("Trip", tripSchema);

export default Trip;
