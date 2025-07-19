## Authentication — Notes

- **Definition:**  
  - Process of verifying if a user/system is who they claim to be.

- **Purpose:**  
  - Controls access to restricted resources.
  - Ensures users are who they say they are.

## Approaches to Authentication

### 1. Stateful Authentication

- **Concept:**  
  - Server maintains a session or state for each authenticated user.

- **How it Works:**  
  - User logs in, server checks credentials.
  - Server creates a session (stores user info in memory/database).
  - Server generates a unique Session ID (SID).
  - SID is sent to the client (often via a cookie).
  - On each request, client sends SID back to server.
  - Server uses SID to identify user and session.

- **Examples:**  
  - Session-based login using cookies.
  - Traditional web applications.

- **Advantages:**  
  - Server can invalidate or log out sessions easily (direct control).
  - Easier to enforce user permissions and revoke access.

- **Disadvantages:**  
  - Not easily scalable (all sessions must be stored/tracked on server).
  - Server restart may destroy all sessions unless stored persistently (e.g., database/Redis).

### 2. Stateless Authentication

- **Concept:**  
  - Server does not store any session data about users.

- **How it Works:**  
  - Upon login, server issues a self-contained token (e.g., JWT).
  - Token is sent to client, usually stored in localStorage or as a header.
  - On each request, client sends token back (header/cookie).
  - Server verifies token’s signature and data; authenticates request based on this.

- **Examples:**  
  - JSON Web Tokens (JWT)
  - API authentication

- **Advantages:**  
  - Highly scalable (no session storage needed on server).
  - Works well for distributed systems and APIs.

- **Disadvantages:**  
  - Revoking access (logout) is harder since tokens persist until expiry.
  - If private information is placed in token, can be a security risk if token is leaked.

## Additional Notes

- **Cookies:**  
  - Often used to store Session IDs (stateful) or tokens (stateless) in web browsers.

- **Middleware:**  
  - Functions that check session/token validity on each protected route.

- **Security Tips:**  
  - Never store sensitive info in session/token if avoidable.
  - Always validate credentials securely.
  - Protect session data/token with appropriate security measures (HTTPS, httpOnly, etc).

**Summary:**  
Authentication ensures secure access by verifying user identity. Stateful authentication relies on server-side sessions, while stateless authentication trusts self-contained tokens such as JWTs, each with distinct trade-offs for scalability and control.

---