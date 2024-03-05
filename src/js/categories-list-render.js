import { booksAPI } from './booksAPI'
import './popular-books-render'
import { renderPopularBooks } from './popular-books-render';
const categoriesList = document.querySelector('.categories-list-main')
const booksApi = new booksAPI();

export function categoryListTemplate(books) {
    return books
        .map((book) => { return `<li class='categories-list-item'><a href="">${book.list_name}</a></li>` })
        .join('');
}

export function renderCategoriesList(books) {
    const markup = categoryListTemplate(books);
    categoriesList.insertAdjacentHTML('beforeend', markup);
}

export async function addCategoriesList() {
  let books;
  try {
    books = await booksApi.getCategoriesList();
  } catch (err) {
    console.log(err);
    return;
  }
  renderCategoriesList(books);
}
export function homeOnLoad() {
    addCategoriesList();
    renderPopularBooks('All categories')
}