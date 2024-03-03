import{r as n}from"./assets/header-d3a4bec5.js";import{a as r}from"./assets/vendor-de8bc860.js";class m{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books"}async getCategoriesList(){const e=this.BASE_URL+"/category-list";return(await r.get(e)).data}async getPopularBooks(){const e=this.BASE_URL+"/top-books ";return(await r.get(e)).data}async getSelectedCategory(e){const o=this.BASE_URL+`/category?category=${e}`;return(await r.get(o)).data}async getBookDetailedInfo(e){const o=this.BASE_URL+`/${e}`;return(await r.get(o)).data}}function g(t){const e=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],s;const a=o.findIndex(i=>t._id===i._id);a===-1?(o.push(t),s="remove from shopping list"):(o.splice(a,1),s="add to shopping list"),localStorage.setItem("shoppingList",JSON.stringify(o)),e.textContent=s}function k(t){const e=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],s;o.findIndex(i=>t._id===i._id)===-1?s="add to shopping list":s="remove from shopping list",e.textContent=s}function b(t){return`<div class="modal-backdrop">
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
    </div>`}function f(t){document.body.insertAdjacentHTML("beforeend",t)}function h(){document.addEventListener("keydown",t=>{t.preventDefault(),t.key==="Escape"&&c()}),n.modalCloseBtn.addEventListener("click",t=>{t.preventDefault(),c()}),n.modalBackdrop.addEventListener("click",t=>{t.preventDefault(),t.target===n.modalBackdrop&&c()})}function c(){n.modalBackdrop.parentNode.removeChild(n.modalBackdrop),document.removeEventListener("keydown",t=>{console.log("listener is remove")}),n.modalCloseBtn.removeEventListener("click",t=>{console.log("listener is remove")}),n.modalBackdrop.removeEventListener("click",t=>{console.log("listener is remove")})}const v=document.querySelector(".categories-list-main");function L(t){return t.map(e=>`<li class='categories-list-item'><a href="">${e.list_name}</a></li>`).join("")}function y(t){const e=L(t);v.insertAdjacentHTML("beforeend",e)}function B(t){const{book_image:e,title:o,author:s,_id:a}=t;return`<li class="book-item" data-id="${a}">
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
  </li>`}function C(t){return t.map(B).join("")}function u(t){const e=C(t);n.categoriesMain.insertAdjacentHTML("beforeend",e)}const A=new m;async function p(t){if(t.textContent==="All categories"||t==="All categories")try{const e=await A.getPopularBooks();console.log(e),e.map(o=>{u(o.books)})}catch{console.log("error")}}const d=new m;async function S(){let t;try{t=await d.getCategoriesList()}catch(e){console.log(e);return}y(t)}S();let l;n.categoriesListMain.addEventListener("click",$);window.addEventListener("load",p("All categories"));async function $(t){t.preventDefault();let e;if(n.categoriesMain.innerHTML="",t.target!==t.currentTarget){l=t.target.closest("li"),p(l);try{e=await d.getSelectedCategory(l.textContent)}catch{console.log("error")}u(e)}}n.categoriesMain.addEventListener("click",async t=>{if(t.target===t.currentTarget)return;const e=t.target.closest(".book-item").dataset.id,o=await d.getBookDetailedInfo(e),s=b(o);f(s),k(o),document.querySelector(".modal-btn").addEventListener("click",i=>{i.preventDefault(),g(o),h()})});
//# sourceMappingURL=commonHelpers.js.map
