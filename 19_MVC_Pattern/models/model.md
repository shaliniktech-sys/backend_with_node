# Models

Model talks directly to MongoDB.

It represents a collection.

Example

Users Collection

↓

Model

↓

MongoDB

---

## Example

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String
});

module.exports = mongoose.model("User", userSchema);
```

---

## Explanation

mongoose.Schema()

Creates schema.

mongoose.model()

Creates model.

User

↓

Collection becomes

users

Automatically.

---

## What Model does

Create user

Find user

Update user

Delete user

---

## Examples

Create

User.create()

Find

User.find()

Find One

User.findOne()

Update

User.findByIdAndUpdate()

Delete

User.findByIdAndDelete()

Everything related to Mongodb stays inside Model .
