import { mainBooksTemplate } from "./category-template";  
import { refs } from './refs'

export function renderCategoriesMain(books) {
    const markupMain = mainBooksTemplate(books);
    refs.allCategoriesContainer.insertAdjacentHTML('beforeend', markupMain);
  }
  
export function bookTitle(selectedCategory) {
  if (selectedCategory.textContent !== 'All categories') {
    const markupBookTitle = `<h2 class="title-book-section">${selectedCategory.textContent}</h2>`;
    refs.allCategoriesContainer.insertAdjacentHTML('beforeend', markupBookTitle)
    console.log(markupBookTitle);
  
    applyLastWordStyle();
    console.log('ok')
  }
}

export function applyLastWordStyle() {
  const elements = document.querySelectorAll('.title-book-section');
  elements.forEach(function(element) {
    const text = element.textContent.trim();
    const lastWordIndex = text.lastIndexOf(' ');
    const html = text.slice(0, lastWordIndex) + '<span class="last-word">' + text.slice(lastWordIndex) + '</span>';
    element.innerHTML = html;
  });
};