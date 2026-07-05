# 04 - File Handling in Node.js

This project demonstrates the basics of File Handling using Node.js' built-in **fs (File System)** module.

It covers both

- Synchronous File Handling
- Asynchronous File Handling

---

## Files

```
04_file_handling/
│
├── syncFile.js
├── asyncFile.js
├── contact.txt
├── README.md
```

---

# Synchronous File Handling

Synchronous methods execute one after another.

The next line of code waits until the previous operation finishes.

Example:

```javascript
fs.writeFileSync(...);
fs.readFileSync(...);
```

Execution Flow

```
Write File
     ↓
Read File
     ↓
Append File
     ↓
Copy File
     ↓
Delete File
     ↓
Get Stats
     ↓
Create Directory
```

These methods block the execution until they complete.

---

## Operations Performed

### 1. writeFileSync()

Creates a new file.

If the file already exists, its contents are overwritten.

```javascript
fs.writeFileSync("./text_sync.txt", "Hello World");
```

---

### 2. readFileSync()

Reads the contents of a file.

```javascript
const data = fs.readFileSync("./contact.txt", "utf-8");
```

### Why `"utf-8"`?

Without `"utf-8"`:

```
<Buffer 48 65 6c 6c 6f>
```

With `"utf-8"`:

```
Hello
```

Node converts the binary data into readable text.

---

### 3. appendFileSync()

Adds new content to the end of a file.

```javascript
fs.appendFileSync(
    "./text_sync.txt",
    `${new Date().toLocaleString()}`
);
```

Notice the use of **template literals** (backticks).

Backticks (` `) allow:

- Multi-line strings
- Variable interpolation using `${}`

Example

```javascript
`${new Date()}`
```

Without backticks, `${}` does not work.

---

### 4. cpSync()

Copies a file.

```javascript
fs.cpSync("./contact.txt", "./contact_copy.txt");
```

---

### 5. unlinkSync()

Deletes a file.

```javascript
fs.unlinkSync("./contact_copy.txt");
```

---

### 6. statSync()

Returns information about a file.

```javascript
const stats = fs.statSync("./text_sync.txt");
```

Useful methods include

```javascript
stats.isFile()
stats.isDirectory()
stats.size
stats.birthtime
stats.mtime
```

Example

```javascript
console.log(stats.isFile());
```

Returns

```
true
```

Notice that `isFile()` has parentheses because it is a **method**, not a property.

---

### 7. mkdirSync()

Creates a directory.

```javascript
fs.mkdirSync("./my-docss/a/b", {
    recursive: true,
});
```

## Why are `{}` used here?

The second argument of `mkdirSync()` is an **options object**.

Objects in JavaScript are written using curly braces `{}`.

```javascript
{
    recursive: true
}
```

This object tells Node.js how the directory should be created.

Here,

```javascript
recursive: true
```

means:

> "Create all missing parent folders automatically."

Without `recursive: true`

```
my-docss
   ❌ doesn't exist

Trying to create

my-docss/a/b

Result

Error!
```

With

```javascript
recursive: true
```

Node creates

```
my-docss
      ↓
      a
      ↓
      b
```

automatically.

This is similar to Windows Explorer creating all intermediate folders in one click.

---

# Asynchronous File Handling

Asynchronous methods do **not block** the execution of the program.

Instead of waiting, Node.js continues executing other code.

When the operation finishes, a **callback function** is executed.

Example

```javascript
fs.writeFile(..., callback);
```

Execution

```
Start Write
      ↓
Node continues working
      ↓
Write finishes
      ↓
Callback executes
```

---

## writeFile()

Creates a file asynchronously.

```javascript
fs.writeFile(
    "./text_async.txt",
    "Hello World Async",
    (err) => {

    }
);
```

The callback receives an error if something goes wrong.

---

## readFile()

Reads a file asynchronously.

```javascript
fs.readFile(
    "./contact.txt",
    "utf-8",
    (err, data) => {

    }
);
```

The callback provides

- err
- data

---

# Synchronous vs Asynchronous

| Synchronous | Asynchronous |
|-------------|--------------|
| Waits for each task | Doesn't wait |
| Blocking | Non-blocking |
| Easier to understand | Better performance |
| Simpler programs | Production applications |

---

# Files Used

### contact.txt

Used as the input file for demonstrating file reading and copying.

### text_sync.txt

Created by `syncFile.js`.

### text_async.txt

Created by `asyncFile.js`.

---

# How to Run

```bash
node syncFile.js
```

or

```bash
node asyncFile.js
```

---

# Concepts Learned

- fs module
- writeFileSync()
- readFileSync()
- appendFileSync()
- cpSync()
- unlinkSync()
- statSync()
- mkdirSync()
- recursive option
- writeFile()
- readFile()
- Callback Functions
- Blocking vs Non-Blocking I/O
- Template Literals
- File System Operations
