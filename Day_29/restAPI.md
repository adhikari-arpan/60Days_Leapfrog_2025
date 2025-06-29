# REST API Notes

## What is a REST API?

A REST API (Representational State Transfer Application Programming Interface) is an architectural style for building web services that communicate over HTTP. It allows clients (such as web or mobile apps) to interact with resources on a server using standardized operations.

## Core Concepts

- **Resource-Based Architecture:**  
  Everything is treated as a resource (e.g., users, products), each identified by a unique URI (endpoint).

- **Client-Server Separation:**  
  The client and server operate independently, allowing for flexible and scalable system design.

- **Statelessness:**  
  Each request from a client must contain all necessary information; the server does not store session state between requests.

- **Uniform Interface:**  
  Resources are accessed and manipulated using standard HTTP methods:  
  - `GET` (retrieve)  
  - `POST` (create)  
  - `PUT` (update/replace)  
  - `DELETE` (remove)

## REST API Request Structure

- **HTTP Method:** Specifies the action (GET, POST, PUT, DELETE).
- **Endpoint (URI):** Unique address for the resource (e.g., `/users/1`).
- **Headers:** Metadata such as authentication tokens, content type, etc.
- **Body:** Data sent with POST/PUT requests, usually in JSON format.
- **Parameters:**  
  - Path parameters (e.g., `/users/{id}`)  
  - Query parameters (e.g., `/users?sort=name`)

## Best Practices

- **Resource Naming:** Use clear, plural nouns (e.g., `/users`, `/products`).
- **Proper HTTP Methods:** Match the method to the action (GET for reading, POST for creating, etc.).
- **Nesting Resources:** Nest related resources for clarity (e.g., `/users/{id}/orders`).
- **Use JSON:** Send and receive data in JSON format.
- **Authentication:** Use secure methods like OAuth 2.0, JWT, or API keys in headers.
- **Error Handling:** Return standard HTTP status codes and clear error messages.
- **Versioning:** Use semantic versioning in endpoints (e.g., `/api/v1/users`).
- **Documentation:** Provide interactive documentation (e.g., OpenAPI/Swagger).
- **Performance:** Implement caching, compression, and pagination for efficiency.
- **Security:** Use HTTPS, validate inputs, and manage CORS.

## Example Endpoints

```http
# List all users
GET /users

# Get a single user
GET /users/1

# Create a new user
POST /users

# Update a user
PUT /users/1

# Delete a user
DELETE /users/1
```


## Authentication Example

```http
Authorization: Bearer 
x-api-key: 
```


## Summary Table: HTTP Methods

| Method  | Action             | Example Endpoint      |
|---------|--------------------|----------------------|
| GET     | Retrieve resource  | GET /users/1         |
| POST    | Create resource    | POST /users          |
| PUT     | Update/replace     | PUT /users/1         |
| DELETE  | Remove resource    | DELETE /users/1      |
