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
              <img width="32" height="11" class="shopping-list-amazon" src="../img/amazon-l.png" alt="${
                amazon.name
              }" />
          </a>
          <a class="test-link" href="${apple_books.url}" target="_blank">
              <img width="16" height="16" class="shopping-list-apple" src="../img/apple-l.png" alt="${
                apple_books.name
              }" />
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
