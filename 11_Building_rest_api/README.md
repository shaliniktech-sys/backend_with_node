# Building REST APIs with Express.js

A beginner-friendly Node.js project demonstrating how to build REST APIs using Express.js. This project covers routing, middleware, dynamic route parameters, and basic CRUD endpoint structure.

---

## Concepts Covered

- Express.js setup
- Middleware (`express.urlencoded()`)
- Server-Side Rendering (SSR)
- REST APIs
- Route Parameters
- `app.route()` method
- GET requests
- POST requests
- PATCH requests
- DELETE requests
- Returning JSON responses

---

## Project Structure

```
API/
│── MOCK_DATA.json
│── 11_rest_api.js
│── package.json
│── package-lock.json
│── node_modules/
```

---

## Routes

### HTML Route

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/users` | Displays all user names as an HTML list |

---

### REST API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/users` | Returns all users |
| GET | `/api/users/:id` | Returns a user by ID |
| POST | `/api/users` | Creates a new user *(logic pending)* |
| PATCH | `/api/users/:id` | Updates a user *(logic pending)* |
| DELETE | `/api/users/:id` | Deletes a user *(logic pending)* |

---

## Middleware Used

```javascript
app.use(express.urlencoded({ extended: false }));
```

This middleware parses incoming form data and stores it inside:

```javascript
req.body
```

---

## Dynamic Route Parameters

Example:

```
/api/users/5
```

Here,

```
:id
```

is a dynamic parameter that can be accessed using:

```javascript
req.params.id
```

---

## Running the Project

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

or

```bash
node 11_rest_api.js
```

---

## Sample API Endpoints

Get all users

```
GET http://localhost:8000/api/users
```

Get user with ID 3

```
GET http://localhost:8000/api/users/3
```

Open HTML page

```
GET http://localhost:8000/users
```

---

## What You'll Learn

- Difference between SSR and REST APIs
- Creating API endpoints
- Returning JSON responses
- Handling route parameters
- Organizing Express routes
- Building the foundation for CRUD applications

---

## Next Improvements

- Create new users
- Update existing users
- Delete users
- Store changes inside the JSON file
- Add validation and error handling
