# Express.js CRUD API

A simple RESTful API built using **Node.js** and **Express.js** that performs CRUD (Create, Read, Update, Delete) operations on user data stored in a local JSON file (`MOCK_DATA.json`).

---

## Features

- Create a new user (POST)
- Read a user by ID (GET)
- Update user details (PATCH)
- Delete a user (DELETE)
- Stores data in a JSON file
- Uses Express Middleware to parse request bodies

---

## Technologies Used

- Node.js
- Express.js
- File System (fs) Module
- Postman (for API testing)

---

## Project Structure

```
project-folder/
│
├── index.js
├── MOCK_DATA.json
├── package.json
├── package-lock.json
└── README.md
```

---

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate into the project

```bash
cd project-folder
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node index.js
```

or if using nodemon

```bash
nodemon index.js
```

Server starts at

```
http://localhost:8000
```

---

## Middleware Used

### express.urlencoded()

```js
app.use(express.urlencoded({ extended: false }));
```

Parses data sent using **x-www-form-urlencoded** format.

Example:

```
first_name=John
email=john@gmail.com
```

---

### express.json()

```js
app.use(express.json());
```

Parses incoming JSON request bodies.

Example:

```json
{
    "first_name": "John",
    "email": "john@gmail.com"
}
```

---

# API Endpoints

---

## 1. Create User

### Endpoint

```
POST /api/users
```

### Request Body

```json
{
    "first_name": "John",
    "last_name": "Doe",
    "email": "john@gmail.com",
    "gender": "Male",
    "job_title": "Developer"
}
```

### Response

```json
{
    "status": "Successful",
    "id": 1001
}
```

---

## 2. Get User by ID

### Endpoint

```
GET /api/users/:id
```

### Example

```
GET /api/users/300
```

### Response

```json
{
    "id":300,
    "first_name":"John",
    "last_name":"Doe",
    "email":"john@gmail.com",
    "gender":"Male",
    "job_title":"Developer"
}
```

---

## 3. Update User

### Endpoint

```
PATCH /api/users/:id
```

Updates only the fields provided in the request body.

### Example Request

```json
{
    "first_name":"Sorabh"
}
```

### Response

```json
{
    "status":"Success"
}
```

---

## 4. Delete User

### Endpoint

```
DELETE /api/users/:id
```

### Example

```
DELETE /api/users/300
```

### Response

```json
{
    "status":"Success"
}
```

---

# CRUD Operations

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/users` | Create a new user |
| GET | `/api/users/:id` | Retrieve a user |
| PATCH | `/api/users/:id` | Update an existing user |
| DELETE | `/api/users/:id` | Delete a user |

---

# How Data is Stored

Instead of using a database, this project stores all users inside

```
MOCK_DATA.json
```

Whenever:

- POST is called → a new user is added.
- PATCH is called → an existing user is updated.
- DELETE is called → the user is removed.

The updated array is written back using

```js
fs.writeFile()
```

---

# Testing

The API can be tested using **Postman**.

Examples:

### POST

```
POST http://localhost:8000/api/users
```

### GET

```
GET http://localhost:8000/api/users/300
```

### PATCH

```
PATCH http://localhost:8000/api/users/300
```

Body

```
x-www-form-urlencoded
```

```
first_name = Sorabh
```

or

```
raw JSON
```

```json
{
    "first_name":"Sorabh"
}
```

### DELETE

```
DELETE http://localhost:8000/api/users/300
```

---

# Concepts Learned

- Express.js Routing
- Route Parameters
- Middleware
- Request Body Parsing
- REST APIs
- CRUD Operations
- File Handling using fs
- JSON Manipulation
- HTTP Methods
- Postman API Testing

---

# Future Improvements

- Add input validation
- Return proper HTTP status codes
- Better error handling
- Connect with MongoDB/MySQL
- Add authentication
- Use MVC architecture
- Separate Routes and Controllers

---

## Author

Built while learning **Node.js** and **Express.js** to understand REST API development and CRUD operations.
