import{i as p}from"./vendor-d34a1206.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}})();const o={listItems:document.querySelectorAll(".nav-list-item"),currentPage:window.location.href,menuOpenBtn:document.querySelector(".burger-menu-open-btn"),menuCloseBtn:document.querySelector(".burger-menu-close-btn"),burgerMenu:document.querySelector(".burger-menu"),checkbox:document.getElementById("switch-theme-checkbox"),savedTheme:localStorage.getItem("theme"),categoriesListMain:document.querySelector(".categories-list-main"),popularTitle:document.querySelector(".popular-title"),categoriesMain:document.querySelector(".all-categories-main"),supportList:document.querySelector(".support__list-js"),upBtn:document.querySelector(".swiper-button-next"),modalBackdrop:document.querySelector(".modal-backdrop"),modalCloseBtn:document.querySelector(".modal-close-btn"),shoppingListContainer:document.querySelector(".shopping-list")};function v(){document.body.classList.toggle("dark");const i=document.body.classList.contains("dark");localStorage.setItem("theme",i?"dark":"light")}function L(){o.savedTheme&&document.body.classList.toggle("dark",o.savedTheme==="dark")}o.checkbox.addEventListener("change",v);L();function S(i){const{_id:s,book_image:c,title:t,list_name:e,description:n,author:r,buy_links:[k,b]}=i;return` 
    <li data-id="${s}" class="shopping-list-li-item">
      <div class="shopping-list-book-item">
        <img
          class="shopping-list-book-img"
          src="${c}"
          alt="Image of ${t}"
        />
        <div class="shopping-list-book-text">
          <h2 class="shopping-list-book-title">${t}</h2>
          <p class="shopping-list-book-category">${e}</p>
          <p class="shopping-list-book-description">${n||"Description is empty"}</p>
          <p class="shopping-list-book-author">${r}</p>
          <div class="shopping-list-book-links">
            <a class="test-link" href="${k}">
              <svg width="32" height="11" class="shopping-list-amazon"><use href=""></use></svg>
              </a>
              <a class="test-link" href="${b}">
            <svg width="16" height="16" class="shopping-list-apple"><use href=""></use></svg>
          </a>
          </div>
          <button data-id="${s}" class="shopping-list-dlt-book-btn" >
            <svg class="shopping-list-dlt-book-btn-icon" width="16" height="16"><use href=""></use></svg>
          </button>
        </div>
      </div>
    </li>`}function B(){return`
      <div class="container  shopping-list-container">
        <div class="shopping-list-empty-container">
          <p class="shopping-list-empty-paragraph">This page is empty, add some books and proceed to order.</p>
          <img class="shopping-list-empty-img" src="" alt="Books in empty section"/>
        </div>
      </div>`}function I(i){return i.length===0?B():i.map(s=>S(s)).join("")}o.shoppingListContainer&&o.shoppingListContainer.insertAdjacentHTML("beforeend",I([]));let u;function q(){function i(){o.listItems.forEach(t=>t.classList.remove("current-page"))}function s(t){t&&t.href===o.currentPage&&t.closest(".nav-list-item").classList.add("current-page")}function c(t){i(),t.currentTarget.classList.add("current-page")}o.listItems.forEach(t=>{u=t.querySelector(".nav-link"),s(u),t.addEventListener("click",c)})}q();function E(){o.menuOpenBtn.style.display="none",o.menuCloseBtn.style.display="block",o.burgerMenu.style.display="block"}function M(){o.menuOpenBtn.style.display="block",o.menuCloseBtn.style.display="none",o.burgerMenu.style.display="none"}o.menuOpenBtn.addEventListener("click",E);o.menuCloseBtn.addEventListener("click",M);const O=document.getElementById("openModalBtn"),C=document.querySelector(".closeModalBtn"),l=document.querySelector(".signInOption"),a=document.querySelector(".signUpOption"),w=document.querySelector(".signUpBtn"),T=document.querySelector(".signInBtn"),m=document.getElementById("signUpForm"),g=document.getElementById("signInForm"),h=document.getElementById("signupModal"),y=document.querySelector(".modal-sign-container");function $(){h.style.display="block",y.style.display="flex",f()}function d(){h.style.display="none",y.style.display="none"}function P(){m.style.display="none",g.style.display="block",l.classList.add("active"),a.classList.remove("active")}function f(){m.style.display="block",g.style.display="none",a.classList.add("active"),l.classList.remove("active")}function U(){p.show({title:"Success",message:"Sign up successful!",theme:"dark",icon:"icon-person",color:"green",position:"topRight",timeout:5e3}),d()}function x(){p.show({title:"Success",message:"Sign in successful!",theme:"dark",icon:"icon-person",color:"green",position:"topRight",timeout:5e3}),d()}O.addEventListener("click",$);C.addEventListener("click",d);l.addEventListener("click",P);a.addEventListener("click",f);w.addEventListener("click",U);T.addEventListener("click",x);export{o as r};
//# sourceMappingURL=header-453c0b1f.js.map
