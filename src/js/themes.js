import { refs } from "./refs";

// function itself
export function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDarkTheme = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

export function LocalStorageThemeCheck() {
  if (refs.savedTheme) {
    document.body.classList.toggle('dark', refs.savedTheme === 'dark');
  }
}

// event listener that has to be forwarded to main.js
refs.checkbox.addEventListener('change', toggleTheme);
LocalStorageThemeCheck()