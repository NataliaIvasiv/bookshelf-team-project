import { mainBooksTemplate } from "./category-template";  
import { refs } from './refs'

export function renderCategoriesMain(books) {
      
    const markupMain = mainBooksTemplate(books);
    refs.categoriesMain.insertAdjacentHTML('beforeend', markupMain);
  }
  
export function bookTitle(selectedCategory) {
  const markupBookTitle = `${selectedCategory.textContent}`;
  refs.categoriesMainTitle.insertAdjacentHTML('beforeend', markupBookTitle)
}