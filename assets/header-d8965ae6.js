(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const f=document.getElementById("switch-theme-checkbox"),a=localStorage.getItem("theme");function y(){document.body.classList.toggle("dark");const n=document.body.classList.contains("dark");localStorage.setItem("theme",n?"dark":"light")}function b(){a&&document.body.classList.toggle("dark",a==="dark")}f.addEventListener("change",y);b();function k(n){const{_id:o,book_image:i,title:t,list_name:e,description:s,author:r,buy_links:[h,m]}=n;return` 
    <li data-id="${o}" class="shopping-list-li-item">
      <div class="shopping-list-book-item">
        <img
          class="shopping-list-book-img"
          src="${i}"
          alt="Image of ${t}"
        />
        <div class="shopping-list-book-text">
          <h2 class="shopping-list-book-title">${t}</h2>
          <p class="shopping-list-book-category">${e}</p>
          <p class="shopping-list-book-description">${s||"Description is empty"}</p>
          <p class="shopping-list-book-author">${r}</p>
          <div class="shopping-list-book-links">
            <a class="test-link" href="${h}">
              <svg width="32" height="11" class="shopping-list-amazon"><use href=""></use></svg>
              </a>
              <a class="test-link" href="${m}">
            <svg width="16" height="16" class="shopping-list-apple"><use href=""></use></svg>
          </a>
          </div>
          <button data-id="${o}" class="shopping-list-dlt-book-btn" >
            <svg class="shopping-list-dlt-book-btn-icon" width="16" height="16"><use href=""></use></svg>
          </button>
        </div>
      </div>
    </li>`}const p=document.querySelector(".shopping-list");function v(){return`
      <div class="container  shopping-list-container">
        <div class="shopping-list-empty-container">
          <p class="shopping-list-empty-paragraph">This page is empty, add some books and proceed to order.</p>
          <img class="shopping-list-empty-img" src="" alt="Books in empty section"/>
        </div>
      </div>`}function L(n){return n.length===0?v():n.map(o=>k(o)).join("")}p&&p.insertAdjacentHTML("beforeend",L([]));const d=document.querySelectorAll(".nav-list-item"),S=window.location.href;let u;function $(){function n(){d.forEach(t=>t.classList.remove("current-page"))}function o(t){t&&t.href===S&&t.closest(".nav-list-item").classList.add("current-page")}function i(t){n(),t.currentTarget.classList.add("current-page")}d.forEach(t=>{u=t.querySelector(".nav-link"),o(u),t.addEventListener("click",i)})}$();const c=document.querySelector(".burger-menu-open-btn"),l=document.querySelector(".burger-menu-close-btn"),g=document.querySelector(".burger-menu");function E(){c.style.display="none",l.style.display="block",g.style.display="block"}function B(){c.style.display="block",l.style.display="none",g.style.display="none"}c.addEventListener("click",E);l.addEventListener("click",B);
//# sourceMappingURL=header-d8965ae6.js.map
