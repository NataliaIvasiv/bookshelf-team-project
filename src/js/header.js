import { refs } from "./refs";

let link;

// function itself should be imported to main.js
export function changeNavBgColor() {
  function removeAllCurrentPageClasses() {
    refs.listItems.forEach(item => item.classList.remove('current-page'));
  }

  function setCurrentPageClass(link) {
    if (link && link.href === refs.currentPage) {
      link.closest('.nav-list-item').classList.add('current-page');
    }
  }

  function clickHandler(event) {
    removeAllCurrentPageClasses();
    event.currentTarget.classList.add('current-page');
  }

  refs.listItems.forEach(item => {
    link = item.querySelector('.nav-link');
    setCurrentPageClass(link);

    item.addEventListener('click', clickHandler);
  });
}

// function should be called in main.js
changeNavBgColor();


// -----------------------------------------------

// burger menu


export function openMenu() {
  refs.menuOpenBtn.style.display = 'none';
  refs.menuCloseBtn.style.display = 'block';
  refs.burgerMenu.style.display = 'block';
}
 export function closeMenu() {
  refs.menuOpenBtn.style.display = 'block';
  refs.menuCloseBtn.style.display = 'none';
  refs.burgerMenu.style.display = 'none';
}

// event listeners will be forwarded to main.js
refs.menuOpenBtn.addEventListener('click', openMenu);
refs.menuCloseBtn.addEventListener('click', closeMenu);
// end burger-menu
