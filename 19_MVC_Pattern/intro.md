# MVC Pattern in Node.js + MongoDB

## What is MVC?

MVC stands for

- Model
- View
- Controller

It is a design pattern used to organize code into separate parts.

Instead of writing everything inside one file (index.js), MVC divides responsibilities.

Imagine a restaurant.

Customer → Waiter → Chef → Food

Similarly,

User → Route → Controller → Model → MongoDB

Every part has its own job.

---

## Why do we need MVC?

Suppose your project grows.

Without MVC:

index.js

- Database connection
- Routes
- Business logic
- Validation
- HTML
- API

Everything becomes mixed together.

After 500-1000 lines,
finding bugs becomes difficult.

MVC solves this.

---

## Advantages

- Cleaner code
- Easier debugging
- Easy teamwork
- Easy maintenance
- Reusable code
- Better project organization

Most companies use MVC or a similar architecture.

---

## Real Example

Instagram

Model
↓

Stores users, posts, comments.

Controller
↓

Checks login, creates posts, deletes comments.

View
↓

Shows Instagram pages.

---

## MVC Components

Model

Responsible for:

- Database
- Schema
- CRUD Operations

Controller

Responsible for:

- Business Logic
- Processing Requests
- Calling Models

View

Responsible for:

- Displaying data

Routes

Responsible for:

- Deciding which controller should run.

---

## Flow

Client

↓

Route

↓

Controller

↓

Model

↓

MongoDB

↓

Controller

↓

Response

---

Without MVC

Everything inside one file.

With MVC

Every file has one responsibility.

This is called Separation of Concerns.
