# EJS (Embedded JavaScript) – Key Notes

## What is EJS?

- **EJS (Embedded JavaScript)** is a simple templating language that lets you generate HTML markup with plain JavaScript.
- It is designed to work with Node.js and integrates seamlessly with frameworks like Express.js for building dynamic web applications.
- EJS files typically use the `.ejs` file extension and allow embedding JavaScript code and variables directly into HTML.

## Why Use EJS?

- **Easy to Learn:** Syntax is very similar to HTML and familiar JavaScript.
- **Separation of Concerns:** Keeps application logic (JavaScript) apart from UI structure (HTML).
- **Reusable Templates:** Create reusable layouts and partials, improving code maintainability.
- **Dynamic Content:** Inject and display server-side data easily within HTML pages.

## Basic Syntax

- Tags used in EJS for embedding JavaScript:
  - ``: Outputs the value of `variable` into the HTML, escaping HTML by default.
  - ``: Outputs the raw, unescaped value of `variable`.
  - ``: Executes JavaScript code without output (useful for loops, conditionals).
  - ``: Comment in EJS; not rendered in the output.
- Example usage:

  ```html
  Welcome, 
  
    You have admin access.
  
  ```

## Using EJS with Express.js

1. **Installation:**
   ```bash
   npm install ejs
   ```
2. **Setup in Express:**
   ```javascript
   const express = require('express');
   const app = express();
   app.set('view engine', 'ejs');
   ```
3. **Rendering a Template:**
   - Place your EJS files in the `/views` folder (default).
   - Use `res.render('template', dataObject)` to render HTML with variables.

   ```javascript
   app.get('/profile', (req, res) => {
     res.render('profile', { user: someUserObject });
   });
   ```

## Features

- **Partials:** Include reusable chunks of HTML, such as headers or footers, using ``.
- **Layout Engine:** While EJS itself does not provide layouts, combining with partials or external libraries can handle layouts.
- **No Client-Side Dependency:** All rendering happens on the server, and the client receives standard HTML.

## EJS vs. Other Templating Engines

| Feature         | EJS                                    | Pug                     | Handlebars          |
|-----------------|----------------------------------------|-------------------------|---------------------|
| Syntax          | HTML + Embedded JS                     | Indented (no HTML tags) | HTML + Mustache     |
| Learning Curve  | Easy                                   | Moderate                | Easy                |
| Logic in View   | JavaScript                             | Custom/Python-like      | Limited logic       |
| Extension       | .ejs                                   | .pug                    | .hbs                |

## Common Use Cases

- Building pages with dynamic data fetched from a database.
- Rendering personalized content (user profiles, dashboards).
- Creating modular views with partials for maintainable layouts.

## Best Practices

- Avoid putting application logic in templates; keep EJS responsible for presentation only.
- Use partials for repeating markup to keep templates DRY (Don’t Repeat Yourself).
- Sanitize external variables before rendering, especially when using `` for raw output.

## Summary

EJS is a popular templating solution for Node.js applications, making server-side rendering straightforward and efficient. Its close resemblance to HTML and ability to embed JavaScript logic make it a practical choice for dynamic, maintainable web applications.