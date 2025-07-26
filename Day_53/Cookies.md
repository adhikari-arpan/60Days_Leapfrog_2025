
# 📝 Notes: Cookies & Authentication in Node.js

## 🔍 What are Cookies?
- Small pieces of data stored on the **client (browser)**.
- Sent with every request to the **server**.
- Helps maintain **state in stateless HTTP**.
- Commonly used for:
  - **Session management**
  - **Personalization**
  - **User tracking**

## 🔐 Why Use Cookies for Authentication?
- Keep users **logged in** across multiple requests.
- Store **session IDs or tokens** securely.
- Enhance **user experience** (e.g., "Remember Me").
- Aid in **secure access control**.

## ⚙️ How Cookies Work in Node.js Authentication:

1. **Login Request**
   - User sends credentials → server verifies.

2. **Set Cookie**
   - On success, server sends a cookie (e.g., session ID or JWT).
   - Cookie includes flags:
     - `HttpOnly` – Restricts JS access
     - `Secure` – HTTPS only
     - `SameSite` – Controls cross-site behavior

3. **Client Sends Cookie**
   - Browser auto-sends cookie with each request.
   - Server identifies and authenticates user.

4. **Logout / Expiration**
   - Session cookie removed or expires.
   - Controlled via `Max-Age` or `Expires`.

## 🛡️ Cookie Security Best Practices:
- Use `HttpOnly`, `Secure`, and `SameSite` flags.
- Never store **sensitive data** (e.g., passwords).
- Use **secure, random session tokens**.
- Implement **token signing** or token storage on the server.
- Always use **HTTPS** in production.

## 📦 Useful Node.js Libraries:

| Library          | Description                                |
|------------------|---------------------------------------------|
| `cookie-parser`  | Parses cookie headers (`req.cookies`)       |
| `express-session`| Session management (server-side sessions)   |
| `jsonwebtoken`   | For signed, encrypted tokens (JWT)          |