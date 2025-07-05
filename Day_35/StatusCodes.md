```markdown
# HTTP Status Codes — Notes

---

## What Are HTTP Status Codes?

HTTP status codes are standardized three-digit numbers returned by a server in response to a client's HTTP request. They indicate whether a specific HTTP request has been successfully completed, or if there was an error, and what type of error occurred.

**Example:**  
- `404 Not Found` — The requested resource does not exist.

---

## Categories of HTTP Status Codes

| Code Range | Category         | Description                                      | Examples           |
|------------|------------------|--------------------------------------------------|--------------------|
| 1xx        | Informational    | Request received, continuing process             | 100, 101           |
| 2xx        | Success          | The request was successfully received/processed  | 200, 201, 204      |
| 3xx        | Redirection      | Further action needs to be taken                 | 301, 302, 307      |
| 4xx        | Client Error     | The request contains bad syntax or cannot be fulfilled | 400, 401, 403, 404 |
| 5xx        | Server Error     | The server failed to fulfill a valid request     | 500, 501, 503      |

---

## Common HTTP Status Codes

### 2xx — Successful Responses

- **200 OK**  
  Standard response for successful HTTP requests.

- **201 Created**  
  Used when a new resource is created (e.g., after a POST request).

- **202 Accepted**  
  The request has been accepted for processing, but the processing has not been completed.

- **204 No Content**  
  The server successfully processed the request, but is not returning any content.

---

### 3xx — Redirection

- **301 Moved Permanently**  
  The resource has been moved to a new URL permanently.

- **302 Found**  
  The resource is temporarily located at a different URI.

- **307 Temporary Redirect**  
  The requested resource resides temporarily under a different URI.

---

### 4xx — Client Errors

- **400 Bad Request**  
  The request could not be understood by the server due to invalid syntax.

- **401 Unauthorized**  
  The request requires user authentication.

- **402 Payment Required**  
  Reserved for future use.

- **403 Forbidden**  
  The server understood the request, but refuses to authorize it.

- **404 Not Found**  
  The server can't find the requested resource.

- **405 Method Not Allowed**  
  The request method is known by the server but is not supported by the target resource.

---

### 5xx — Server Errors

- **500 Internal Server Error**  
  The server encountered an unexpected condition.

- **501 Not Implemented**  
  The server does not support the functionality required to fulfill the request.

- **503 Service Unavailable**  
  The server is currently unavailable (overloaded or down).

---

## Using Status Codes in Express/Node.js

You can set status codes in Express using `res.status(code)`.  
**Examples:**

```
// Successful GET
res.status(200).json({ message: "OK" });

// Resource creation
res.status(201).json({ message: "User created" });

// Missing required fields
res.status(400).json({ message: "All fields are required" });

// Unauthorized access
res.status(401).json({ message: "Unauthorized" });

// Forbidden action
res.status(403).json({ message: "Forbidden" });

// Resource not found
res.status(404).json({ message: "Not Found" });

// Server error
res.status(500).json({ message: "Internal Server Error" });
```

---

## Best Practices

- **400 Bad Request:** Use when required fields are missing or data is invalid.
- **401 Unauthorized:** Use when authentication is missing or invalid.
- **403 Forbidden:** Use when the user is authenticated but lacks permission.
- **404 Not Found:** Use when the resource does not exist.
- **500 Internal Server Error:** Use for unexpected server errors.
- **201 Created:** Always use for successful POST requests that create a resource.

---