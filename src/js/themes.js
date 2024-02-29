const checkbox = document.getElementById("switch-theme-checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})