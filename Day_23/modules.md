```markdown
# Notes: Modules in NodeJS

## What is Node.js?
- Node.js is a JavaScript runtime built on Chrome's V8 engine.
- Allows running JavaScript on the server side to build server-side applications.

---

## Modular Programming
- Modular programming involves dividing code into smaller modules for better organization and maintainability.
- Each module contains related functions or logic.
- Example: You can have a `maths.js` file for all mathematical functions.

---

## Creating and Using Modules

### 1. Creating a Module
- Write functions in a separate JS file (e.g., `maths.js`).
- Example functions: `add`, `subtract`.

### 2. Exporting from a Module
- Use `module.exports` to make functions or objects available to other files.
- Example:
  ```
  // maths.js
  function add(a, b) { return a + b; }
  function subtract(a, b) { return a - b; }
  module.exports = { add, subtract };
  ```

### 3. Importing a Module
- Use `require` to import modules into another file.
- Syntax: 
  ```
  const maths = require('./maths');
  ```
- The `./` indicates the current directory. Omitting it makes Node look for built-in or installed modules.

### 4. Using Exported Functions
- After importing, you can use the exported functions:
  ```
  console.log(maths.add(2, 4)); // 6
  console.log(maths.subtract(2, 4)); // -2
  ```

---

## Key Concepts

### `require` Function
- Used to import modules (built-in, third-party, or custom).
- Similar to `import` in Java or `#include` in C/C++.
- If you use just the module name, Node looks for built-in or installed modules.
- If you use `./`, Node looks in the current directory.

### `module.exports` vs `exports`
- `module.exports` is used to export a single value (function, object, etc.).
- `exports` is a shorthand to add multiple properties/functions to the exports object.
- Only one `module.exports` assignment is allowed; using it multiple times will overwrite previous exports.

### Exporting Multiple Functions
- Best practice: Export an object containing all functions.
- Example:
  ```
  module.exports = {
    add,
    subtract
  };
  ```

- Alternatively, use:
  ```
  exports.add = (a, b) => a + b;
  exports.subtract = (a, b) => a - b;
  ```

### Built-in Modules
- Node.js provides built-in modules like `http`, `fs`, and `crypto`.
- Import them directly by name:
  ```
  const fs = require('fs');
  const http = require('http');
  ```

---

## Best Practices
- Always export functions or objects you want to use in other files.
- Use modular programming for cleaner, maintainable code.
- Use `require('./moduleName')` for your own files, and `require('moduleName')` for built-in or installed packages.

---

## Conclusion
- Modular programming is essential for scalable Node.js applications.
- Use `module.exports` and `require` to manage and organize code.
- Built-in modules provide additional functionality out-of-the-box.
- Practice modular code for clarity and maintainability.

---
