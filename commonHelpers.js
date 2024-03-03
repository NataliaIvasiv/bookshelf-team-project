import{r as m}from"./assets/header-b1d0c83e.js";import{a as r}from"./assets/vendor-de8bc860.js";class u{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books"}async getCategoriesList(){const o=this.BASE_URL+"/category-list";return(await r.get(o)).data}async getPopularBooks(){const o=this.BASE_URL+"/top-books ";return(await r.get(o)).data}async getSelectedCategory(o){const e=this.BASE_URL+`/category?category=${o}`;return(await r.get(e)).data}async getBookDetailedInfo(o){const e=this.BASE_URL+`/${o}`;return(await r.get(e)).data}}function p(t){const o=document.querySelector(".modal-btn");let e=JSON.parse(localStorage.getItem("shoppingList"))||[],s;const n=e.findIndex(a=>t._id===a._id);n===-1?(e.push(t),s="remove from shopping list"):(e.splice(n,1),s="add to shopping list"),localStorage.setItem("shoppingList",JSON.stringify(e)),o.textContent=s}function g(t){const o=document.querySelector(".modal-btn");let e=JSON.parse(localStorage.getItem("shoppingList"))||[],s;e.findIndex(a=>t._id===a._id)===-1?s="add to shopping list":s="remove from shopping list",o.textContent=s}function k(t){return`<div class="modal-backdrop">
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
    </div>`}function b(t){document.body.insertAdjacentHTML("beforeend",t)}function f(){const t=document.querySelector(".modal-backdrop"),o=document.querySelector(".modal-close-btn");document.addEventListener("keydown",e=>{e.preventDefault(),e.key==="Escape"&&c()}),o.addEventListener("click",e=>{e.preventDefault(),c()}),t.addEventListener("click",e=>{e.preventDefault(),e.target===t&&c()})}function c(){const t=document.querySelector(".modal-backdrop"),o=document.querySelector(".modal-close-btn");t.parentNode.removeChild(t),document.removeEventListener("keydown",e=>{console.log("listener is remove")}),o.removeEventListener("click",e=>{console.log("listener is remove")}),t.removeEventListener("click",e=>{console.log("listener is remove")})}const y=document.querySelector(".categories-list-main");function h(t){return t.map(o=>`<li class='categories-list-item'><a href="">${o.list_name}</a></li>`).join("")}function v(t){const o=h(t);y.insertAdjacentHTML("beforeend",o)}function L(t){const{book_image:o,title:e,author:s,_id:n}=t;return`<li class="book-item" data-id="${n}">
       <div class="book-item-container">
           <div class="book-card-container"> 
            <img class="book-card" src="${o}" alt="${e}">
               <p class="book-card-hover-text">QUICK VIEW</p>
           </div>
           <div class="book-details">
               <p class="book-title">${e}</p>
               <p class="book-author">${s}</p>
           </div>
       </div>
  </li>`}function B(t){return t.map(L).join("")}function d(t){const o=B(t);m.categoriesMain.insertAdjacentHTML("beforeend",o)}const i=new u;async function S(){let t;try{t=await i.getCategoriesList()}catch(o){console.log(o);return}v(t)}S();let l;const C=document.querySelector(".categories-list-main");C.addEventListener("click",A);async function A(t){t.preventDefault();let o;if(m.categoriesMain.innerHTML="",t.target!==t.currentTarget){if(l=t.target.closest("li"),l.textContent==="All categories")try{const e=await i.getPopularBooks();console.log(e);const s=e.map(n=>n.books);s.map(n=>d(n)),console.log(s)}catch{console.log("error")}try{o=await i.getSelectedCategory(l.textContent)}catch{console.log("error")}console.log(o),d(o)}}const x=document.querySelector(".all-categories-main");x.addEventListener("click",async t=>{if(t.target===t.currentTarget)return;const o=t.target.closest(".book-item").dataset.id,e=await i.getBookDetailedInfo(o),s=k(e);b(s),g(e),document.querySelector(".modal-btn").addEventListener("click",a=>{a.preventDefault(),p(e),f()})});
//# sourceMappingURL=commonHelpers.js.map
