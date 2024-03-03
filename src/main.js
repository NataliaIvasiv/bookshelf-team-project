import axios from 'axios';
import iziToast from 'izitoast';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { booksAPI } from './js/booksAPI';
// import './js/category-render-function';
// import { mainBooksTemplate } from './js/category-template';
import {
  toggleShoppingList,
  checkBookStatus,
} from './js/localStorageFunctions';
import { createModalMarkup, pushMarkup, hideModal } from './js/modal';
import './js/refs';
import './js/themes';
import './js/shopping-list-render-function';
import './js/shopping-list-template';
import './js/header';
import './js/categories-list-render';
import { renderCategoriesList } from './js/categories-list-render';
import { renderCategoriesMain } from './js/category-render-function';
import './js/popular-books-render';
import { refs } from './js/refs';
const booksApi = new booksAPI();

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

// should delete later
const categoriesListMain = document.querySelector('.categories-list-main');

categoriesListMain.addEventListener('click', onCatListClick);

async function onCatListClick(e) {
  e.preventDefault();
  let books;
  refs.categoriesMain.innerHTML = '';
  if (e.target === e.currentTarget) return;
  selectedCategory = e.target.closest('li');
  if (selectedCategory.textContent === 'All categories')  {
    try {
      const popularBooks = await booksApi.getPopularBooks();
      console.log(popularBooks)
      const popArray = popularBooks.map((book)=> book.books)
      popArray.map((book)=>renderCategoriesMain(book));
      console.log(popArray)
    } catch (err) {
      console.log('error');
    }
  }
  try {
    books = await booksApi.getSelectedCategory(selectedCategory.textContent);
  } catch (err) {
    console.log('error');
  }
console.log(books)
  renderCategoriesMain(books);
}

// ================modal================

const booksList = document.querySelector('.all-categories-main');
booksList.addEventListener('click', async e => {
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
    hideModal();
  });
});

// =====================================
