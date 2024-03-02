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

// -----------------------------------------------

// burger menu

//  this should be forwarded to refs.js
const menuOpenBtn = document.querySelector('.burger-menu-open-btn');
const menuCloseBtn = document.querySelector('.burger-menu-close-btn');
const burgerMenu = document.querySelector('.burger-menu');

export function openMenu() {
  menuOpenBtn.style.display = 'none';
  menuCloseBtn.style.display = 'block';
  burgerMenu.style.display = 'block';
}
 export function closeMenu() {
  menuOpenBtn.style.display = 'block';
  menuCloseBtn.style.display = 'none';
  urgerMenu.style.display = 'none';
}

// event listeners will be forwarded to main.js
menuOpenBtn.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);
// end burger-menu
