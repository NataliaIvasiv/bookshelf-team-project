import{r as a}from"./assets/header-d3a4bec5.js";import{a as r}from"./assets/vendor-de8bc860.js";class u{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books"}async getCategoriesList(){const e=this.BASE_URL+"/category-list";return(await r.get(e)).data}async getPopularBooks(){const e=this.BASE_URL+"/top-books ";return(await r.get(e)).data}async getSelectedCategory(e){const o=this.BASE_URL+`/category?category=${e}`;return(await r.get(o)).data}async getBookDetailedInfo(e){const o=this.BASE_URL+`/${e}`;return(await r.get(o)).data}}function p(t){const e=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],s;const n=o.findIndex(i=>t._id===i._id);n===-1?(o.push(t),s="remove from shopping list"):(o.splice(n,1),s="add to shopping list"),localStorage.setItem("shoppingList",JSON.stringify(o)),e.textContent=s}function g(t){const e=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],s;o.findIndex(i=>t._id===i._id)===-1?s="add to shopping list":s="remove from shopping list",e.textContent=s}function k(t){return`<div class="modal-backdrop">
    <div class="modal-content-container">
    <button type="submit" class="modal-close-btn"><img src="../img/symbol-defs.svg#icon-x-close" class="modal-close-btn"/></button>
    <img src="${t.book_image}" class="modal-book-image" />
    <div class="modal-book-info">
    <h3 class="modal-title">${t.title}</h3>
    <p class="modal-author">${t.author}</p>
    <p class="modal-description">${t.description}</p>
    <ul class="modal-shops-list">
    <li class="modal-shops-item"><a href="${t.buy_links[0].url}"><img src="AMAZON"/></a></li>
    <li class="modal-shops-item"><a href="${t.buy_links[1].url}"><img src="APPLE BOOKS"/></a></li>
    </ul>
    <button type="submit" class="modal-btn"></button>
    </div>
    </div>
    </div>`}function b(t){document.body.insertAdjacentHTML("beforeend",t)}function f(){document.addEventListener("keydown",t=>{t.preventDefault(),t.key==="Escape"&&l()}),a.modalCloseBtn.addEventListener("click",t=>{t.preventDefault(),l()}),a.modalBackdrop.addEventListener("click",t=>{t.preventDefault(),t.target===a.modalBackdrop&&l()})}function l(){a.modalBackdrop.parentNode.removeChild(a.modalBackdrop),document.removeEventListener("keydown",t=>{console.log("listener is remove")}),a.modalCloseBtn.removeEventListener("click",t=>{console.log("listener is remove")}),a.modalBackdrop.removeEventListener("click",t=>{console.log("listener is remove")})}const h=document.querySelector(".categories-list-main");function v(t){return t.map(e=>`<li class='categories-list-item'><a href="">${e.list_name}</a></li>`).join("")}function L(t){const e=v(t);h.insertAdjacentHTML("beforeend",e)}function y(t){const{book_image:e,title:o,author:s,_id:n}=t;return`<li class="book-item" data-id="${n}">
       <div class="book-item-container">
           <div class="book-card-container"> 
            <img class="book-card" src="${e}" alt="${o}">
               <p class="book-card-hover-text">QUICK VIEW</p>
           </div>
           <div class="book-details">
               <p class="book-title">${o}</p>
               <p class="book-author">${s}</p>
           </div>
       </div>
  </li>`}function B(t){return t.map(y).join("")}function m(t){const e=B(t);a.categoriesMain.insertAdjacentHTML("beforeend",e)}const c=new u;async function C(){let t;try{t=await c.getCategoriesList()}catch(e){console.log(e);return}L(t)}C();let d;a.categoriesListMain.addEventListener("click",S);async function S(t){t.preventDefault();let e;if(a.categoriesMain.innerHTML="",t.target!==t.currentTarget){if(d=t.target.closest("li"),d.textContent==="All categories")try{const o=await c.getPopularBooks();console.log(o),o.map(s=>{m(s.books)})}catch{console.log("error")}try{e=await c.getSelectedCategory(d.textContent)}catch{console.log("error")}m(e)}}a.categoriesMain.addEventListener("click",async t=>{if(t.target===t.currentTarget)return;const e=t.target.closest(".book-item").dataset.id,o=await c.getBookDetailedInfo(e),s=k(o);b(s),g(o),document.querySelector(".modal-btn").addEventListener("click",i=>{i.preventDefault(),p(o),f()})});
//# sourceMappingURL=commonHelpers.js.map
