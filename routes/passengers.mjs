import express from "express";
import Passenger from "../models/passenger.mjs";

const router = express.Router();

// Get all the passengers
router.get("/", async (req, res) => {
  try {
    const filter = {};

    if (req.query.name) {
      filter.$text = { $search: req.query.name };
    }

    const passengers = await Passenger.find(filter);

    if (!passengers || passengers.length === 0) {
      return res.json("No Passengers found.");
    }
    res.json(passengers);
  } catch (err) {
    res.json(err.message);
  }
});

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
      {
        name: "Sophia Taylor",
        email: "sophia.taylor@example.com",
        telephone: "+1-555-7890",
        address: "123 Oak St, Boston, MA, USA",
        emergency_contact: {
          name: "James Taylor",
          relationship: "Brother",
          telephone: "+1-555-3456",
        },
        passport: "X9988776",
      },
      {
        name: "James Miller",
        email: "james.miller@example.com",
        telephone: "+1-555-8901",
        address: "456 Pine St, Austin, TX, USA",
        emergency_contact: {
          name: "Rebecca Miller",
          relationship: "Mother",
          telephone: "+1-555-1234",
        },
        passport: "P7766554",
      },
      {
        name: "Mia Wilson",
        email: "mia.wilson@example.com",
        telephone: "+1-555-9012",
        address: "321 Cedar St, Seattle, WA, USA",
        emergency_contact: {
          name: "John Wilson",
          relationship: "Father",
          telephone: "+1-555-2345",
        },
        passport: "X1122335",
      },
      {
        name: "Benjamin Davis",
        email: "ben.davis@example.com",
        telephone: "+1-555-0123",
        address: "654 Willow St, Chicago, IL, USA",
        emergency_contact: {
          name: "Emily Davis",
          relationship: "Sister",
          telephone: "+1-555-5678",
        },
        passport: "P2233445",
      },
      {
        name: "Chloe Garcia",
        email: "chloe.garcia@example.com",
        telephone: "+1-555-2345",
        address: "789 Maple St, Los Angeles, CA, USA",
        emergency_contact: {
          name: "David Garcia",
          relationship: "Husband",
          telephone: "+1-555-6789",
        },
        passport: "X9876542",
      },
      {
        name: "Daniel Martinez",
        email: "daniel.martinez@example.com",
        telephone: "+1-555-3456",
        address: "567 Oak St, Houston, TX, USA",
        emergency_contact: {
          name: "Carmen Martinez",
          relationship: "Mother",
          telephone: "+1-555-7890",
        },
        passport: "P9988776",
      },
      {
        name: "Ava Anderson",
        email: "ava.anderson@example.com",
        telephone: "+1-555-4567",
        address: "890 Pine St, San Diego, CA, USA",
        emergency_contact: {
          name: "Ethan Anderson",
          relationship: "Father",
          telephone: "+1-555-1230",
        },
        passport: "X6549872",
      },
      {
        name: "Ethan Thomas",
        email: "ethan.thomas@example.com",
        telephone: "+1-555-5678",
        address: "321 Cedar St, Dallas, TX, USA",
        emergency_contact: {
          name: "Rebecca Thomas",
          relationship: "Wife",
          telephone: "+1-555-8765",
        },
        passport: "P2233446",
      },
      {
        name: "Isabella Clark",
        email: "isabella.clark@example.com",
        telephone: "+1-555-6789",
        address: "987 Birch St, Phoenix, AZ, USA",
        emergency_contact: {
          name: "William Clark",
          relationship: "Brother",
          telephone: "+1-555-4321",
        },
        passport: "X9988779",
      },
      {
        name: "Lucas Harris",
        email: "lucas.harris@example.com",
        telephone: "+1-555-7890",
        address: "123 Oak St, Denver, CO, USA",
        emergency_contact: {
          name: "Olivia Harris",
          relationship: "Mother",
          telephone: "+1-555-3456",
        },
        passport: "P2233447",
      },
      {
        name: "Mason Robinson",
        email: "mason.robinson@example.com",
        telephone: "+1-555-8901",
        address: "654 Willow St, Miami, FL, USA",
        emergency_contact: {
          name: "Sophia Robinson",
          relationship: "Wife",
          telephone: "+1-555-7890",
        },
        passport: "X1122336",
      },
      {
        name: "Zoe Lewis",
        email: "zoe.lewis@example.com",
        telephone: "+1-555-9012",
        address: "321 Cedar St, Orlando, FL, USA",
        emergency_contact: {
          name: "Liam Lewis",
          relationship: "Brother",
          telephone: "+1-555-6789",
        },
        passport: "P9988777",
      },
      {
        name: "Eli Walker",
        email: "eli.walker@example.com",
        telephone: "+1-555-0123",
        address: "567 Oak St, Portland, OR, USA",
        emergency_contact: {
          name: "Sarah Walker",
          relationship: "Mother",
          telephone: "+1-555-2345",
        },
        passport: "X6543215",
      },
      {
        name: "Charlotte Lee",
        email: "charlotte.lee@example.com",
        telephone: "+1-555-1234",
        address: "432 Pine St, Atlanta, GA, USA",
        emergency_contact: {
          name: "Henry Lee",
          relationship: "Father",
          telephone: "+1-555-5678",
        },
        passport: "P2233448",
      },
    ]);
    res.redirect("/passengers");
  } catch (err) {
    res.json(err.message);
  }
});

// GET a passenger by its id
router.get("/:id", async (req, res) => {
  try {
    const passenger = await Passenger.findById(req.params.id);

    if (!passenger) {
      res.json({ message: "No passenger found." });
    }
    res.json(passenger);
  } catch (err) {
    res.json({ message: "Invalid passenger ID" });
  }
});

// DELETE a passenger by its id
router.delete("/:id", async (req, res) => {
  try {
    await Passenger.findByIdAndDelete(req.params.id);

    res.redirect("/passengers");
  } catch (err) {
    res.json({ message: "Invalid passenger ID" });
  }
});

// Update an existing passenger by id
router.put("/:id", async (req, res) => {
  try {
    await Passenger.findByIdAndUpdate(req.params.id, req.body);

    res.redirect("/passengers");
  } catch (err) {
    res.json({ message: "Invalid passenger ID" });
  }
});

// POST Create a new passenger
router.post("/", async (req, res) => {
  try {
    await Passenger.create(req.body);
    res.redirect("/passengers");
  } catch (err) {
    res.json(err.message);
  }
});

export default router;
