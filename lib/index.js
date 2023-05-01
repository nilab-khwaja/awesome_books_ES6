import { DateTime } from '../node_modules/luxon/src/luxon.js';
import BookList from './constructor.js';
import { setupNavigation } from './navigation.js';

setupNavigation();

const myBooks = new BookList();

if (localStorage.getItem('addBook') !== null) {
  const json = localStorage.getItem('addBook');
  myBooks.books = JSON.parse(json);
  myBooks.updateList(0);
}

const now = DateTime.now();
const formattedDate = now.toLocaleString(DateTime.DATETIME_FULL);

document.getElementById('date').innerHTML = formattedDate;
