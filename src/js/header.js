// add import of refs from refs.js

//  this should be forwarded to refs.js
const listItems = document.querySelectorAll('.nav-list-item');
const currentPage = window.location.href;
let link;

// function itself should be imported to main.js
export function changeNavBgColor() {
  function removeAllCurrentPageClasses() {
    listItems.forEach(item => item.classList.remove('current-page'));
  }

  function setCurrentPageClass(link) {
    if (link && link.href === currentPage) {
      link.closest('.nav-list-item').classList.add('current-page');
    }
  }

  function clickHandler(event) {
    removeAllCurrentPageClasses();
    event.currentTarget.classList.add('current-page');
  }

  listItems.forEach(item => {
    link = item.querySelector('.nav-link');
    setCurrentPageClass(link);

    item.addEventListener('click', clickHandler);
  });
}

// function should be called in main.js
changeNavBgColor();