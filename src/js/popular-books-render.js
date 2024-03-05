import { applyLastWordStyle, bookTitle, renderCategoriesMain } from "./category-render-function";
import { booksAPI } from './booksAPI'
import {refs} from './refs'
import './izitoast';
import { emptyPage } from "./izitoast";



const booksApi = new booksAPI();

//render ALL CATEGORY

export async function renderPopularBooks(selectedCategory){
if (selectedCategory.textContent === 'All categories' || selectedCategory === 'All categories')  {
  addPopularMainTitle('Best Sellers Books');  
  let popularBooks;
  try {
    popularBooks = await booksApi.getPopularBooks();
    } catch (err) {
    console.log('error');
    emptyPage();
    }
    const bestSellersMarkup = popularBooks.map((item) => {
      return `
      <h3 class="book-author popular-title">${item.list_name}</h3>
<ul class="all-categories-main">` +
        item.books
          .map((book) => {
            const { book_image, title, author, _id } = book;
       
            return `<li class="book-item" data-id="${_id}">
       <div class="book-item-container">
           <div class="book-card-container"> 
            <img class="book-card" src="${book_image}" alt="${title}">
               <p class="book-card-hover-text">QUICK VIEW</p>
           </div>
           <div class="book-details">
               <p class="book-title">${title}</p>
               <p class="book-author">${author}</p>
           </div>
       </div>
  </li>`;
          }).join('') +
        `</ul>` + `<button class='see-more-btn' id='${item.list_name}'>See more</button>`
    }).join('');
    refs.allCategoriesContainer.insertAdjacentHTML('beforeend', bestSellersMarkup)
    
    }
}
    


export function addPopularMainTitle(selectedCategory) {
  const markupTitle = `<h2 class="title-book-section">${selectedCategory}</h2>`;
  refs.allCategoriesContainer.insertAdjacentHTML('afterbegin', markupTitle )
  applyLastWordStyle();
}

