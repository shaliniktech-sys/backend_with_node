# Project Structure

A basic MVC project looks like this.

```
project/

│
├── controllers/
│      userController.js
│
├── models/
│      userModel.js
│
├── routes/
│      userRoutes.js
│
├── views/
│
├── index.js
│
├── package.json
│
└── .gitignore
```

---

## controllers/

Contains all business logic.

Example

Create user

Delete user

Update user

Find user

---

## models/

Contains MongoDB schemas.

Example

User Schema

Product Schema

Order Schema

---

## routes/

Contains URLs.

Example

GET /users

POST /users

DELETE /users/:id

---

## views/

Contains HTML or EJS files.

If making only APIs,
views may remain empty.

---

## index.js

Main file.

Responsibilities

- Connect MongoDB
- Load Routes
- Start Server

Nothing else.

---

## Why this structure?

Imagine 100 files.

Without folders

Everything mixed.

With folders

Easy to locate files.

Need schema?

Go models.

Need route?

Go routes.

Need logic?

Go controllers.
