```markdown
# Node.js File Handling - Today's Notes

## Node.js File System (fs) Module

- The `fs` (File System) module in Node.js provides methods to interact with the file system.
- Common operations include creating, reading, writing, and deleting files.
- Both asynchronous and synchronous methods are available.

## File Operations

### Creating and Writing Files
- Use `fs.writeFile()` (async) or `fs.writeFileSync()` (sync) to create or overwrite files.
- If the file does not exist, it will be created automatically.

### Reading Files
- Use `fs.readFile()` (async) or `fs.readFileSync()` (sync) to read file contents.
- Specify encoding (e.g., `'utf8'`) to read as a string.

### Deleting Files
- Use `fs.unlink()` (async) or `fs.unlinkSync()` (sync) to delete files.

## Modules in Node.js

- Node.js code is organized into modules for better structure and reusability.
- Use `require()` to import built-in, third-party, or custom modules.
- Use `module.exports` or `exports` to expose functionality from a module.

## Best Practices

- Prefer asynchronous methods to avoid blocking the event loop.
- Always handle errors in callbacks or try-catch blocks.
- Be cautious with file paths and user input for security.

---
```