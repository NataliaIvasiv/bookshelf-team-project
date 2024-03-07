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
import {
  createModalMarkup,
  pushMarkup,
  hideModal,
  successTextMarkup,
} from './js/modal';
import './js/themes';
import './js/shopping-list-render-function';
import './js/shopping-list-template';
import './js/header';
import './js/categories-list-render';
import {
  addCategoriesList,
  homeOnLoad,
  renderCategoriesList,
} from './js/categories-list-render';
import {
  bookTitle,
  bookTitleSeeMore,
  renderCategoriesMain,
} from './js/category-render-function';
import {
  addPopularMainTitle,
  renderPopularBooks,
} from './js/popular-books-render';
import { refs } from './js/refs';
import './js/mob-menu';
import './js/modal-sign-up';
import './js/izitoast';
import { emptyPage } from './js/izitoast';
import './js/support';
import './js/scroll-up';
import { hideLoader, showLoader} from'./js/loader';

const booksApi = new booksAPI();

let selectedCategory;

window.addEventListener('load', async () => {
  showLoader();
  await addCategoriesList();
  
  await renderPopularBooks('All categories');
  hideLoader();
  
});

refs.categoriesListMain.addEventListener('click', onCatListClick);
async function onCatListClick(e) {
  e.preventDefault();
  let books;
  
  refs.allCategoriesContainer.innerHTML = '';

  if (e.target === e.currentTarget) return;
  selectedCategory = e.target.closest('li');
  highlightSelectedCategory(selectedCategory);
  
  await renderPopularBooks(selectedCategory);


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
  for (const item of items) {
    if (item.textContent === selectedCategory.textContent)
      item.classList.add('categories-list-active');
    else item.classList.remove('categories-list-active');
  }
}

// ================ALL BOOKS CONTAINER EVENT LISTENER================

//==================  SEE MORE BUTTONS =================
refs.allCategoriesContainer.addEventListener('click', async e => {
  if (e.target.nodeName == 'H2') return;
  if (e.target.nodeName == 'BUTTON') {
    refs.allCategoriesContainer.innerHTML = '';
    const selectedSeeMore = e.target.closest('.see-more-btn').dataset.id;
    let books;
    try {
      books = await booksApi.getSelectedCategory(selectedSeeMore);
      bookTitleSeeMore(selectedSeeMore);
      renderCategoriesMain(books);
    } catch (err) {
      console.log('error');
      emptyPage();
    }
  } else {
    //=========================modal================================
    const bookId = e.target.closest('.book-item').dataset.id;
    const book = await booksApi.getBookDetailedInfo(bookId);

    const markup = createModalMarkup(book);
    pushMarkup(markup);
    document.body.style.overflow = 'hidden';
    checkBookStatus(book);
    const modalButton = document.querySelector('.modal-btn');

    modalButton.addEventListener('click', elem => {
      elem.preventDefault();
     successTextMarkup()

      toggleShoppingList(book);
    });
    hideModal();
  }
});

// =====================================
