(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const s={categoriesMain:document.querySelector(".all-categories-main"),listItems:document.querySelectorAll(".nav-list-item"),currentPage:window.location.href,menuOpenBtn:document.querySelector(".burger-menu-open-btn"),menuCloseBtn:document.querySelector(".burger-menu-close-btn"),burgerMenu:document.querySelector(".burger-menu"),checkbox:document.getElementById("switch-theme-checkbox"),savedTheme:localStorage.getItem("theme")};function d(){document.body.classList.toggle("dark");const i=document.body.classList.contains("dark");localStorage.setItem("theme",i?"dark":"light")}function g(){s.savedTheme&&document.body.classList.toggle("dark",s.savedTheme==="dark")}s.checkbox.addEventListener("change",d);g();function m(i){const{_id:n,book_image:r,title:t,list_name:e,description:o,author:c,buy_links:[u,p]}=i;return` 
    <li data-id="${n}" class="shopping-list-li-item">
      <div class="shopping-list-book-item">
        <img
          class="shopping-list-book-img"
          src="${r}"
          alt="Image of ${t}"
        />
        <div class="shopping-list-book-text">
          <h2 class="shopping-list-book-title">${t}</h2>
          <p class="shopping-list-book-category">${e}</p>
          <p class="shopping-list-book-description">${o||"Description is empty"}</p>
          <p class="shopping-list-book-author">${c}</p>
          <div class="shopping-list-book-links">
            <a class="test-link" href="${u}">
              <svg width="32" height="11" class="shopping-list-amazon"><use href=""></use></svg>
              </a>
              <a class="test-link" href="${p}">
            <svg width="16" height="16" class="shopping-list-apple"><use href=""></use></svg>
          </a>
          </div>
          <button data-id="${n}" class="shopping-list-dlt-book-btn" >
            <svg class="shopping-list-dlt-book-btn-icon" width="16" height="16"><use href=""></use></svg>
          </button>
        </div>
      </div>
    </li>`}const l=document.querySelector(".shopping-list");function h(){return`
      <div class="container  shopping-list-container">
        <div class="shopping-list-empty-container">
          <p class="shopping-list-empty-paragraph">This page is empty, add some books and proceed to order.</p>
          <img class="shopping-list-empty-img" src="" alt="Books in empty section"/>
        </div>
      </div>`}function f(i){return i.length===0?h():i.map(n=>m(n)).join("")}l&&l.insertAdjacentHTML("beforeend",f([]));let a;function y(){function i(){s.listItems.forEach(t=>t.classList.remove("current-page"))}function n(t){t&&t.href===s.currentPage&&t.closest(".nav-list-item").classList.add("current-page")}function r(t){i(),t.currentTarget.classList.add("current-page")}s.listItems.forEach(t=>{a=t.querySelector(".nav-link"),n(a),t.addEventListener("click",r)})}y();function b(){s.menuOpenBtn.style.display="none",s.menuCloseBtn.style.display="block",s.burgerMenu.style.display="block"}function k(){s.menuOpenBtn.style.display="block",s.menuCloseBtn.style.display="none",s.burgerMenu.style.display="none"}s.menuOpenBtn.addEventListener("click",b);s.menuCloseBtn.addEventListener("click",k);export{s as r};
//# sourceMappingURL=header-381b4239.js.map
