// queries.js - Functions to perform queries on the 'books' collection in MongoDB

const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'plp_bookstore';
const collectionName = 'books';

async function withCollection(callback) {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    return await callback(collection);
  } finally {
    await client.close();
  }
}

// 1. Find all books
async function findAllBooks() {
  return withCollection(async (collection) => {
    return await collection.find({}).toArray();
  });
}

// 2. Find books by a specific author
async function findBooksByAuthor(author) {
  return withCollection(async (collection) => {
    return await collection.find({ author }).toArray();
  });
}

// 3. Find books published after a certain year
async function findBooksPublishedAfter(year) {
  return withCollection(async (collection) => {
    return await collection.find({ published_year: { $gt: year } }).toArray();
  });
}

// 4. Find books in a specific genre
async function findBooksByGenre(genre) {
  return withCollection(async (collection) => {
    return await collection.find({ genre }).toArray();
  });
}

// 5. Find in-stock books
async function findInStockBooks() {
  return withCollection(async (collection) => {
    return await collection.find({ in_stock: true }).toArray();
  });
}

module.exports = {
  findAllBooks,
  findBooksByAuthor,
  findBooksPublishedAfter,
  findBooksByGenre,
  findInStockBooks,
}; 