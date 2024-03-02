export function createModalMarkup(FROM_SERVER) {
  const markup = `<div class="modal-backdrop">
    <div class="modal-content-container">
    <button type="submit" class="modal-close-btn"><img src="../img/symbol-defs.svg#icon-x-close" class="modal-close-btn"/></button>
    <img src="${FROM_SERVER.book_image}" class="modal-book-image" />
    <div class="modal-book-info">
    <h3 class="modal-title">${FROM_SERVER.title}</h3>
    <p class="modal-author">${FROM_SERVER.author}</p>
    <p class="modal-description">${FROM_SERVER.description}</p>
    <ul class="modal-shops-list">
    <li class="modal-shops-item"><a href="${FROM_SERVER.buy_links[0].url}"><img src="AMAZON"/></a></li>
    <li class="modal-shops-item"><a href="${FROM_SERVER.buy_links[1].url}"><img src="APPLE BOOKS"/></a></li>
    </ul>
    <button type="submit" class="modal-btn"></button>
    </div>
    </div>
    </div>`;
  // return markup;
  pushMarkup(markup);
}

export function pushMarkup(markup) {
  document.body.insertAdjacentHTML('beforeend', markup);
}

export function hideModal() {
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const modalCloseBtn = document.querySelector('.modal-close-btn');

  document.addEventListener('keydown', event => {
    event.preventDefault();
    if (event.key === 'Escape') {
      removeListeners();
    }
  });

  modalCloseBtn.addEventListener('click', event => {
    event.preventDefault();
    removeListeners();
  });

  modalBackdrop.addEventListener('click', event => {
    event.preventDefault();
    if (event.target === modalBackdrop) {
      removeListeners();
    }
  });
}

export function removeListeners() {
  const modalBackdrop = document.querySelector('.modal-backdrop');

  modalBackdrop.parentNode.removeChild(modalBackdrop);

  document.removeEventListener('keydown', e => {
    console.log('listener is remove');
  });
  modalCloseBtn.removeEventListener('click', e => {
    console.log('listener is remove');
  });
  modalBackdrop.removeEventListener('click', e => {
    console.log('listener is remove');
  });
}
