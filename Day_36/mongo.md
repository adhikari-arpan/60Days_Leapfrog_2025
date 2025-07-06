# MongoDB Basics

## Introduction to MongoDB

- **MongoDB** is a popular NoSQL, document-oriented database.
- It stores data in **collections** (similar to tables in SQL) and **documents** (similar to rows), using a flexible, JSON-like format called BSON.
- MongoDB is **schema-less**, allowing each document in a collection to have a different structure.
- It is designed for scalability, high performance, and ease of development.

## Key Concepts

| SQL Term      | MongoDB Term   | Description                                      |
|---------------|---------------|--------------------------------------------------|
| Database      | Database      | Container for collections                        |
| Table         | Collection    | Group of related documents                       |
| Row           | Document      | Individual record, stored as BSON/JSON           |
| Column        | Field         | Key-value pair inside a document                 |

## Theory Behind the Commands

### 1. `show dbs`
- **Purpose:** Lists all databases present on the MongoDB server.
- **Usage:** Helps you see what databases are available to work with.

### 2. `use `
- **Purpose:** Switches the current working database to ``. If the database does not exist, it will be created when you first store data in it.
- **Usage:** All subsequent commands will operate on the selected database.

### 3. `show collections`
- **Purpose:** Lists all collections (similar to tables) in the current database.
- **Usage:** Useful for viewing the structure of your database.

### 4. `db.createCollection("collectionName")`
- **Purpose:** Explicitly creates a new collection named `"collectionName"`.
- **Theory:** 
  - MongoDB can create collections automatically when you insert the first document, but `createCollection()` is used when you want to set specific options or ensure the collection exists before inserting data[1][2][3].
  - Syntax:  
    ```shell
    db.createCollection("test1")
    ```
  - Returns `{ ok: 1 }` if successful.

### 5. `db.collection.insertOne({ ... })`
- **Purpose:** Inserts a single document into the specified collection.
- **Theory:**
  - The document is a JSON-like object.
  - If the collection does not exist, MongoDB creates it automatically[4][5][6].
  - If you forget to put quotes around string values, you get a ReferenceError (e.g., `name: Arpan` instead of `name: "Arpan"`).
  - Example:
    ```shell
    db.test1.insertOne({name: "Arpan", age: 18})
    ```
  - Returns an object with `acknowledged: true` and the `insertedId` of the new document.

### 6. `db.collection.find()`
- **Purpose:** Retrieves all documents from the specified collection.
- **Theory:**
  - Returns an array of documents.
  - If no query is provided, all documents are returned[7][8][9].
  - Example:
    ```shell
    db.test1.find()
    ```
  - Output will show all documents in `test1` collection.

## Example Session

```shell
show dbs
use arpan
db.createCollection("test1")
db.test1.insertOne({name: "Arpan", age: 18})
db.test1.find()
```
