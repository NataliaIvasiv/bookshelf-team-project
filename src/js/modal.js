export function createModalMarkup(FROM_SERVER, FROM_LS) {
  const markup = `<div class="modal-background">
    <div class="modal-content-container">
    <button type="button" class="modal-close-btn"><img src="" class="modal-close-btn"/></button>
    <img src="${FROM_SERVER.book_image}" class="modal-book-image" />
    <div class="modal-book-info">
    <h3 class="modal-title">${FROM_SERVER.title}</h3>
    <p class="modal-author">${FROM_SERVER.author}</p>
    <p class="modal-description">${FROM_SERVER.description}</p>
    <ul class="modal-shops-list">
    <li class="modal-shops-item"><a href="${FROM_SERVER.buy_links[0].url}"><img src="AMAZON"/></a></li>
    <li class="modal-shops-item"><a href="${FROM_SERVER.buy_links[1].url}"><img src="APPLE BOOKS"/></a></li>
    </ul>
    <button type="button" class="modal-btn">${FROM_LS}</button>
    </div>
    </div>
    </div>`.join('\n');
  return markup;
}

export function pushMarkup(markup) {
  document.body.insertAdjacentHTML('beforebegin', markup);
}
