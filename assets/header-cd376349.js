import{i as m}from"./vendor-d34a1206.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function c(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(t){if(t.ep)return;t.ep=!0;const i=c(t);fetch(t.href,i)}})();const n={listItems:document.querySelectorAll(".nav-list-item"),currentPage:window.location.href,menuOpenBtn:document.querySelector(".burger-menu-open-btn"),menuCloseBtn:document.querySelector(".burger-menu-close-btn"),burgerMenu:document.querySelector(".burger-menu"),checkbox:document.getElementById("switch-theme-checkbox"),savedTheme:localStorage.getItem("theme"),categoriesListMain:document.querySelector(".categories-list-main"),popularTitle:document.querySelector(".popular-title"),categoriesMain:document.querySelector(".all-categories-main"),categoriesMainTitle:document.querySelector(".title-book-section"),supportList:document.querySelector(".support__list-js"),upBtn:document.querySelector(".swiper-button-next"),shoppingListContainer:document.querySelector(".shopping-list")};function v(){document.body.classList.toggle("dark");const o=document.body.classList.contains("dark");localStorage.setItem("theme",o?"dark":"light")}function B(){n.savedTheme&&document.body.classList.toggle("dark",n.savedTheme==="dark")}n.checkbox.addEventListener("change",v);B();function I(o){const{_id:s,book_image:c,title:e,list_name:t,description:i,author:r,buy_links:[u,d]}=o;return` 
    <li data-id="${s}" class="shopping-list-li-item">
      <div class="shopping-list-book-item">
        <img
          class="shopping-list-book-img"
          src="${c}"
          alt="Image of ${e}"
        />
        <div class="shopping-list-book-text">
          <h2 class="shopping-list-book-title">${e}</h2>
          <p class="shopping-list-book-category">${t}</p>
          <p class="shopping-list-book-description">${i||"Description is empty"}</p>
          <p class="shopping-list-book-author">${r}</p>
          <div class="shopping-list-book-links">
            <a class="test-link" href="${u.url}">
              <img width="32" height="11" class="shopping-list-amazon" src="../img/amazon-s.png" alt="${u.name}"/>             
            </a>
            <a class="test-link" href="${d.url}">
              <img width="16" height="16" class="shopping-list-apple" src="../img/apple-s.png" alt="${d.name}"/>             
            </a>
          </div>
          <button data-id="${s}" class="shopping-list-dlt-book-btn" >         
            <svg class="shopping-list-dlt-book-btn-icon" width="16" height="16"><use href="../img/symbol-defs.svg#icon-trash1"></use></svg>
          </button>
        </div>
      </div>
    </li>`}function h(){const o=localStorage.getItem("shoppingList");return o?JSON.parse(o):[]}function E(o){const s=JSON.stringify(o);localStorage.setItem("shoppingList",s)}function M(o){const c=h().filter(e=>e._id!==o);E(c)}function q(){return`
      <div class="container  shopping-list-container">
        <div class="shopping-list-empty-container">
          <p class="shopping-list-empty-paragraph">This page is empty, add some books and proceed to order.</p>
          <img class="shopping-list-empty-img" src="../img/empty-sl.png" alt="Books in empty section"/>
        </div>
      </div>`}function O(o){return o.length===0?q():o.map(s=>I(s)).join("")}function y(){const o=h();n.shoppingListContainer.innerHTML="",n.shoppingListContainer.insertAdjacentHTML("beforeend",O(o)),n.shoppingListContainer.querySelectorAll(".shopping-list-dlt-book-btn").forEach(c=>{c.addEventListener("click",e=>{const t=e.target.attributes["data-id"].value;M(t),y()})})}n.shoppingListContainer&&y();let g;function C(){function o(){n.listItems.forEach(e=>e.classList.remove("current-page"))}function s(e){e&&e.href===n.currentPage&&e.closest(".nav-list-item").classList.add("current-page")}function c(e){o(),e.currentTarget.classList.add("current-page")}n.listItems.forEach(e=>{g=e.querySelector(".nav-link"),s(g),e.addEventListener("click",c)})}C();function w(){n.menuOpenBtn.style.display="none",n.menuCloseBtn.style.display="block",n.burgerMenu.style.display="block"}function T(){n.menuOpenBtn.style.display="block",n.menuCloseBtn.style.display="none",n.burgerMenu.style.display="none"}n.menuOpenBtn.addEventListener("click",w);n.menuCloseBtn.addEventListener("click",T);const $=document.getElementById("openModalBtn"),F=document.querySelector(".closeModalBtn"),l=document.querySelector(".signInOption"),a=document.querySelector(".signUpOption"),N=document.querySelector(".signUpBtn"),P=document.querySelector(".signInBtn"),f=document.getElementById("signUpForm"),k=document.getElementById("signInForm"),b=document.getElementById("signupModal"),L=document.querySelector(".modal-sign-container");function U(){b.style.display="block",L.style.display="flex",S()}function p(){b.style.display="none",L.style.display="none"}function _(){f.style.display="none",k.style.display="block",l.classList.add("active"),a.classList.remove("active")}function S(){f.style.display="block",k.style.display="none",a.classList.add("active"),l.classList.remove("active")}function x(){m.show({title:"Success",message:"Sign up successful!",theme:"dark",icon:"icon-person",color:"green",position:"topRight",timeout:5e3}),p()}function A(){m.show({title:"Success",message:"Sign in successful!",theme:"dark",icon:"icon-person",color:"green",position:"topRight",timeout:5e3}),p()}$.addEventListener("click",U);F.addEventListener("click",p);l.addEventListener("click",_);a.addEventListener("click",S);N.addEventListener("click",x);P.addEventListener("click",A);export{n as r};
//# sourceMappingURL=header-cd376349.js.map
