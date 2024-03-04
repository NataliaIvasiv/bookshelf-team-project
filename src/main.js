import axios from 'axios';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { booksAPI } from './js/booksAPI';
import {
  toggleShoppingList,
  checkBookStatus,
} from './js/localStorageFunctions';
import { createModalMarkup, pushMarkup, hideModal } from './js/modal';
import './js/themes';
import './js/shopping-list-render-function';
import './js/shopping-list-template';
import './js/header';
import './js/categories-list-render';
import { renderCategoriesList } from './js/categories-list-render';
import { bookTitle, renderCategoriesMain } from './js/category-render-function';
import {addPopularMainTitle, renderPopularBooks} from './js/popular-books-render';
import { refs } from './js/refs';
import './js/mob-menu';
import './js/modal-sign-up';
import './js/izitoast';
import { showError } from './js/izitoast';


const booksApi = new booksAPI();

// *******************header***************************


// categories-list**************************************

async function addCategoriesList() {
  let books;
  try {
    books = await booksApi.getCategoriesList();
  } catch (err) {
    console.log(err);
    return;
  }
  renderCategoriesList(books);
}

addCategoriesList();


// all-categories*******************************************
let selectedCategory;

window.addEventListener("load", renderPopularBooks('All categories'));

refs.categoriesListMain.addEventListener('click', onCatListClick);
async function onCatListClick(e) {
  e.preventDefault();
  let books;

  refs.categoriesMain.innerHTML = '';
  refs.categoriesMainTitle.innerHTML = '';

  if (e.target === e.currentTarget) return;
  selectedCategory = e.target.closest('li');
  highlightSelectedCategory(selectedCategory);
  renderPopularBooks(selectedCategory);

 
  try {
    books = await booksApi.getSelectedCategory(selectedCategory.textContent);
    
  } catch (err) {
    console.log('error');
    emptyPage();
  }
    bookTitle(selectedCategory);
  renderCategoriesMain(books, selectedCategory);
}


function highlightSelectedCategory(selectedCategory) {
  const items = document.querySelectorAll('.categories-list-item');
  console.log(items);
  for (const item of items) {
  if (item.textContent === selectedCategory.textContent)
      item.classList.add('categories-list-active');
    else
      item.classList.remove('categories-list-active');
}
}
// ================modal================

refs.categoriesMain.addEventListener('click', async e => {
  if (e.target === e.currentTarget) return;

  const bookId = e.target.closest('.book-item').dataset.id;

  // console.log(bookId);
  const book = await booksApi.getBookDetailedInfo(bookId);
//   console.log(book);

  const markup = createModalMarkup(book);
  pushMarkup(markup);

  checkBookStatus(book);
  const modalButton = document.querySelector('.modal-btn');

  modalButton.addEventListener('click', elem => {
      elem.preventDefault();
      
    toggleShoppingList(book);
  });
    hideModal();

});

// =====================================
