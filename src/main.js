import axios from 'axios';
import iziToast from 'izitoast';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { booksAPI } from './js/booksAPI';
import './js/category-render-function';
import './js/category-template';
import './js/localStorageFunctions';
import './js/modal';
import './js/refs';
import './js/themes';
import './js/shopping-list-render-function';
import './js/shopping-list-template';
import './js/header';
import './js/categories-list-render';
import { renderCategoriesList } from './js/categories-list-render';

const booksApi = new booksAPI();

booksApi.getSelectedCategory('Advice How-To and Miscellaneous');
booksApi.getBookDetailedInfo('643282b1e85766588626a080');
booksApi.getCategoriesList();

// categories-list**************************************8

async function addCategoriesList() {
  const books = await booksApi.getCategoriesList();
  renderCategoriesList(books);
}

addCategoriesList();

let selectedCategory;
// should delete later

// ================modal================

const booksList = document.querySelector('.categories-list-main');
booksList.addEventListener('click', async e => {
  if (e.target === e.currentTarget) return;
  const bookId = e.target.dataset.id;
  const book = await booksApi.getBookDetailedInfo(bookId);
  const markup = createModalMarkup(book);
  pushMarkup(markup);

  const modalBtn = document.querySelector('.modal-btn');
    checkBookStatus(book);
    modalBtn.addEventListener('click', elem => {
        elem.preventDefault()
        toggleShoppingList(book);
    })
});

// =====================================
