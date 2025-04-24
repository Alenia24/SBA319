# Travel Agency API

This is a RESTful API for managing a travel agency system. You can **add**, **edit**, and **delete**:

- Trips
- Itenaries
- Reviews
- Passengers( Only accessable by admins which has not been implemented as yet)

---

## Features

- CRUD operations for Trips, Activities, Reviews, and Passengers
- JSON-based REST API

---

## Tech Stack

- **Backend:** Node.js / Express 
---

## Getting Started

### Prerequisites

- Node.js
- Postman or similar API testing tool

### Installation

```bash
git clone https://github.com/Alenia24/SBA318.git
npm install
```

### Running the Server
``` bash
npm start
```

### API Endpoints
# Trips
| Method        | Endpoint       |    Description             |
| ------------- |:--------------:| --------------------------:|
| GET           | /trips         | 	  Get all trips           |
| POST          | /trips         |  	Create a new trip       |
| GET           | /trips/:id     | 	  Get a single trip by id |
| PUT           | /trips/:id     |    Update a trip           |
| DELETE        | /trips/:id     |    Delete a trip           |

# Itenaries
| Method        | Endpoint           | Description                |
| ------------- |:------------------:| --------------------------:|
| GET           | /itenaries         | Get all itenaries          |
| POST          | /itenaries         | Create a new itenary       |
| GET           | /itenaries/:id     | Get a single itenary by id |
| PUT           | /itenaries/:id     | Update an itenary by id    |
| DELETE        | /itenaries/:id     | Delete an itenary by id    |

# Reviews
| Method        | Endpoint           |    Description                |
| ------------- |:------------------:| -----------------------------:|
| GET           | /reviews           | 	  Get all review             |
| POST          | /reviews           |  	Create a new review        |
| GET           | /reviews/:id       | 	  Get a single review by id  |
| PUT           | /reviews/:id       |    Update a review by id      |
| DELETE        | /reviews/:id       |    Delete a review by id      |

# Passengers
| Method        | Endpoint              |    Description                   |
| ------------- |:---------------------:| --------------------------------:|
| GET           | /passengers           | 	Get all passengers             |
| POST          | /passengers           |  	Create a new passenger         |
| GET           | /passengers/:id       | 	Get a single passenger by id   |
| PUT           | /passengers/:id       |   Update a passenger by id       |
| DELETE        | /passengers/:id       |   Delete a passenger by id       |

