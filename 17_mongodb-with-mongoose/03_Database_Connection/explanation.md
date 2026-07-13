# Database Connection

```javascript
const mongoose = require("mongoose");
```

Imports the Mongoose package.

---

```javascript
mongoose.connect(...)
```

Creates a connection between Node.js and MongoDB.

---

Connection URL

```text
mongodb://127.0.0.1:27017/test
```

Breakdown

mongodb://

Protocol

127.0.0.1

Local Computer

27017

Default MongoDB Port

test

Database Name

---

`.then()`

Runs when connection is successful.

---

`.catch()`

Runs when connection fails.
