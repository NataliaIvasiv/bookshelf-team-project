import { refs } from './refs';
export function createModalMarkup(FROM_SERVER) {
  const markup = `<div class="modal-backdrop">
    <div class="modal-content-container">
    <svg class="modal-close-btn" width="24" height="24"><use href="./img/symbol-defs.svg#icon-x-close1"></use></svg>
    <img src="${FROM_SERVER.book_image}" class="modal-book-image" />
    <div class="modal-book-info">
    <h3 class="modal-title">${FROM_SERVER.title}</h3>
    <p class="modal-author">${FROM_SERVER.author}</p>
    <p class="modal-description">${FROM_SERVER.description}</p>
    <ul class="modal-shops-list">
    <li class="modal-shops-item"><a class="test-link" href="${FROM_SERVER.buy_links[0].url}" target="_blank" rel="noopener noreferrer">
              <img width="32" height="11" class="shopping-list-amazon"  src="../img/amazon-1x.png" alt="amazon" />
          </a></li>
    <li class="modal-shops-item"><a class="test-link" href="${FROM_SERVER.buy_links[1].url}" target="_blank" rel="noopener noreferrer">
              <img width="16" height="16" class="shopping-list-apple"  src="../img/book-1x.png" alt="apple" />
          </a></li>
    </ul>
    </div>
    <button type="submit" class="modal-btn"></button>

    </div>
    </div>`;
  return markup;
  // pushMarkup(markup);
}

export function pushMarkup(markup) {
  document.body.insertAdjacentHTML('beforeend', markup);
}

export function hideModal() {
  const modalBackdrop = document.querySelector('.modal-backdrop');

  const modalCloseBtn = document.querySelector('.modal-close-btn');
  document.addEventListener('keydown', event => {
    // event.preventDefault();
    if (event.key === 'Escape') {
      removeListeners();
    }
  });

  modalCloseBtn.addEventListener('click', event => {
    // event.preventDefault();
    removeListeners();
  });

  modalBackdrop.addEventListener('click', event => {
    // event.preventDefault();
    if (event.target === modalBackdrop) {
      removeListeners();
    }
  });
}

export function removeListeners() {
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const modalCloseBtn = document.querySelector('.modal-close-btn');
  if (modalBackdrop && modalBackdrop.parentNode) {
    modalBackdrop.parentNode.removeChild(modalBackdrop);
  }

  if (modalCloseBtn) {
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
  document.body.style.overflow = null;
}

export function successTextMarkup() {
  const existingSuccessText = document.querySelector('.modal-success-text');
  const modalButton = document.querySelector('.modal-btn');

  if (!existingSuccessText) {
    if (
      modalButton.textContent.trim().toLowerCase() ===
      'remove from shopping list'
    )
      return;
    const successText = `<p class="modal-success-text">Congratulations! You have added the book to the shopping list.
       To delete, press the button "Remove from the shopping list".</p>`;

    pushSuccessTextMarkup(successText);
  }
}

export function pushSuccessTextMarkup(markup) {
  const modalWindow = document.querySelector('.modal-content-container');
  modalWindow.insertAdjacentHTML('beforeend', markup);
}
