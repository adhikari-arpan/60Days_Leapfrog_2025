# Notes on HTTP Headers in APIs

## What are HTTP Headers?

- HTTP headers are **key-value pairs** sent between clients and servers in HTTP requests and responses.
- They carry **metadata** about the request or response, such as content type, authentication credentials, caching policies, and more[1][5].
- Headers help both parties understand how to process the data payload correctly and securely.

## Types of HTTP Headers

- **Request Headers:** Provide information about the client or the resource being requested (e.g., `Accept`, `Authorization`).
- **Response Headers:** Provide information about the server or the returned resource (e.g., `Content-Type`, `Cache-Control`).
- **Custom Headers:** User-defined headers to extend standard functionality, often prefixed with `X-` (e.g., `X-API-Key`, `X-Request-ID`)[1][5].

## Common HTTP Headers Explained

| Header           | Purpose                                                                                      |
|------------------|----------------------------------------------------------------------------------------------|
| `Content-Type`   | Specifies the media type of the resource (e.g., `application/json`).                         |
| `Accept`         | Indicates the media types the client can process.                                           |
| `Authorization`  | Carries credentials for authentication (e.g., API keys, tokens).                            |
| `Cache-Control`  | Controls caching behavior of responses.                                                    |
| `User-Agent`     | Identifies the client software making the request.                                         |
| `Accept-Encoding`| Specifies acceptable content encodings (e.g., gzip, deflate).                              |

## Working with HTTP Headers in Node.js/Express

- Headers can be **read** from incoming requests using `req.headers`.
- Headers can be **set** in responses using `res.set()` or `res.header()`.
- Custom headers should use the `X-` prefix to avoid conflicts with standard headers.
- Viewing headers is possible via browser developer tools or API testing tools like Postman.

## Best Practices for API Headers

- Use standard headers whenever possible for compatibility.
- Use custom headers sparingly and document them clearly.
- Always include necessary authentication headers (e.g., `Authorization`) to secure APIs.
- Leverage headers to optimize performance (e.g., caching with `Cache-Control`).
- Use headers to enable better debugging and tracing (e.g., `X-Request-ID`).

## Summary

Understanding HTTP headers is **essential for building robust and secure APIs**. They enable communication of metadata, control over request/response behavior, and help enforce security and performance optimizations.
