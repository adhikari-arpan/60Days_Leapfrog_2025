## Server Side Rendering (SSR) — Theory

### What is Server Side Rendering?

- **Server Side Rendering (SSR)** is a technique where a web page’s HTML is generated on the server, rather than in the browser. When a user makes a request, the server processes data, applies business logic, and outputs a fully-formed HTML document for the client.
- The browser receives this already-built HTML, displays it immediately, and only loads additional scripts (if any) afterward.

### Why Use SSR?

- **Performance**: Users see a complete and meaningful page faster, especially on slow networks or devices with limited resources.
- **SEO Benefits**: Search engines can easily crawl and index pre-rendered HTML, improving a website’s discoverability.
- **Accessibility**: All users—including those with older browsers or devices—can access the content without requiring client-side JavaScript to build the page.

### Key Concepts of SSR

- **Rendering on Request**: Every page is constructed on the server whenever the browser requests it, using the current state of the server-side data.
- **Separation of Logic and Presentation**: Logic (data fetching, processing) is handled server-side, while presentation is controlled through templates, keeping code maintainable.
- **Templating Engines**: SSR can utilize engines (like EJS, Pug, Handlebars) that allow insertion of dynamic data into HTML templates, generating tailored pages per request.

### SSR vs. Client-Side Rendering

| Aspect             | Server Side Rendering             | Client-Side Rendering            |
|--------------------|----------------------------------|----------------------------------|
| Where HTML is built| On the server                     | In the browser via JavaScript    |
| Initial Experience | Content visible immediately       | Delayed: blank or loading screen |
| SEO                | Indexable by crawlers easily      | More difficult for crawlers      |
| Device Load        | Lower, as server does the work    | Higher, browser does heavy lifting|

### The Role of SSR in Modern Web Development

- Enables fast, consistent user experience.
- Common in content-heavy websites, blogs, news, landing pages, and e-commerce.
- Can be combined with client-side technologies (hydration, reactivity) for dynamic features.

SSR is foundational for web applications needing quick load times, good search visibility, and consistent content delivery across diverse user scenarios.