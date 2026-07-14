# Mongoose Models

## Creating Our First Model

```javascript
const User = mongoose.model("User", userSchema);
```

This line creates a **Model** from the schema we created earlier.

Before understanding this line, let's quickly revise what a Schema is.

A **Schema** only defines the structure (rules) of our documents.

Example:

```javascript
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    age: Number
});
```

This schema says:

- Every user should have a `firstName`
- Every user should have a `lastName`
- Every user should have an `email`
- Every user should have an `age`

However, a Schema **cannot directly save data** into MongoDB.

It is only a blueprint.

---

# Real-Life Analogy

Imagine you want to build a house.

```
Blueprint
    │
    ▼
Builder
    │
    ▼
Real House
```

The **blueprint** tells how the house should look.

The **builder** uses the blueprint to actually build the house.

Similarly,

```
Schema
    │
    ▼
Model
    │
    ▼
MongoDB Document
```

- Schema = Blueprint
- Model = Builder
- Document = Real Data stored in MongoDB

Without a Model, the Schema cannot communicate with MongoDB.

---

# Understanding Every Part

```javascript
const User = mongoose.model("User", userSchema);
```

Let's understand every word.

---

## 1. `const`

```javascript
const User = ...
```

`const` creates a variable.

Here, the variable name is `User`.

This variable will store the **Model**.

We use `const` because we usually don't change the Model after creating it.

---

## 2. `User`

```javascript
const User = ...
```

`User` is the name of the variable that stores the Model.

Notice that it starts with a **capital letter**.

This is a naming convention in Mongoose.

Examples:

```javascript
const User = ...
const Student = ...
const Product = ...
const Employee = ...
```

Although JavaScript allows lowercase names, using PascalCase (first letter capital) for Models is the standard practice because a Model behaves like a constructor.

---

## 3. `mongoose.model()`

```javascript
mongoose.model(...)
```

Earlier, we learned that `mongoose` is a library.

It provides many features.

```
mongoose
│
├── connect()
├── Schema
├── model()
├── Types
├── connection
└── many more...
```

`model()` is another function provided by Mongoose.

Its job is to create a **Model** using a Schema.

---

## 4. `"User"`

```javascript
mongoose.model("User", userSchema)
```

The first argument is the **Model Name**.

Here,

```javascript
"User"
```

is a **String**.

It tells Mongoose:

> "Create a Model named User."

Notice that `"User"` is inside quotes because it is a string.

---

## 5. `userSchema`

```javascript
mongoose.model("User", userSchema)
```

The second argument is the Schema we created earlier.

Notice that it is **not inside quotes**.

Why?

Because `userSchema` is a **variable**, not a string.

It contains the Schema object.

---

# Very Important Difference

```javascript
"User"
```

This is a **String**.

```javascript
userSchema
```

This is a **Variable** that stores the Schema object.

Never write:

```javascript
mongoose.model("User", "userSchema");
```

This is incorrect because `"userSchema"` is just text.

---

# Read the Line in English

```javascript
const User = mongoose.model("User", userSchema);
```

can be read as:

> Create a Mongoose Model named **User** using the rules defined inside **userSchema**, and store that Model inside the variable **User**.

---

# What Happens Internally?

When JavaScript executes:

```javascript
const User = mongoose.model("User", userSchema);
```

the following steps happen:

1. Mongoose reads the `userSchema`.
2. It understands all the rules defined in the schema.
3. It creates a Model based on those rules.
4. The Model knows how to interact with MongoDB.
5. The Model is stored inside the variable `User`.

At this point:

- No document has been inserted.
- No collection has been created.
- No database changes have occurred.

Only the Model has been created.

---

# Why Do We Need a Model?

A Schema only defines the structure.

A Model allows us to perform CRUD operations.

Using the Model, we can:

```javascript
User.create()
```

Create a new document.

```javascript
User.find()
```

Read documents.

```javascript
User.findOne()
```

Find a single document.

```javascript
User.findById()
```

Find a document using its `_id`.

```javascript
User.findByIdAndUpdate()
```

Update a document.

```javascript
User.findByIdAndDelete()
```

Delete a document.

Without the Model, none of these operations are possible.

---

# Why Does `"User"` Become `users`?

Suppose we write:

```javascript
const User = mongoose.model("User", userSchema);
```

When the first document is inserted, Mongoose automatically creates the collection as:

```
users
```

Why?

Because Mongoose automatically:

1. Converts the Model name to lowercase.
2. Converts it into its plural form.

Examples:

| Model Name | Collection Name |
|------------|-----------------|
| User | users |
| Student | students |
| Product | products |
| Employee | employees |

So remember:

```
Model
User
```

becomes

```
Collection
users
```

---

# Schema vs Model

| Schema | Model |
|---------|-------|
| Defines the structure | Uses the structure |
| Blueprint | Builder |
| Contains rules | Interacts with MongoDB |
| Cannot perform CRUD operations | Can perform CRUD operations |
| Created using `new mongoose.Schema()` | Created using `mongoose.model()` |

---

# Complete Flow

```
Schema
(userSchema)
        │
        ▼
Model
(User)
        │
        ▼
Document
{
    firstName: "Rahul",
    age: 20
}
        │
        ▼
Collection
(users)
        │
        ▼
Database
(test)
```

---

# Common Beginner Mistakes

### Wrong

```javascript
mongoose.model("User", "userSchema");
```

Reason:

`"userSchema"` is a string.

Mongoose expects a Schema object.

---

### Correct

```javascript
mongoose.model("User", userSchema);
```

---

### Wrong Thinking

> Creating a Model immediately creates a MongoDB collection.

Incorrect.

The collection is usually created only after the first document is inserted.

---

# Summary

| Code | Meaning |
|------|---------|
| `const` | Creates a variable |
| `User` | Variable storing the Model |
| `mongoose.model()` | Creates a Model from a Schema |
| `"User"` | Name of the Model (String) |
| `userSchema` | Schema object used to create the Model |
| `User` | Used to perform CRUD operations |
| `users` | Collection automatically created by Mongoose |

---

# Interview Questions

### 1. What is a Model in Mongoose?

A Model is an object created from a Schema that allows us to interact with a MongoDB collection. It provides methods for creating, reading, updating, and deleting documents.

---

### 2. Why do we need a Model?

A Schema only defines the structure of the data. A Model uses that structure to perform database operations.

---

### 3. Why is `"User"` inside quotes but `userSchema` is not?

`"User"` is a string representing the Model name.

`userSchema` is a variable containing the Schema object.

---

### 4. Does creating a Model create a MongoDB collection?

No.

The collection is usually created automatically when the first document is inserted.

---

### 5. Why does `User` become `users`?

Because Mongoose automatically converts the Model name to lowercase and pluralizes it when creating the collection.
