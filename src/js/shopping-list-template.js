function createBookMarkup(bookData) {
  const {
    _id: bookId,
    book_image: bookImage,
    title,
    list_name: categoryName,
    description,
    author,
    buy_link: amazon,
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
            <a class="test-link" href="${amazon.url}">
              <svg width="32" height="11" class="shopping-list-amazon"><use href="${iconsSL}#icon-amazon"></use></svg>
            </a>
          </div>
          <button data-id="${bookId}" class="shopping-list-dlt-book-btn" >
            <svg class="shopping-list-dlt-book-btn-icon" width="16" height="16"><use href="${iconsSL}#icon-trash"></use></svg>
          </button>
        </div>
      </div>
    </li>`;

  return markupOfBook;
}
