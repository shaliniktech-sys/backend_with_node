# Complete MVC Flow

Suppose browser requests:

GET /users

Step 1

Browser sends request.

↓

Step 2

Express receives request.

↓

Step 3

Route checks URL.

↓

Step 4

Route calls Controller.

↓

Step 5

Controller asks Model.

↓

Step 6

Model queries MongoDB.

↓

Step 7

MongoDB returns data.

↓

Step 8

Model sends data to Controller.

↓

Step 9

Controller sends response.

↓

Step 10

Browser receives JSON.

---

Diagram

Browser

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

Remember

Routes

Where?

Controllers

What?

Models

Database

Views

Display
