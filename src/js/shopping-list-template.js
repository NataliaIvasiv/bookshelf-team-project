import amazon1x from '../img/amazon-1x.png';
import amazon2x from '../img/amazon-2x.png';
import amazon3x from '../img/amazon-3x.png';
import book1x from '../img/book-1x.png';
import book2x from '../img/book-2x.png';
import book3x from '../img/book-3x.png';

export function createBookMarkup(bookData) {
  const {
    _id: bookId,
    book_image: bookImage,
    title,
    list_name: categoryName,
    description,
    author,
    buy_links: [amazon, apple_books],
  } = bookData;

  const markupOfBook = ` 
    <li data-id="${bookId}" class="shopping-list-li-item">
      <div class="shopping-list-book-item">
        <img
          class="shopping-list-book-img"
          src="${bookImage}"
          alt="Image of ${title}"
        />
        <div class="shopping-list-book-text">
          <h2 class="shopping-list-book-title">${title}</h2>
          <p class="shopping-list-book-category">${categoryName}</p>
          <p class="shopping-list-book-description">${
            description || 'Description is empty'
          }</p>
          <p class="shopping-list-book-author">${author}</p>
          <div class="shopping-list-book-links">
          <a class="test-link" href="${amazon.url}" target="_blank">
              <img width="32" height="11" class="shopping-list-amazon" srcset="
              ${amazon1x} 1x,
              ${amazon2x} 2x,
              ${amazon3x} 3x
            " src="${amazon1x}" alt="${amazon.name}" />
          </a>
          <a class="test-link" href="${apple_books.url}" target="_blank">
              <img width="16" height="16" class="shopping-list-apple" srcset="
              ${book1x} 1x,
              ${book2x} 2x,
              ${book3x} 3x" src="${book1x}" alt="${apple_books.name}" />
          </a>
      </div>      
          <button data-id="${bookId}" class="shopping-list-dlt-book-btn" >         
            <svg class="shopping-list-dlt-book-btn-icon" width="16" height="16"><use href="../img/symbol-defs.svg#icon-trash1"></use></svg>
          </button>
        </div>
      </div>
    </li>`;

  return markupOfBook;
}
