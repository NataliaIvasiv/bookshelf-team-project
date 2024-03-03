// add import of refs from refs.js

// this needs to be forwarded to refs.js
const checkbox = document.getElementById('switch-theme-checkbox');
const savedTheme = localStorage.getItem('theme');

// function itself
export function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDarkTheme = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

export function LocalStorageThemeCheck() {
  if (savedTheme) {
    document.body.classList.toggle('dark', savedTheme === 'dark');
  }
}

// event listener that has to be forwarded to main.js
checkbox.addEventListener('change', toggleTheme);
LocalStorageThemeCheck()