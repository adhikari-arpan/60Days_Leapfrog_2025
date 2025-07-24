# 📝 Notes: Sessions vs Tokens for Authentication

## 🔑 Core Concepts

### What Are Sessions?
- **Session-based authentication** is stateful: the server creates a session after user login and keeps that session's data on the server (in memory or a database).
- The server sends a **session ID** (opaque random string) to the client, usually via an **HTTP-only cookie**.
- On every request, the client sends this cookie, allowing the server to look up the session and validate the user's identity.

### What Are Tokens?
- **Token-based authentication** (commonly with **JWTs**) is stateless: after login, the server sends a digitally signed token (JWT) to the client.
- Tokens are often stored client-side (localStorage, sessionStorage, or sometimes cookies).
- The token contains all necessary information (user data, expiration) and is sent in **HTTP headers** (typically the `Authorization` header) with each request. The server verifies the token's signature but doesn't store session data.

## 🔍 Key Differences

| Feature               | Sessions (Server-side)         | Tokens (Stateless/JWT)                |
|-----------------------|-------------------------------|---------------------------------------|
| **State**             | Stateful (server stores data) | Stateless (no server-side storage)    |
| **Scalability**       | Harder to scale (session sync needed) | Highly scalable (good for distributed/microservices) |
| **Revocation**        | Easy (just delete session)    | Hard (must blacklist token or wait for expiry)  |
| **Storage**           | Server (data), Cookie (ID)    | Client-side (JWT), optional cookie    |
| **Cross-domain/APIs** | Limited (browser cookies)     | Easy (add token to request headers)   |
| **Best for**          | Traditional web apps          | APIs, SPAs, mobile apps, microservices|
| **Security**          | Less exposure (data on server)| JWT must be securely signed, can be vulnerable if stolen|

## ⚙️ How They Work

### Session Flow:
1. User logs in (server authenticates).
2. Server creates and stores a session, sends session ID in a **cookie**.
3. Browser auto-sends cookie with each request.
4. Server looks up session using ID, authenticates and authorizes.

### Token Flow:
1. User logs in (server authenticates).
2. Server creates a **JWT** (contains user info + signature), sends to client.
3. Client stores token (localStorage, sessionStorage, or cookie).
4. Client attaches token (usually in `Authorization: Bearer `) header on requests.
5. Server validates signature and token data, then authorizes.

## 🍪 Cookies vs Headers

- **Sessions:** 
  - Mostly use **cookies** (HTTP-only) for session ID.
  - Browser handles sending cookie automatically.
  - Susceptible to **CSRF** if not properly configured; use `SameSite`, `HttpOnly`, `Secure` flags.

- **Tokens:** 
  - Usually included in **Authorization** header (`Bearer `).
  - Works for web, mobile, APIs, cross-domain.
  - Not auto-sent by browsers → less CSRF risk, but must manage **XSS** risk in client storage.

## 🧠 When to Prefer Each

### Choose **Sessions** when:
- You have a traditional server-rendered web app.
- You want more control and easy session termination.
- Scalability across many servers is not a concern.

### Choose **Tokens (JWTs)** when:
- You're building APIs, SPAs, or mobile apps that need cross-origin/cross-domain access.
- You need high scalability and stateless architecture (microservices).
- You want the ability to pass authentication info between services easily.

## ✔️ Additional Notes

- Sometimes, a hybrid approach is used: sessions for the main web app, tokens for APIs/mobile.
- Both methods should use **HTTPS**.
- Secure token/session management (expiration, renewal, invalidation) is mandatory.
- Protect against CSRF (for cookies) and XSS (for tokens in browser storage).

## 🚦 Summary Table

| Criteria             | Use Sessions            | Use Tokens (JWTs)            |
|----------------------|------------------------|------------------------------|
| Traditional web app  | ✅                      | ❌                            |
| Single-page app/API  | ❌                      | ✅                            |
| Easy logout          | ✅                      | ❌ (requires blacklist/expiry)|
| High scalability     | ❌                      | ✅                            |
| Cross-domain use     | ❌                      | ✅                            |
