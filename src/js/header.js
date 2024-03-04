import { refs } from "./refs";
import iziToast from "izitoast";
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



// modal window functionality

const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.querySelector(".closeModalBtn");
const signInOption = document.querySelector(".signInOption");
const signUpOption = document.querySelector(".signUpOption");
const signUpBtn = document.querySelector(".signUpBtn");
const signInBtn = document.querySelector(".signInBtn");
const signUpForm = document.getElementById("signUpForm");
const signInForm = document.getElementById("signInForm");
const modal = document.getElementById("signupModal");
const modalwrapper = document.querySelector('.modal-sign-container');


export function openModal() {
  modal.style.display = "block";
  modalwrapper.style.display = 'flex'
  showSignUpForm();
}

export function closeModal() {
  modal.style.display = "none";
  modalwrapper.style.display = 'none'
}

export function showSignInForm() {
  signUpForm.style.display = "none";
  signInForm.style.display = "block";
  signInOption.classList.add("active");
  signUpOption.classList.remove("active");
}

export function showSignUpForm() {
  signUpForm.style.display = "block";
  signInForm.style.display = "none";
  signUpOption.classList.add("active");
  signInOption.classList.remove("active");
}

export function signUp() {
  iziToast.show({
    title: "Success",
    message: "Sign up successful!",
    theme: "dark",
    icon: "icon-person",
    color: "green",
    position: "topRight",
    timeout: 5000,
  });
  closeModal();
}

export function signIn() {
  iziToast.show({
    title: "Success",
    message: "Sign in successful!",
    theme: "dark",
    icon: "icon-person",
    color: "green",
    position: "topRight",
    timeout: 5000,
  });
  closeModal();
}


openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
signInOption.addEventListener("click", showSignInForm);
signUpOption.addEventListener("click", showSignUpForm);
signUpBtn.addEventListener("click", signUp);
signInBtn.addEventListener("click", signIn);
