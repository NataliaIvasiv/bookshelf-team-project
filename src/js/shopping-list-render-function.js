import { createBookMarkup } from './shopping-list-template';

const shoppingListContainer = document.querySelector('.shopping-list');

export function createEmptyBackground() {
  return `
      <div class="container  shopping-list-container">
        <div class="shopping-list-empty-container">
          <p class="shopping-list-empty-paragraph">This page is empty, add some books and proceed to order.</p>
          <img class="shopping-list-empty-img" src="" alt="Books in empty section"/>
        </div>
      </div>`;
}

export function createShoppingListMarkup(arrayOfBooks) {
  if (arrayOfBooks.length === 0) {
    return createEmptyBackground();
  }

  return arrayOfBooks.map(item => createBookMarkup(item)).join('');
}

if (shoppingListContainer) {
  shoppingListContainer.insertAdjacentHTML(
    'beforeend',
    createShoppingListMarkup([])
  );
}
