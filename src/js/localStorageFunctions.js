export function toggleShoppingList(book) {
  let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
  let btnTextContent;

  const bookIndex = shoppingList.findIndex(item => book._id === item._id);

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


export function checkBookStatus(book) {
    let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
    let btnTextContent;

    const bookIndex = shoppingList.findIndex(item => book._id === item._id);

    if (bookIndex === -1) {
      btnTextContent = 'add to shopping list';
    } else {
      btnTextContent = 'remove from shopping list';
    }

    modalButton.textContent = btnTextContent;
}