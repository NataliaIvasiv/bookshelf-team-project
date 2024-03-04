import { refs } from './refs';
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


// // function should be called in main.js

changeNavBgColor()


function onHomeBtn () {
  refs.homeBtn.classList.add('current');
  refs.shoppingBtn.classList.remove('current');
}

function onShoppingBtn () {
  refs.homeBtn.classList.remove('current');
  refs.shoppingBtn.classList.add('current');
}


refs.homeBtn.addEventListener('click', onHomeBtn);
refs.shoppingBtn.addEventListener('click', onShoppingBtn);