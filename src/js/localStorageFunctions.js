export function toggleShoppingList(book) {
  const modalButton = document.querySelector('.modal-btn');
  let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
  let btnTextContent;

  const bookIndex = shoppingList.findIndex(item => book.id === item.id);

  if (bookIndex === -1) {
    shoppingList.push(book);
    btnTextContent = 'add to shopping list';
  } else {
    shoppingList.splice(bookIndex, 1);
    btnTextContent = 'remove from shopping list';
  }

  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
  modalButton.textContent = btnTextContent;
}
