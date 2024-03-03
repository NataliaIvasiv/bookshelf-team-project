import"./assets/shopping-list-render-function-c10770c0.js";import{a as r}from"./assets/vendor-de8bc860.js";class k{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books"}async getCategoriesList(){const o=this.BASE_URL+"/category-list",t=await r.get(o);return console.log(t),t.data}async getPopularBooks(){const o=this.BASE_URL+"/top-books ";return(await r.get(o)).data}async getSelectedCategory(o){const t=this.BASE_URL+`/category?category=${o}`;return(await r.get(t)).data}async getBookDetailedInfo(o){const t=this.BASE_URL+`/${o}`;return(await r.get(t)).data}}function b(e){const o=document.querySelector(".modal-btn");let t=JSON.parse(localStorage.getItem("shoppingList"))||[],n;const s=t.findIndex(a=>e._id===a._id);s===-1?(t.push(e),n="remove from shopping list"):(t.splice(s,1),n="add to shopping list"),localStorage.setItem("shoppingList",JSON.stringify(t)),o.textContent=n}function y(e){const o=document.querySelector(".modal-btn");let t=JSON.parse(localStorage.getItem("shoppingList"))||[],n;t.findIndex(a=>e._id===a._id)===-1?n="add to shopping list":n="remove from shopping list",o.textContent=n}function f(e){return`<div class="modal-backdrop">
    <div class="modal-content-container">
    <button type="submit" class="modal-close-btn"><img src="../img/symbol-defs.svg#icon-x-close" class="modal-close-btn"/></button>
    <img src="${e.book_image}" class="modal-book-image" />
    <div class="modal-book-info">
    <h3 class="modal-title">${e.title}</h3>
    <p class="modal-author">${e.author}</p>
    <p class="modal-description">${e.description}</p>
    <ul class="modal-shops-list">
    <li class="modal-shops-item"><a href="${e.buy_links[0].url}"><img src="AMAZON"/></a></li>
    <li class="modal-shops-item"><a href="${e.buy_links[1].url}"><img src="APPLE BOOKS"/></a></li>
    </ul>
    <button type="submit" class="modal-btn"></button>
    </div>
    </div>
    </div>`}function v(e){document.body.insertAdjacentHTML("beforeend",e)}function h(){const e=document.querySelector(".modal-backdrop"),o=document.querySelector(".modal-close-btn");document.addEventListener("keydown",t=>{t.preventDefault(),t.key==="Escape"&&i()}),o.addEventListener("click",t=>{t.preventDefault(),i()}),e.addEventListener("click",t=>{t.preventDefault(),t.target===e&&i()})}function i(){const e=document.querySelector(".modal-backdrop"),o=document.querySelector(".modal-close-btn");e.parentNode.removeChild(e),document.removeEventListener("keydown",t=>{console.log("listener is remove")}),o.removeEventListener("click",t=>{console.log("listener is remove")}),e.removeEventListener("click",t=>{console.log("listener is remove")})}const L={categoriesMain:document.querySelector(".all-categories-main")},m=document.querySelectorAll(".nav-list-item"),S=window.location.href;let g;function C(){function e(){m.forEach(n=>n.classList.remove("current-page"))}function o(n){n&&n.href===S&&n.closest(".nav-list-item").classList.add("current-page")}function t(n){e(),n.currentTarget.classList.add("current-page")}m.forEach(n=>{g=n.querySelector(".nav-link"),o(g),n.addEventListener("click",t)})}C();const d=document.querySelector(".burger-menu-open-btn"),u=document.querySelector(".burger-menu-close-btn"),p=document.querySelector(".burger-menu");function B(){d.style.display="none",u.style.display="block",p.style.display="block"}function q(){d.style.display="block",u.style.display="none",p.style.display="none"}d.addEventListener("click",B);u.addEventListener("click",q);const A=document.querySelector(".categories-list-main");function I(e){return e.map(o=>`<li class='categories-list-item'><a href="">${o.list_name}</a></li>`).join("")}function x(e){const o=I(e);A.insertAdjacentHTML("beforeend",o)}function $(e){const{book_image:o,title:t,author:n,_id:s}=e;return`<li class="book-item" data-id="${s}">
       <div class="book-item-container">
           <div class="book-card-container"> 
            <img class="book-card" src="${o}" alt="${t}">
               <p class="book-card-hover-text">QUICK VIEW</p>
           </div>
           <div class="book-details">
               <p class="book-title">${t}</p>
               <p class="book-author">${n}</p>
           </div>
       </div>
  </li>`}function w(e){return e.map($).join("")}function E(e){const o=w(e);L.categoriesMain.insertAdjacentHTML("beforeend",o)}const c=new k;async function M(){let e;try{e=await c.getCategoriesList()}catch(o){console.log(o);return}x(e)}M();let l;const T=document.querySelector(".categories-list-main");T.addEventListener("click",_);async function _(e){e.preventDefault();let o;if(e.target!==e.currentTarget){if(l=e.target.closest("li"),l.textContent==="All categories")try{const t=await c.getPopularBooks();console.log(t)}catch{console.log("error")}try{o=await c.getSelectedCategory(l.textContent)}catch{console.log("error")}E(o)}}const P=document.querySelector(".all-categories-main");P.addEventListener("click",async e=>{if(e.target===e.currentTarget)return;const o=e.target.closest(".book-item").dataset.id,t=await c.getBookDetailedInfo(o),n=f(t);v(n),y(t),document.querySelector(".modal-btn").addEventListener("click",a=>{a.preventDefault(),b(t),h()})});
//# sourceMappingURL=commonHelpers.js.map
