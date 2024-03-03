
export const refs = {
   //header
  listItems: document.querySelectorAll('.nav-list-item'),
  currentPage: window.location.href,
  menuOpenBtn: document.querySelector('.burger-menu-open-btn'),
  menuCloseBtn: document.querySelector('.burger-menu-close-btn'),
  burgerMenu: document.querySelector('.burger-menu'),
  //themes
  checkbox: document.getElementById('switch-theme-checkbox'),
  savedTheme: localStorage.getItem('theme'),
  
  //categories-list
categoriesListMain: document.querySelector('.categories-list-main'),

  
  //all-categories
  categoriesMain: document.querySelector('.all-categories-main'),
  
  //modal
modalBackdrop: document.querySelector('.modal-backdrop'),
  modalCloseBtn: document.querySelector('.modal-close-btn'),
  // modalButton: document.querySelector('.modal-btn'),

};
