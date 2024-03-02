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
import './js/localStorageFunctions';
import './js/modal';
import './js/refs';
import './js/themes';
import './js/shopping-list-render-function';
import './js/shopping-list-template';
import './js/header';
import './js/categories-list-render';
import { renderCategoriesList } from './js/categories-list-render';
import { renderCategoriesMain } from './js/category-render-function';

const booksApi = new booksAPI();


// categories-list**************************************

async function addCategoriesList() {
  const books = await booksApi.getCategoriesList();
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
    if (e.target === e.currentTarget) return;
    selectedCategory = e.target.closest('li');
    if (selectedCategory.textContent === 'All categories') {
        try {
            const popularBooks = await booksApi.getPopularBooks();
            console.log(popularBooks)
        }
        catch (err) {
            console.log('error');
        }
    }
    try {
        books = await booksApi.getSelectedCategory(selectedCategory.textContent);
    } catch(err) {
        console.log('error');
    }
   
   renderCategoriesMain(books);
}


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
hideModal()

// =====================================
