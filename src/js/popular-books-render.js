import { bookTitle, renderCategoriesMain } from "./category-render-function";
import { booksAPI } from './booksAPI'
import {refs} from './refs'
import './izitoast';
import { emptyPage } from "./izitoast";

const booksApi = new booksAPI();

export async function renderPopularBooks(selectedCategory){
if (selectedCategory.textContent === 'All categories' || selectedCategory === 'All categories')  {
  addPopularMainTitle('Best Sellers Books');  
  try {
      const popularBooks = await booksApi.getPopularBooks();
      popularBooks.map((item) => {
        popularTitleRender(item);
        addSeeButton();
        return
      })
    } catch (err) {
    console.log('error');
    emptyPage();
    }
    }
}
    
export function popularTitleTemplate (item) {
    return `<li class="li-title"><h3 class="book-author popular-title">${item.list_name}</h3></li>`;
}

export function popularTitleRender(item) {
    refs.categoriesMain.insertAdjacentHTML('beforeend', popularTitleTemplate(item))
        renderCategoriesMain(item.books)

}

export function addPopularMainTitle(selectedCategory) {
  const markupTitle = `${selectedCategory}`;
  refs.categoriesMainTitle.insertAdjacentHTML('afterbegin', markupTitle )
}

function addSeeButton() {
  const buttonMarkup = `<button class='see-more-btn'>See more</button>`;
  refs.categoriesMain.insertAdjacentHTML('beforeend', buttonMarkup)
}

// const seeMoreButton = document.querySelector('.see-more-btn')
// seeMoreButton.addEventListener('click', onSeeMoreButton)
