
export const refs = {
   //loader
   loadElem: document.querySelector('.loader'),
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
  popularTitle: document.querySelector('.popular-title'),
  // categoriesMain: document.querySelector('.all-categories-main'),
  categoriesMainTitle: document.querySelector('.title-book-section'),
  allCategoriesContainer: document.querySelector('.all-categories-container'),
  
  // support
supportList: document.querySelector('.support-list-js'),
upBtn: document.querySelector('.swiper-button-next'),

  //modal 
// modalBackdrop: document.querySelector('.modal-backdrop'),
  // modalCloseBtn: document.querySelector('.modal-close-btn'),
  //modalButton: document.querySelector('.modal-btn'),

  //shoplist
shoppingListContainer: document.querySelector('.shopping-list'),

// modal-sign-up

openModalBtn : document.getElementById("openModalBtn"),
closeModalBtn : document.querySelector(".closeModalBtn"),
signInOption : document.querySelector(".signInOption"),
signUpOption : document.querySelector(".signUpOption"),
signUpBtn : document.querySelector(".signUpBtn"),
signInBtn : document.querySelector(".signInBtn"),
signUpForm : document.getElementById("signUpForm"),
signInForm : document.getElementById("signInForm"),
modal : document.getElementById("signupModal"),
modalwrapper : document.querySelector('.modal-sign-container'),
mobileLoginBtn : document.querySelector('.mobile-login-btn'),


// mob-menu 

homeBtn : document.querySelector('.burger-link-home'),
shoppingBtn : document.querySelector('.burger-link-shopping'),

};
