# 05 - Node.js Architecture

## About

This project explores the architecture of Node.js and how it handles multiple client requests efficiently. It explains the role of the Event Queue, Event Loop, Thread Pool, and the difference between blocking and non-blocking operations.

---

## Request Flow

```
Client
   │
   ▼
Server (Node.js)
   │
   ▼
Event Queue
   │
   ▼
Event Loop
   │
   ├──────────────► Non-Blocking Operation
   │                    │
   │                    ▼
   │              Processed
   │                    │
   │                    ▼
   │             Response to Client
   │
   ▼
Blocking Operation
   │
   ▼
Thread Pool
   │
   ▼
Worker Thread
   │
   ▼
Task Completed
   │
   ▼
Response to Client
```

---

## How Node.js Handles Requests

When a client sends a request to a Node.js server:

1. Node.js receives the request.
2. The request is placed in the **Event Queue**.
3. The **Event Loop** continuously monitors the Event Queue.
4. It processes requests in **FIFO (First In, First Out)** order.
5. For each request, the Event Loop determines whether it is:
   - **Blocking (Synchronous)**
   - **Non-Blocking (Asynchronous)**

---

## Non-Blocking Operations

If the request is **non-blocking**, the Event Loop processes it directly without waiting for other tasks to finish.

Examples:

- Reading files asynchronously
- Network requests
- Database queries
- API calls
- Timers

After completion, the response is immediately sent back to the client.

Because the Event Loop does not wait, it can continue processing many other incoming requests.

---

## Blocking Operations

If the request is **blocking**, it cannot be handled directly by the Event Loop.

Instead, it is assigned to the **Thread Pool**.

The Thread Pool contains worker threads responsible for executing time-consuming tasks.

Examples include:

- File operations using synchronous methods
- CPU-intensive calculations
- Cryptographic operations
- Data compression

Once the task is completed, the worker thread returns to the Thread Pool and the response is sent to the client.

---

## Thread Pool

The Thread Pool is a collection of worker threads managed by **libuv** (the library that powers Node.js' asynchronous I/O).

### Default Thread Pool Size

```
4 Threads
```

Only four worker threads are available by default.

When all worker threads are busy, additional blocking tasks must wait until a thread becomes available.

---

## Why Too Many Blocking Operations Are a Problem

Suppose all four worker threads are already processing blocking tasks.

Now another blocking request arrives.

Since no worker thread is free, the new request has to wait.

As the number of waiting requests increases, the application's responsiveness decreases.

This becomes a **scalability issue**, especially in web applications serving many users simultaneously.

For this reason, Node.js applications should prefer **non-blocking (asynchronous)** operations whenever possible.

---

## Blocking vs Non-Blocking

| Blocking | Non-Blocking |
|----------|--------------|
| Executes one task at a time | Multiple tasks can progress concurrently |
| Waits until the current task finishes | Doesn't wait for previous tasks |
| Can reduce scalability | Highly scalable |
| Uses worker threads for expensive tasks | Managed efficiently by the Event Loop |

---

## Real-Life Analogy

### Blocking Task

Imagine you're making tea.

You stand beside the stove and wait until the water boils before doing anything else.

Your entire attention is blocked.

---

### Non-Blocking Task

Now imagine you put the water on the stove and, while it is boiling, you:

- Wash clothes
- Reply to messages
- Clean your room
- Finish another task

Once the water boils, you return to prepare the tea.

This is exactly how Node.js handles asynchronous operations.

---

## Checking CPU Cores

Node.js allows us to check the number of CPU cores available using the built-in **os** module.

```javascript
const operating = require("os");

console.log(operating.cpus().length);
```

### Example Output

```
16
```

This means the system has **16 logical CPU cores**.

---

## Can We Increase the Thread Pool Size?

Yes.

The default Thread Pool size is **4**, but it can be increased using the `UV_THREADPOOL_SIZE` environment variable.

The ideal size depends on the machine's hardware and workload. Increasing it beyond the available CPU resources usually does not improve performance.

---

## Key Takeaways

- Node.js uses a **Single-Threaded Event Loop**.
- Requests are first placed in the **Event Queue**.
- The Event Loop processes requests in **FIFO** order.
- Non-blocking operations keep the application responsive.
- Blocking operations are delegated to the Thread Pool.
- The Thread Pool contains **4 worker threads by default**.
- Excessive blocking operations can reduce scalability.
- Prefer asynchronous APIs whenever possible for better performance.

---

This project is part of my Node.js learning journey, where I explore how Node.js manages concurrency and why its non-blocking architecture makes it efficient for scalable applications.
