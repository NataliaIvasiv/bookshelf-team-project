const shoppingListContainer = document.querySelector('.shopping-list');

export function createShoppingListMarkup(arrayOfBooks) {
  let result;
  if (arrayOfBooks.length === 0) {
    result = createEmptyBackground();
  } else {
    const bookItems = arrayOfBooks.map(createBookMarkup).join('');
    result = `
      ${bookItems}
    `;
  }
  return result;
}

export function createEmptyBackground() {
  return `
      <div class="container  shopping-list-container">
        <div class="shopping-list-empty-container">
          <p class="shopping-list-empty-paragraph">This page is empty, add some books and proceed to order.</p>
          <img class="shopping-list-empty-img" src="" alt="Books in empty section"/>
        </div>
      </div>`;
}

shoppingListContainer.insertAdjacentHTML(
  'beforeend',
  createShoppingListMarkup([])
);
