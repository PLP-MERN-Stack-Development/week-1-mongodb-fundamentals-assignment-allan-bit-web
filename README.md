[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19741324&assignment_repo_type=AssignmentRepo)
# MongoDB Fundamentals Assignment

This assignment focuses on learning MongoDB fundamentals including setup, CRUD operations, advanced queries, aggregation pipelines, and indexing.

## Assignment Overview

You will:
1. Set up a MongoDB database
2. Perform basic CRUD operations
3. Write advanced queries with filtering, projection, and sorting
4. Create aggregation pipelines for data analysis
5. Implement indexing for performance optimization

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install MongoDB locally or set up a MongoDB Atlas account
4. Run the provided `insert_books.js` script to populate your database
5. Complete the tasks in the assignment document

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions
- `insert_books.js`: Script to populate your MongoDB database with sample book data

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (mongosh) or MongoDB Compass

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all tasks in the assignment
2. Add your `queries.js` file with all required MongoDB queries
3. Include a screenshot of your MongoDB database
4. Update the README.md with your specific setup instructions

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/)

# PLP Bookstore MongoDB Scripts

This directory contains scripts to help you populate and query a sample MongoDB database for a bookstore.

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) running locally on `mongodb://localhost:27017` (or update the URI in the scripts if using a different setup)
- Install dependencies (if any):
  ```sh
  npm install mongodb
  ```

## Scripts

### 1. Populate the Database

Use `insert_books.js` to insert sample book data into the `plp_bookstore` database:

```sh
node insert_books.js
```

This will:
- Connect to your MongoDB instance
- Drop the `books` collection if it exists
- Insert sample book data
- Display the inserted books

### 2. Run Book Queries

Use `test_queries.js` to run example queries on the `books` collection:

```sh
node test_queries.js
```

This will:
- Find and display all books
- Find books by a specific author
- Find books published after a certain year
- Find books in a specific genre
- Find in-stock books

You can modify `test_queries.js` to run custom queries or display results differently.

## Custom Queries

To use the query functions in your own scripts, import them from `queries.js`:

```js
const { findAllBooks, findBooksByAuthor, ... } = require('./queries');
```

---

If you have any issues or want to connect to a remote MongoDB instance, update the `uri` variable in the scripts accordingly. 