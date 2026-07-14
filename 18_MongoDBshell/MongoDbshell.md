# MongoDB_Shell

In this lesson, we'll learn how to use the **MongoDB Shell (mongosh)** to interact directly with our MongoDB database.

MongoDB Shell allows us to:
- View databases
- Switch databases
- View collections
- Insert documents
- Find documents

---

# What is MongoDB Shell?

MongoDB Shell (`mongosh`) is a command-line interface (CLI) used to communicate directly with the MongoDB server.

Instead of using Express or Mongoose, we can execute MongoDB commands manually.

Think of it as talking directly to the database.

---

# 1. `show dbs`

## Syntax

```javascript
show dbs
```

## Purpose

Displays all databases available on the MongoDB server.

## Example

```javascript
show dbs
```

## Output

```text
admin
config
local
test
```

## Explanation

- `show` → Display information.
- `dbs` → Databases.

This command lists every database currently stored inside MongoDB.

---

# 2. `use test`

## Syntax

```javascript
use test
```

## Purpose

Switches to the **test** database.

## Example

```javascript
use test
```

## Output

```text
switched to db test
```

or

```text
already on db test
```

## Explanation

Before performing any operations, we must select the database we want to work with.

After executing:

```javascript
use test
```

every command will run inside the **test** database.

---

# 3. `show collections`

## Syntax

```javascript
show collections
```

## Purpose

Displays all collections inside the current database.

## Example

```javascript
show collections
```

## Output

```text
users
```

## Explanation

A **collection** is a group of documents.

It is similar to a **table** in SQL.

Here,

- Database → `test`
- Collection → `users`

---

# 4. `db.users.find({})`

## Syntax

```javascript
db.users.find({})
```

## Purpose

Displays every document inside the **users** collection.

## Example

```javascript
db.users.find({})
```

## Output

```javascript
{
    _id: ObjectId("6a563aaba18ce6c1a38c0251"),
    first_name: "Shalini",
    last_name: "Kumari",
    age: 19,
    email: "shalini.dev",
    job_title: "student",
    __v: 0
}
```

## Explanation

Let's break it down.

```javascript
db
```

Current database.

```javascript
users
```

Collection name.

```javascript
find()
```

Retrieves documents.

```javascript
{}
```

An empty filter.

It means:

> "Return every document in the collection."

### Examples

Find every user

```javascript
db.users.find({})
```

Find users whose age is 19

```javascript
db.users.find({
    age: 19
})
```

Find user whose first name is Shalini

```javascript
db.users.find({
    first_name: "Shalini"
})
```

---

# 5. `db.users.insert()`

## Syntax

```javascript
db.users.insert({
    first_name: "Prince",
    last_name: "Gupta",
    age: 20,
    email: "prince.dev",
    job_title: "student"
})
```

## Purpose

Inserts a new document into the **users** collection.

## Example

```javascript
db.users.insert({
    first_name: "Prince",
    last_name: "Gupta",
    age: 20,
    email: "prince.dev",
    job_title: "student"
})
```

## Output

```javascript
{
    acknowledged: true,
    insertedIds: {
        "0": ObjectId("6a563c42c5e421f8191c0179")
    }
}
```

## Explanation

MongoDB successfully inserts the document into the collection.

It also automatically creates a unique `_id` for every document.

---

# Why did MongoDB show a warning?

While executing:

```javascript
db.users.insert({...})
```

MongoDB displays:

```text
DeprecationWarning:
Collection.insert() is deprecated.
Use insertOne() or insertMany() instead.
```

## What does "deprecated" mean?

A deprecated feature is one that still works but is no longer recommended.

MongoDB now recommends using:

### Insert one document

```javascript
db.users.insertOne({
    first_name: "Prince",
    last_name: "Gupta",
    age: 20,
    email: "prince.dev",
    job_title: "student"
})
```

### Insert multiple documents

```javascript
db.users.insertMany([
    {
        first_name: "Rahul",
        age: 21
    },
    {
        first_name: "Priya",
        age: 20
    }
])
```

Although `insert()` still works, modern MongoDB applications use `insertOne()` and `insertMany()`.

---

# Summary

| Command | Description |
|----------|-------------|
| `show dbs` | Displays all databases. |
| `use test` | Switches to the `test` database. |
| `show collections` | Displays all collections in the current database. |
| `db.users.find({})` | Displays every document in the `users` collection. |
| `db.users.insert()` | Inserts a new document into the collection *(deprecated; use `insertOne()` instead).* |

---

# Key Takeaways

- MongoDB Shell allows us to interact directly with MongoDB.
- `show dbs` lists all databases.
- `use test` selects the database.
- `show collections` lists all collections inside the selected database.
- `db.users.find({})` retrieves all documents from the collection.
- `db.users.insert()` inserts a new document, but `insertOne()` is the modern and recommended method.
