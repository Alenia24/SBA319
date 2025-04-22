import express from "express";
import Passenger from "../models/passenger.mjs";

const router = express.Router();

// Get all the passengers
// router.get("/", async (req, res) => {
//   try {
//     const passengers = await Passenger.find();
//     res.json(passengers);
//   } catch (err) {
//     console.log(err);
//   }
// });

// SEED the route(database)
router.get("/seed", async (req, res) => {
  try {
    await Passenger.create([
      {
        name: "Sarah Smith",
        email: "sarah.smith@example.com",
        telephone: "+1-555-2345",
        address: "456 Elm St, Fairbanks, AK, USA",
        emergency_contact: {
          name: "Mike Smith",
          relationship: "Brother",
          telephone: "+1-555-6789",
        },
        passport: "X2345678",
      },
      {
        name: "Carlos Garcia",
        email: "carlos.garcia@example.com",
        telephone: "+1-555-3456",
        address: "789 Oak St, Lima, Peru",
        emergency_contact: {
          name: "Maria Garcia",
          relationship: "Mother",
          telephone: "+51-555-7890",
        },
        passport: "P9876543",
      },
      {
        name: "Emily Johnson",
        email: "emily.johnson@example.com",
        telephone: "+1-555-4567",
        address: "321 Pine St, Miami, FL, USA",
        emergency_contact: {
          name: "David Johnson",
          relationship: "Father",
          telephone: "+1-555-1230",
        },
        passport: "X6543210",
      },
      {
        name: "William Brown",
        email: "will.brown@example.com",
        telephone: "+1-555-5678",
        address: "222 Maple St, New York, NY, USA",
        emergency_contact: {
          name: "Laura Brown",
          relationship: "Wife",
          telephone: "+1-555-8765",
        },
        passport: "X1122334",
      },
      {
        name: "Olivia White",
        email: "olivia.white@example.com",
        telephone: "+1-555-6789",
        address: "987 Birch St, San Francisco, CA, USA",
        emergency_contact: {
          name: "John White",
          relationship: "Father",
          telephone: "+1-555-2345",
        },
        passport: "P5566778",
      },
    ]);
    res.redirect("/passengers");
  } catch (err) {
    console.error(err);
  }
});

// GET a passenger by its id
router.get("/:id", async (req, res) => {
    try {
        const passenger = await Passenger.findById(req.params.id);

        res.json(passenger)
    } catch (err) {
        console.log(err);
    }
})

// DELETE a passenger by its id
router.delete("/:id", async (req, res) => {
    try {
        await Passenger.findByIdAndDelete(req.params.id);

        res.redirect("/passengers")
    } catch (err) {
        console.log(err);
    }
})

// Update an existing passenger by id
router.put("/:id", async (req, res) => {
    try {
        await Passenger.findByIdAndUpdate(req.params.id, req.body)

        res.redirect("/passengers");
    } catch(err) {
        console.log(err);
    }
})

// POST Create a new passenger
router.post("/", async (req, res) => {
  try {
    await Passenger.create(req.body);
    res.redirect("/passengers");
  } catch (err) {
    console.log(err);
  }
});

export default router;
