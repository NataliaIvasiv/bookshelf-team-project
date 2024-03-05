import { refs } from './refs';
import { createBookMarkup } from './shopping-list-template';
import photobooksx1 from '../img/books-1x.png';
import photobooksx2 from '../img/books-2x.png';
import photobooksx3 from '../img/books-3x.png';

function getBooksDataFromLocalStorage() {
  const booksDataJSON = localStorage.getItem('shoppingList');

  return booksDataJSON ? JSON.parse(booksDataJSON) : [];
}

function setShoppingListLocaleStorage(shoppingList) {
  const booksJSON = JSON.stringify(shoppingList);
  localStorage.setItem('shoppingList', booksJSON);
}

function removeBookFromLocalStorage(bookId) {
  const currentState = getBooksDataFromLocalStorage();
  const updatedState = currentState.filter(book => book._id !== bookId);
  setShoppingListLocaleStorage(updatedState);
}

function shoppingListEmptyStateMarkup() {
  return `
      <div class="container  shopping-list-container">
        <div class="shopping-list-empty-container">
          <p class="shopping-list-empty-paragraph">This page is empty, add some books and proceed to order.</p>
          <img class="shopping-list-empty-img" srcset="
          ${photobooksx1} 1x,
          ${photobooksx2} 2x,
          ${photobooksx3} 3x
        " src="${photobooksx1}" alt="Books in empty section"/>
        </div>
      </div>`;
}

function createShoppingListMarkup(arrayOfBooks) {
  if (arrayOfBooks.length === 0) {
    return shoppingListEmptyStateMarkup();
  }

  return arrayOfBooks.map(item => createBookMarkup(item)).join('');
}

function renderShoppingListPage() {
  const booksData = getBooksDataFromLocalStorage();

  refs.shoppingListContainer.innerHTML = '';
  refs.shoppingListContainer.insertAdjacentHTML(
    'beforeend',
    createShoppingListMarkup(booksData)
  );

  // Add listeners for delete buttons
  const deleteButtons = refs.shoppingListContainer.querySelectorAll(
    '.shopping-list-dlt-book-btn'
  );

  deleteButtons.forEach(button => {
    button.addEventListener('click', event => {
      const bookId = event.target.attributes['data-id'].value;
      removeBookFromLocalStorage(bookId);
      renderShoppingListPage();
    });
  });
}

if (refs.shoppingListContainer) {
  renderShoppingListPage();
}
