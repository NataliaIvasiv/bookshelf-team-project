import { refs } from "./refs";
import iziToast from 'izitoast';


export function openModal() {
  refs.modal.style.display = "block";
  refs.modalwrapper.style.display = 'flex'
  showSignUpForm();
}

export function closeModal() {
    refs.modal.style.display = "none";
    refs.modalwrapper.style.display = 'none'
}

export function showSignInForm() {
    refs.signUpForm.style.display = "none";
    refs.signInForm.style.display = "block";
    refs.signInOption.classList.add("active");
    refs.signUpOption.classList.remove("active");
}

export function showSignUpForm() {
    refs.signUpForm.style.display = "block";
    refs.signInForm.style.display = "none";
    refs.signUpOption.classList.add("active");
    refs.signInOption.classList.remove("active");
}

export function signUp() {
  iziToast.show({
    title: "Success",
    message: "Sign up successful!",
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
    color: "green",
    position: "topRight",
    timeout: 5000,
  });
  closeModal();
}

refs.mobileLoginBtn.addEventListener("click", openModal);
refs.openModalBtn.addEventListener("click", openModal);
refs.closeModalBtn.addEventListener("click", closeModal);
refs.signInOption.addEventListener("click", showSignInForm);
refs.signUpOption.addEventListener("click", showSignUpForm);
refs.signUpBtn.addEventListener("submit", signUp);
refs.signInBtn.addEventListener("submit", signIn);