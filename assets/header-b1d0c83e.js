(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const o={categoriesMain:document.querySelector(".all-categories-main"),listItems:document.querySelectorAll(".nav-list-item"),currentPage:window.location.href,menuOpenBtn:document.querySelector(".burger-menu-open-btn"),menuCloseBtn:document.querySelector(".burger-menu-close-btn"),burgerMenu:document.querySelector(".burger-menu")},g=document.getElementById("switch-theme-checkbox"),l=localStorage.getItem("theme");function m(){document.body.classList.toggle("dark");const i=document.body.classList.contains("dark");localStorage.setItem("theme",i?"dark":"light")}function h(){l&&document.body.classList.toggle("dark",l==="dark")}g.addEventListener("change",m);h();function f(i){const{_id:n,book_image:r,title:t,list_name:e,description:s,author:c,buy_links:[p,d]}=i;return` 
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
          <p class="shopping-list-book-description">${s||"Description is empty"}</p>
          <p class="shopping-list-book-author">${c}</p>
          <div class="shopping-list-book-links">
            <a class="test-link" href="${p}">
              <svg width="32" height="11" class="shopping-list-amazon"><use href=""></use></svg>
              </a>
              <a class="test-link" href="${d}">
            <svg width="16" height="16" class="shopping-list-apple"><use href=""></use></svg>
          </a>
          </div>
          <button data-id="${n}" class="shopping-list-dlt-book-btn" >
            <svg class="shopping-list-dlt-book-btn-icon" width="16" height="16"><use href=""></use></svg>
          </button>
        </div>
      </div>
    </li>`}const a=document.querySelector(".shopping-list");function y(){return`
      <div class="container  shopping-list-container">
        <div class="shopping-list-empty-container">
          <p class="shopping-list-empty-paragraph">This page is empty, add some books and proceed to order.</p>
          <img class="shopping-list-empty-img" src="" alt="Books in empty section"/>
        </div>
      </div>`}function b(i){return i.length===0?y():i.map(n=>f(n)).join("")}a&&a.insertAdjacentHTML("beforeend",b([]));let u;function k(){function i(){o.listItems.forEach(t=>t.classList.remove("current-page"))}function n(t){t&&t.href===o.currentPage&&t.closest(".nav-list-item").classList.add("current-page")}function r(t){i(),t.currentTarget.classList.add("current-page")}o.listItems.forEach(t=>{u=t.querySelector(".nav-link"),n(u),t.addEventListener("click",r)})}k();function v(){o.menuOpenBtn.style.display="none",o.menuCloseBtn.style.display="block",o.burgerMenu.style.display="block"}function L(){o.menuOpenBtn.style.display="block",o.menuCloseBtn.style.display="none",o.burgerMenu.style.display="none"}o.menuOpenBtn.addEventListener("click",v);o.menuCloseBtn.addEventListener("click",L);export{o as r};
//# sourceMappingURL=header-b1d0c83e.js.map
