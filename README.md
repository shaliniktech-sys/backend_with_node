# Backend with Node.js

**A backend engineering implementation featuring REST APIs, JWT authentication, and MongoDB, structured using the MVC pattern.**

![Node](https://img.shields.io/badge/Node.js-v18%2B-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/Auth-JWT-black?logo=jsonwebtokens)
![License](https://img.shields.io/badge/License-MIT-blue)
![Last Commit](https://img.shields.io/github/last-commit/shaliniktech-sys/backend_with_node)
![Stars](https://img.shields.io/github/stars/shaliniktech-sys/backend_with_node?style=social)

---

## Overview

This repository implements core backend engineering concepts using **Node.js**, **Express**, **MongoDB**, and **JWT-based authentication**, structured with the **MVC (Model-View-Controller)** architecture for clean, maintainable code organization.

## Features

- JWT-based user authentication and authorization
- MVC architecture (Models, Controllers, Routes, Middleware)
- MongoDB integration with Mongoose for data modeling
- Secure password hashing with bcrypt
- Environment-based configuration
- Modular, scalable folder structure

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Authentication | JWT, bcrypt |

## Installation

```bash
git clone https://github.com/<your-username>/backend_with_node.git
cd backend_with_node
npm install
```

## Environment Setup

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Run

```bash
npm run dev
```

## API Reference

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/api/auth/register` | Register a new user | No |
| POST | `/api/auth/login` | Login and receive token | No |
| GET | `/api/users/me` | Get logged-in user profile | Yes |

## Project Structure
backend_with_node/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── config/
├── .env.example
├── server.js
└── package.json

---

### License · Documentation · Contributing

**Author:** Shalini
