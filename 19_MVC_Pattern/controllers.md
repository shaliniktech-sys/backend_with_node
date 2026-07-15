# Controllers

Controller is the brain of MVC.

It receives requests.

Processes them.

Talks to Model.

Returns response.

---

Example

Client

↓

GET /users

↓

Controller

↓

Model

↓

Database

↓

Controller

↓

Response

---

Example

```js
const User = require("../models/userModel");

async function getUsers(req,res){

const users = await User.find();

res.json(users);

}

module.exports = {
getUsers
}
```

---

Controller should

Receive request

Validate data

Call model

Handle errors

Return response

---

Controller should NOT

Connect database

Define schema

Create routes

Those belong elsewhere.
