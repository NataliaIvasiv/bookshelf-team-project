(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a=document.getElementById("switch-theme-checkbox");function d(){document.body.classList.toggle("dark")}a.addEventListener("change",d);function g(o){const{_id:s,book_image:r,title:i,list_name:e,description:t,author:n,buy_links:[p,l]}=o;return` 
    <li data-id="${s}" class="shopping-list-li-item">
      <div class="shopping-list-book-item">
        <img
          class="shopping-list-book-img"
          src="${r}"
          alt="Image of ${i}"
        />
        <div class="shopping-list-book-text">
          <h2 class="shopping-list-book-title">${i}</h2>
          <p class="shopping-list-book-category">${e}</p>
          <p class="shopping-list-book-description">${t||"Description is empty"}</p>
          <p class="shopping-list-book-author">${n}</p>
          <div class="shopping-list-book-links">
            <a class="test-link" href="${p}">
              <svg width="32" height="11" class="shopping-list-amazon"><use href=""></use></svg>
              </a>
              <a class="test-link" href="${l}">
            <svg width="16" height="16" class="shopping-list-apple"><use href=""></use></svg>
          </a>
          </div>
          <button data-id="${s}" class="shopping-list-dlt-book-btn" >
            <svg class="shopping-list-dlt-book-btn-icon" width="16" height="16"><use href=""></use></svg>
          </button>
        </div>
      </div>
    </li>`}const c=document.querySelector(".shopping-list");function h(){return`
      <div class="container  shopping-list-container">
        <div class="shopping-list-empty-container">
          <p class="shopping-list-empty-paragraph">This page is empty, add some books and proceed to order.</p>
          <img class="shopping-list-empty-img" src="" alt="Books in empty section"/>
        </div>
      </div>`}function u(o){return o.length===0?h():o.map(s=>g(s)).join("")}c&&c.insertAdjacentHTML("beforeend",u([]));
//# sourceMappingURL=shopping-list-render-function-423bf898.js.map
