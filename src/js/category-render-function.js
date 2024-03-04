import { mainBooksTemplate } from "./category-template";  
import { refs } from './refs'

export function renderCategoriesMain(books) {
  applyLastWordStyle();
    const markupMain = mainBooksTemplate(books);
    refs.categoriesMain.insertAdjacentHTML('beforeend', markupMain);
  }
  
export function bookTitle(selectedCategory) {
  const markupBookTitle = `${selectedCategory.textContent}`;
  refs.categoriesMainTitle.insertAdjacentHTML('beforeend', markupBookTitle)
}

function applyLastWordStyle() {
  const elements = document.querySelectorAll('.title-book-section');
  elements.forEach(function(element) {
    const text = element.textContent.trim();
    const lastWordIndex = text.lastIndexOf(' ');
    const html = text.slice(0, lastWordIndex) + '<span class="last-word">' + text.slice(lastWordIndex) + '</span>';
    element.innerHTML = html;
  });
};