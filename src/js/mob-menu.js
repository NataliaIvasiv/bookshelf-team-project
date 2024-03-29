import { refs } from './refs';

export function windowResize() {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 768) {
    refs.burgerMenu.style.display = 'none';
  }
  
  refs.menuOpenBtn.style.display = 'block';
  refs.menuCloseBtn.style.display = 'none';
}
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
window.addEventListener('resize', windowResize);
// end burger-menu
