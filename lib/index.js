// import { DateTime } from 'luxon';
import BookList from './constructor.js';
import { setupNavigation } from './navigation.js';

setupNavigation();

const myBooks = new BookList();

if (localStorage.getItem('addBook') !== null) {
  const json = localStorage.getItem('addBook');
  myBooks.books = JSON.parse(json);
  myBooks.updateList(0);
}

// const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
// console.log(now);
