
import BookList from './constructor.js'; 
import { setupNavigation } from './navigation.js';
setupNavigation();
const myBooks = new BookList();
  
if (localStorage.getItem('addBook') !== null) {
 const json = localStorage.getItem('addBook');
 myBooks.books = JSON.parse(json);
 myBooks.updateList(0);
}
