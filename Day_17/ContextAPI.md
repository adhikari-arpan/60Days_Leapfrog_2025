## React Context API: Basic Theory

The React Context API provides a way to share values like data or functions across the entire component tree without having to pass props manually at every level. This helps solve the problem of "prop drilling," where you have to pass data through many layers of components just to reach a deeply nested child.

### When to Use Context

- Use Context when some data needs to be accessible by many components at different nesting levels, such as user authentication status, theme, or language preferences.
- Context is best for global state that rarely changes or is needed by many components, rather than for all state management needs.

### Core Concepts

- **Context Object**: Created using `React.createContext()`, it acts as a container for the data you want to share.
- **Provider**: The `Provider` component wraps part of your component tree and supplies the context value to all its descendants.
- **Consumer / useContext Hook**: Components can access the context value using the `useContext` hook (or the `Consumer` component in class-based components).

### How It Works

1. **Create Context**:  
   Use `createContext` to define a context object, optionally with a default value.
2. **Provide Context**:  
   Wrap your components in the context's `Provider` and pass the value you want to share.
3. **Consume Context**:  
   Any descendant component can access the context value using `useContext` (for function components) or `contextType` (for class components).

### Example Use Cases

- Theme switching (light/dark mode)
- User authentication data
- Language localization
- Sharing configuration or settings globally

### Summary Table

| Concept   | Description                                                                 |
|-----------|-----------------------------------------------------------------------------|
| Context   | Container for shared data or functions                              |
| Provider  | Supplies the context value to all child components               |
| Consumer  | Accesses the context value within any descendant component        |

The Context API is a lightweight solution for global state management in React, making your code cleaner and reducing the need for prop drilling.