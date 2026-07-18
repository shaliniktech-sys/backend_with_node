# Complete MVC Example

Folder Structure is as follows:

```
project/

controllers/
userController.js

models/
userModel.js

routes/
userRoutes.js

index.js
```

---

## index.js

```js
const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/test");

app.use(express.json());

app.use("/users",userRoutes);

app.listen(8000);
```

---

## userModel.js

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
first_name:String,
last_name:String,
email:String
});

module.exports = mongoose.model("User",userSchema);
```

---

## userController.js

```js
const User = require("../models/userModel");

async function getUsers(req,res){

const users = await User.find();

res.json(users);

}

module.exports = {
getUsers
};
```

---

## userRoutes.js

```js
const express = require("express");

const router = express.Router();

const {getUsers} = require("../controllers/userController");

router.get("/",getUsers);

module.exports = router;
```

---

## Final Flow

Browser

↓

GET /users

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

Browser

---

## Interview Question

Q. Why MVC?

Answer

MVC separates application into independent components.

Model handles database.

Controller handles business logic.

View displays data.

This makes projects clean, scalable, reusable, and easier to maintain.

---

## What You've Learned

- What MVC is
- Why MVC is used
- Project structure
- Models
- Controllers
- Routes
- Views
- Complete request flow
- Building a basic MVC application
