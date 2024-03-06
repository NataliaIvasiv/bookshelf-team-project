const scrollUpBtn = document.getElementById("scrollUpBtn");

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
}

function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

window.addEventListener("scroll", scrollFunction);
scrollUpBtn.addEventListener("click", scrollUp);