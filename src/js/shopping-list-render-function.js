import { refs } from './refs';
import { createBookMarkup } from './shopping-list-template';

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
          <img class="shopping-list-empty-img" src="../img/empty-sl.png" alt="Books in empty section"/>
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
