import { renderCategoriesMain } from "./category-render-function";
import { booksAPI } from './booksAPI'
import {refs} from './refs'

const booksApi = new booksAPI();
export async function renderPopularBooks(selectedCategory){
if (selectedCategory.textContent === 'All categories' || selectedCategory === 'All categories')  {
    try {
      const popularBooks = await booksApi.getPopularBooks();
      console.log(popularBooks);
      popularBooks.map((item) => {
          popularTitleRender(item);
        return
      })
    } catch (err) {
      console.log('error');
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