export function createShoppingListMarkup(arrayOfBooks) {
  let result;
  if (arrayOfBooks.length === 0) {
    result = createEmptyBackground();
  } else {
    const bookItems = arrayOfBooks.map(createBookMarkup).join('');
    result = `
    <div class="container  shopping-list-container">
      <h2 class="shopping-list-title">Shopping <span class="shopging-list-title-span">List</span></h2>
      <ul class="shopping-list">${bookItems}</ul>
    </div>`;
  }
  return result;
}

export function createEmptyBackground() {
  return `
      <div class="container  shopping-list-container">
        <h2 class="shopping-list-title">Shopping <span class="shopping-list-title-span">List</span></h2>
        <div class="shopping-list-empty-container">
          <p class="shopping-list-empty-paragraph">This page is empty, add some books and proceed to order.</p>
          <img class="shopping-list-empty-img" src="" alt="Books in empty section"/>
        </div>
      </div>`;
}
