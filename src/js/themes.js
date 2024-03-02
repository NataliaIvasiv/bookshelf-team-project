// add import of refs from refs.js

// this needs to be forwarded to refs.js
const checkbox = document.getElementById('switch-theme-checkbox');

// function itself
export function toggleTheme() {
  document.body.classList.toggle('dark');
}

// event listener that has to be forwarded to main.js
checkbox.addEventListener('change', toggleTheme);
