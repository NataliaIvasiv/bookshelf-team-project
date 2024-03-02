import { mainBooksTemplate } from "./category-template";  

export function renderCategoriesMain(books) {
      const categoriesMain = document.querySelector('.all-categories-main');
      const markupMain = mainBooksTemplate(books);
      categoriesMain.insertAdjacentHTML('beforeend', markupMain);
  }
 
           
       