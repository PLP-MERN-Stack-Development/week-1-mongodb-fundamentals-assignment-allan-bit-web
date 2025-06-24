const {
  findAllBooks,
  findBooksByAuthor,
  findBooksPublishedAfter,
  findBooksByGenre,
  findInStockBooks,
} = require('./queries');

async function runQueries() {
  console.log('All books:');
  console.log(await findAllBooks());

  console.log('\nBooks by George Orwell:');
  console.log(await findBooksByAuthor('George Orwell'));

  console.log('\nBooks published after 1950:');
  console.log(await findBooksPublishedAfter(1950));

  console.log('\nBooks in Fiction genre:');
  console.log(await findBooksByGenre('Fiction'));

  console.log('\nIn-stock books:');
  console.log(await findInStockBooks());
}

runQueries().catch(console.error); 