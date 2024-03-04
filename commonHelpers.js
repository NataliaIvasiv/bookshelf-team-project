import{r as a}from"./assets/header-cd376349.js";import{a as r}from"./assets/vendor-d34a1206.js";class u{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books"}async getCategoriesList(){const e=this.BASE_URL+"/category-list";return(await r.get(e)).data}async getPopularBooks(){const e=this.BASE_URL+"/top-books ";return(await r.get(e)).data}async getSelectedCategory(e){const o=this.BASE_URL+`/category?category=${e}`;return(await r.get(o)).data}async getBookDetailedInfo(e){const o=this.BASE_URL+`/${e}`;return(await r.get(o)).data}}function g(t){const e=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],s;const n=o.findIndex(i=>t._id===i._id);n===-1?(o.push(t),s="remove from shopping list"):(o.splice(n,1),s="add to shopping list"),localStorage.setItem("shoppingList",JSON.stringify(o)),e.textContent=s}function k(t){const e=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],s;o.findIndex(i=>t._id===i._id)===-1?s="add to shopping list":s="remove from shopping list",e.textContent=s}function b(t){return`<div class="modal-backdrop">
    <div class="modal-content-container">
    <button type="submit" class="modal-close-btn"><img src="../img/symbol-defs.svg#icon-x-close" /></button>
    <img src="${t.book_image}" class="modal-book-image" />
    <div class="modal-book-info">
    <h3 class="modal-title">${t.title}</h3>
    <p class="modal-author">${t.author}</p>
    <p class="modal-description">${t.description}</p>
    <ul class="modal-shops-list">
    <li class="modal-shops-item"><a href="${t.buy_links[0].url}"><img src="AMAZON"/></a></li>
    <li class="modal-shops-item"><a href="${t.buy_links[1].url}"><img src="APPLE BOOKS"/></a></li>
    </ul>
    </div>
    <button type="submit" class="modal-btn"></button>

    </div>
    </div>`}function f(t){document.body.insertAdjacentHTML("beforeend",t)}function h(){const t=document.querySelector(".modal-backdrop"),e=document.querySelector(".modal-close-btn");document.addEventListener("keydown",o=>{o.preventDefault(),o.key==="Escape"&&l()}),e.addEventListener("click",o=>{o.preventDefault(),l()}),t.addEventListener("click",o=>{o.preventDefault(),o.target===a.modalBackdrop&&l()})}function l(){const t=document.querySelector(".modal-backdrop"),e=document.querySelector(".modal-close-btn");t.parentNode.removeChild(t),document.removeEventListener("keydown",o=>{console.log("listener is remove")}),e.removeEventListener("click",o=>{console.log("listener is remove")}),t.removeEventListener("click",o=>{console.log("listener is remove")})}const v=document.querySelector(".categories-list-main");function L(t){return t.map(e=>`<li class='categories-list-item'><a href="">${e.list_name}</a></li>`).join("")}function y(t){const e=L(t);v.insertAdjacentHTML("beforeend",e)}function B(t){const{book_image:e,title:o,author:s,_id:n}=t;return`<li class="book-item" data-id="${n}">
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
  </li>`}function C(t){return t.map(B).join("")}function m(t){const e=C(t);a.categoriesMain.insertAdjacentHTML("beforeend",e)}const S=new u;async function p(t){if(t.textContent==="All categories"||t==="All categories")try{const e=await S.getPopularBooks();console.log(e),e.map(o=>{$(o)})}catch{console.log("error")}}function A(t){return`<li class="li-title"><h3 class="book-author popular-title">${t.list_name}</h3></li>`}function $(t){a.categoriesMain.insertAdjacentHTML("beforeend",A(t)),m(t.books)}const d=new u;async function T(){let t;try{t=await d.getCategoriesList()}catch(e){console.log(e);return}y(t)}T();let c;window.addEventListener("load",p("All categories"));a.categoriesListMain.addEventListener("click",w);async function w(t){t.preventDefault();let e;if(a.categoriesMain.innerHTML="",t.target!==t.currentTarget){c=t.target.closest("li"),p(c);try{e=await d.getSelectedCategory(c.textContent)}catch{console.log("error")}m(e)}}a.categoriesMain.addEventListener("click",async t=>{if(t.target===t.currentTarget)return;const e=t.target.closest(".book-item").dataset.id,o=await d.getBookDetailedInfo(e),s=b(o);f(s),k(o),document.querySelector(".modal-btn").addEventListener("click",i=>{i.preventDefault(),g(o),h()})});
//# sourceMappingURL=commonHelpers.js.map
