const checkbox = document.getElementById("switch-theme-checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

// change background of the list elements to yellow 

document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.nav');
    const listItems = nav.getElementsByTagName('li');

    const currentPage = window.location.href;

    for (let i = 0; i < listItems.length; i++) {
      const link = listItems[i].querySelector('.nav-link');

      if (link && link.href === currentPage) {
        listItems[i].classList.add('current-page');
      }

      listItems[i].addEventListener('click', function (event) {
        for (let j = 0; j < listItems.length; j++) {
          listItems[j].classList.remove('current-page');
        }

        event.currentTarget.classList.add('current-page');
      });
    }
  });