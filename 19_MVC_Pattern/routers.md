# Routes

Routes connect URLs to controllers.

Example

User enters

/users

Route decides

Run getUsers()

---

Example

```js
const express = require("express");

const router = express.Router();

const {
getUsers
} = require("../controllers/userController");

router.get("/",getUsers);

module.exports = router;
```

---

Now

index.js

```js
const userRoutes = require("./routes/userRoutes");

app.use("/users",userRoutes);
```

Request

/users

↓

userRoutes

↓

getUsers()

---

Benefits

Cleaner index.js

Easy to manage hundreds of routes.
