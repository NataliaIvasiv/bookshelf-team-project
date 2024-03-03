
export const refs = {
  categoriesMain: document.querySelector('.all-categories-main'),
  listItems: document.querySelectorAll('.nav-list-item'),
  currentPage: window.location.href,
  menuOpenBtn: document.querySelector('.burger-menu-open-btn'),
  menuCloseBtn: document.querySelector('.burger-menu-close-btn'),
  burgerMenu: document.querySelector('.burger-menu'),
  checkbox: document.getElementById('switch-theme-checkbox'),
savedTheme: localStorage.getItem('theme'),
};
