import { pushSuccessTextMarkup } from './modal';
import {refs} from './refs'
export function toggleShoppingList(book) {
  const modalButton = document.querySelector('.modal-btn');

  let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
  let btnTextContent;

  const bookIndex = shoppingList.findIndex(item => book._id === item._id);

  if (bookIndex === -1) {
    shoppingList.push(book);
    btnTextContent = 'remove from shopping list';
  } else {
    shoppingList.splice(bookIndex, 1);
    btnTextContent = 'add to shopping list';
  }

  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
  modalButton.textContent = btnTextContent;
}

export function checkBookStatus(book) {
  const modalButton = document.querySelector('.modal-btn');
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
