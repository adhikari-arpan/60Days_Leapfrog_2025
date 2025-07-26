# JWT Authentication

## Overview

JWT (JSON Web Token) Authentication is a secure, stateless mechanism for authorizing users in web applications. It allows backend services to verify the identity of users and grant access to protected resources using signed tokens rather than session-based approaches.

## What is JWT?

- **JWT** is a compact, URL-safe token format used for transmitting claims between parties.
- Each token is composed of three parts:
  - **Header**: Contains metadata about the token, such as the signing algorithm.
  - **Payload**: Contains user data (claims).
  - **Signature**: Ensures the integrity of the token, verifying it hasn't been tampered with.

Example JWT: `xxxxx.yyyyy.zzzzz`

## Why Use JWT Authentication?

- **Stateless**: No server-side session; the token itself carries all necessary info.
- **Scalable**: Easily used in distributed architectures like microservices.
- **Cross-language**: JWTs can be generated and validated in any language.
- **Flexible**: Custom claims can be added for various authorization scenarios.

## How JWT Authentication Works

1. **User Login:**  
   The user sends login credentials to the server (e.g., via a login form).

2. **Token Generation:**  
   If authentication succeeds, the server generates a JWT and sends it back to the client.

3. **Client Stores Token:**  
   The client saves the JWT (typically in localStorage or a cookie).

4. **Token Usage:**  
   For protected routes, the client includes the JWT in the `Authorization` header (`Bearer` scheme).

5. **Server Validation:**  
   The server validates the JWT's signature and extracts the user data from the payload. If valid, access is granted.

## Structure of a JWT

| Section   | Content                | Example                                   |
|-----------|------------------------|-------------------------------------------|
| Header    | Algorithm, Token Type  | `{ "alg": "HS256", "typ": "JWT" }`        |
| Payload   | Claims (user data)     | `{ "sub": "123456", "role": "admin" }`    |
| Signature | Hash of header + payload | `HMACSHA256(base64url(header)+base64url(payload), secret)` |

## Best Practices

- **Keep your secret key secure**: This signs/verifies tokens.
- **Expire tokens**: Set reasonable expiration (e.g., 15min-1hr).
- **Use HTTPS**: Prevent interception and replay of tokens.
- **Blacklist tokens on logout (optional)**: As JWTs are stateless, implement token revocation lists if needed.
- **Validate claims**: Check user roles/permissions on every request.

## Example (Node.js Express)

```js
const jwt = require('jsonwebtoken');

// Signing (on login)
const token = jwt.sign({ userId: 123 }, 'secretKey', { expiresIn: '1h' });

// Verifying (on protected route)
jwt.verify(token, 'secretKey', (err, decoded) => {
  if (err) return res.status(401).send('Invalid token');
  req.user = decoded;
  next();
});
```

## Common Use Cases

- **Single Sign-On (SSO)**
- **RESTful APIs**
- **Mobile and SPA (Single Page Applications)**
- **Microservices architectures**

## Frequently Asked Questions

- **Can a client modify or forge a JWT?**  
  Not if you use a strong secret or private key and proper signing algorithm; the server will reject tampered tokens.
- **Where should I store JWTs?**  
  Store tokens in HTTP-only cookies for best security, or in browser storage (localStorage/sessionStorage) if needed.
- **What happens when a JWT expires?**  
  The client must re-authenticate to receive a new token.