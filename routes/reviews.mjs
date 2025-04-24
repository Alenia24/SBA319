import express from "express";
import Review from "../models/review.mjs";

const router = express.Router();

// Get all the reviews
router.get("/", async (req, res) => {
  try {
    const filter = {};

    if (req.query.trip_name) {
      filter.trip_name = { $regex: req.query.trip_name, $options: "i" };
    }

    if (req.query.destination) {
      filter.destination = { $regex: req.query.destination, $options: "i" };
    }
    if (req.query.rating) {
      filter.rating = Number(req.query.rating);
    }

    const reviews = await Review.find(filter);

    if (!reviews || reviews.length === 0) {
      return res.json("No reviews found.");
    }
    res.json(reviews);
  } catch (err) {
    res.json(err.message);
  }
});

// SEED the route(database)
router.get("/seed", async (req, res) => {
  try {
    await Review.create([
      {
        name: "Olivia Carter",
        trip_name: "Scandinavian Northern Lights Quest",
        destination: "Tromsø, Norway",
        rating: 10,
        review:
          "A dream come true! The aurora borealis was even more stunning in person. Our guide was incredibly knowledgeable and made the trip magical.",
      },
      {
        name: "Sebastian Roberts",
        trip_name: "Moroccan Desert & Culture Tour",
        destination: "Marrakech, Merzouga, Fes – Morocco",
        rating: 9,
        review:
          "Riding camels into the Sahara at sunset was surreal. The markets were vibrant and full of life. A fantastic cultural immersion.",
      },
      {
        name: "Madeline Walker",
        trip_name: "New Zealand Adventure Escape",
        destination: "Queenstown, Rotorua, Fiordland – New Zealand",
        rating: 10,
        review:
          "Hands down the best trip I’ve ever taken. From bungee jumping to exploring glowworm caves — every moment was a thrill!",
      },
      {
        name: "Emma Davis",
        trip_name: "African Safari Expedition",
        destination: "Kenya & Tanzania",
        rating: 10,
        review:
          "Incredible experience! Seeing the 'Big Five' in the wild was unforgettable. The Serengeti and Ngorongoro Crater were highlights of the trip.",
      },
      {
        name: "James Miller",
        trip_name: "Mediterranean Coastal Escape",
        destination: "Spain, Italy, Greece",
        rating: 8,
        review:
          "Amazing mix of stunning coastlines, ancient ruins, and delicious food. Barcelona and Athens were fantastic, and I loved relaxing in the Mediterranean sun.",
      },
      {
        name: "Sophia Taylor",
        trip_name: "Japanese Culture & Cuisine Journey",
        destination: "Tokyo, Kyoto, Osaka",
        rating: 9,
        review:
          "An immersive cultural experience! The food was exceptional, and exploring ancient temples in Kyoto was unforgettable. Highly recommend the sushi class in Tokyo!",
      },
      {
        name: "Liam Scott",
        trip_name: "Australian Outback Adventure",
        destination: "Alice Springs, Uluru, Kings Canyon – Australia",
        rating: 10,
        review:
          "The outback was mesmerizing, with stunning sunsets over Uluru. The camping experience was amazing, and our guide was top-notch!",
      },
      {
        name: "Chloe Johnson",
        trip_name: "Peruvian Amazon Exploration",
        destination: "Iquitos, Puerto Maldonado – Peru",
        rating: 8,
        review:
          "A truly wild adventure. The rainforest was stunning, and the wildlife was beyond expectations. The boat trips along the river were especially peaceful.",
      },
      {
        name: "David Thompson",
        trip_name: "Icelandic Volcanoes & Glaciers Expedition",
        destination: "Reykjavik, Vik, Jökulsárlón – Iceland",
        rating: 9,
        review:
          "The landscapes were straight out of a dream. Hiking on glaciers and exploring volcanic craters was a bucket list experience. Highly recommend this trip!",
      },
      {
        name: "Charlotte Lewis",
        trip_name: "South American Wonders",
        destination: "Machu Picchu, Buenos Aires, Rio de Janeiro",
        rating: 10,
        review:
          "From the Inca ruins to the vibrant streets of Buenos Aires and Rio, this trip was full of highlights. The culture and history were beyond fascinating!",
      },
      {
        name: "William Brown",
        trip_name: "Egyptian Adventure & Nile Cruise",
        destination: "Cairo, Luxor, Aswan – Egypt",
        rating: 10,
        review:
          "A truly magical experience. The pyramids were more incredible in person, and the Nile cruise was a serene way to explore ancient Egypt.",
      },
      {
        name: "Isabella Martinez",
        trip_name: "Thailand Temples & Beaches Tour",
        destination: "Bangkok, Chiang Mai, Phuket – Thailand",
        rating: 9,
        review:
          "I loved the perfect blend of culture and relaxation. The temples in Chiang Mai were awe-inspiring, and the beaches in Phuket were absolutely breathtaking!",
      },
      {
        name: "Lucas Harris",
        trip_name: "Canadian Rockies Wilderness Expedition",
        destination: "Banff, Lake Louise, Jasper – Canada",
        rating: 10,
        review:
          "The mountains were even more stunning in person, with turquoise lakes and towering peaks. A true nature lover’s dream. I can’t wait to go back!",
      },
      {
        name: "Ava Wilson",
        trip_name: "Bali Wellness & Relaxation Retreat",
        destination: "Ubud, Nusa Dua – Bali",
        rating: 9,
        review:
          "This was the perfect escape. The yoga and spa sessions were incredibly relaxing, and Bali’s peaceful vibe helped me recharge. Ubud’s rice terraces are stunning!",
      },
      {
        name: "Mason Robinson",
        trip_name: "Vietnam & Cambodia Heritage Tour",
        destination: "Hanoi, Halong Bay, Siem Reap – Vietnam, Cambodia",
        rating: 8,
        review:
          "The temples of Angkor Wat were jaw-dropping, and Halong Bay’s limestone cliffs were otherworldly. A fantastic mix of culture and natural beauty.",
      },
      {
        name: "Madeline Wilson",
        trip_name: "European Christmas Markets Tour",
        destination: "Germany, Austria, Switzerland",
        rating: 9,
        review:
          "This Christmas tour was magical. The markets in Munich and Vienna were full of holiday cheer, and the snowy streets of Zurich were like something out of a fairy tale.",
      },
      {
        name: "Jack Carter",
        trip_name: "New Zealand Wilderness Expedition",
        destination: "Auckland, Queenstown, Milford Sound – New Zealand",
        rating: 10,
        review:
          "A breathtaking experience from start to finish. The hiking in Fiordland National Park and the scenic flight over Milford Sound were truly unforgettable.",
      },
      {
        name: "Grace Evans",
        trip_name: "Italian Lakes & Alps Adventure",
        destination: "Lake Como, Dolomites – Italy",
        rating: 9,
        review:
          "A stunning mix of natural beauty and charm. The boat ride on Lake Como was serene, and the mountain hikes in the Dolomites were challenging but rewarding.",
      },
      {
        name: "Ethan James",
        trip_name: "Patagonian Adventure",
        destination: "Torres del Paine, Ushuaia – Argentina, Chile",
        rating: 9,
        review:
          "The landscapes were out of this world. Glaciers, lakes, and rugged mountains – this trip was perfect for those who love outdoor adventure!",
      },
      {
        name: "Zoe Green",
        trip_name: "Spanish Wine & Culinary Tour",
        destination: "Madrid, Barcelona, La Rioja – Spain",
        rating: 8,
        review:
          "An amazing mix of great food, wine, and culture. Barcelona was full of surprises, and the wine tours in La Rioja were a real highlight.",
      },
      {
        name: "Henry Clark",
        trip_name: "Polar Bear Safari & Northern Lights",
        destination: "Churchill, Manitoba – Canada",
        rating: 10,
        review:
          "An epic adventure! We saw polar bears up close and experienced the incredible northern lights. The guides were so knowledgeable and made the trip even more memorable.",
      },
    ]);
    res.redirect("/reviews");
  } catch (err) {
    res.json(err.message);
  }
});

// GET a review by its id
router.get("/:id", async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      res.json({ message: "No review found" });
    }

    res.json(review);
  } catch (err) {
    res.json({ message: "Invalid review ID" });
  }
});

// DELETE a review by its id
router.delete("/:id", async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);

    res.redirect("/reviews");
  } catch (err) {
    res.json({ message: "Invalid review ID" });
  }
});

// Update an existing review by id
router.put("/:id", async (req, res) => {
  try {
    await Review.findByIdAndUpdate(req.params.id, req.body);

    res.redirect("/reviews");
  } catch (err) {
    res.json({ message: "Invalid review ID" });
  }
});

// POST Create a new review
router.post("/", async (req, res) => {
  try {
    await Review.create(req.body);
    res.redirect("/reviews");
  } catch (err) {
    res.json(err.message);
  }
});

export default router;
