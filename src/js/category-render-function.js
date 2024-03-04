import { mainBooksTemplate } from "./category-template";  
import {refs} from './refs'
export function renderCategoriesMain(books) {
      
    
    const markupMain = mainBooksTemplate(books);
    
    //refs.categoriesMainTitle.insertAdjacentElement('beforeend', markupMainTitle)
    refs.categoriesMain.insertAdjacentHTML('beforeend', markupMain);
  }
 
           
       