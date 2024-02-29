export function createModalMarkup(FROM_SERVER) {
  const markup = `<div class="modal-background">
    <div class="modal-content-container">
    <button type="button" class="modal-close-btn"><img src="" class="modal-close-btn"/></button>
    <img src="${FROM_SERVER}" class="modal-book-image" />
    <div class="modal-book-info">
    <h3 class="modal-title">${FROM_SERVER}</h3>
    <p class="modal-author">${FROM_SERVER}</p>
    <p class="modal-description">${FROM_SERVER}</p>
    <ul class="modal-shops-list">
    <li class="modal-shops-item"></li>
    <li class="modal-shops-item"></li>
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
