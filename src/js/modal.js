function createModalMarkup(FROM_SERVER) {
  return `<div class="modal-background">
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
    </div>`;
}


// 1 4 5 7 8 11-12 14