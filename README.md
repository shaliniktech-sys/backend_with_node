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

---

## Getting Started

```bash
git clone https://github.com/shaliniktech-sys/backend_with_node.git
cd backend_with_node
npm install
npm run dev
```

Open [localhost:5000](http://localhost:5000) (override the port with `PORT` in `.env`).

Create a `.env` file in the root directory before running the server. See `.env.example` for the full list of required variables.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

For development with auto-restart on file changes:

```bash
npm run dev          # nodemon-powered dev server
npm start             # production start
```

---

## Tech Stack

| Category | Technologies |
|---|---|
| Runtime | Node.js (v18+) |
| Framework | Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Authentication | JWT, bcrypt |
| API Testing | Postman / Thunder Client |
| Environment Config | dotenv |

---

## Project Structure
backend_with_node/
├── controllers/ # Route handler logic
├── models/ # Mongoose schemas
├── routes/ # API route definitions
├── middlewares/ # Auth guards, error handling
├── config/ # DB connection & environment setup
├── .env.example
├── server.js
└── package.json

---

## API Reference

Base URL: `http://localhost:5000/api`

### Auth

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/auth/register` | Register a new user | No |
| POST | `/auth/login` | Login and receive a JWT | No |

### Users

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| GET | `/users/me` | Get logged-in user profile | Yes |
| PUT | `/users/me` | Update logged-in user profile | Yes |

Authenticated requests must include the token in the header:
Authorization: Bearer <your_jwt_token>

---

## Running Tests

```bash
npm test
```

*(Add test framework details here once configured — e.g. Jest, Mocha.)*

---

## Deployment

See the deployment guide for hosting options (Render, Railway, Vercel serverless, or a VPS with PM2 + Nginx).

---

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to open a pull request or file an issue.

---

## License

This project is licensed under the MIT License.

---

**Author:** Shalini
