import"./assets/header-d8965ae6.js";import{a as i}from"./assets/vendor-de8bc860.js";class m{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books"}async getCategoriesList(){const o=this.BASE_URL+"/category-list",e=await i.get(o);return console.log(e),e.data}async getPopularBooks(){const o=this.BASE_URL+"/top-books ";return(await i.get(o)).data}async getSelectedCategory(o){const e=this.BASE_URL+`/category?category=${o}`;return(await i.get(e)).data}async getBookDetailedInfo(o){const e=this.BASE_URL+`/${o}`;return(await i.get(e)).data}}function u(t){const o=document.querySelector(".modal-btn");let e=JSON.parse(localStorage.getItem("shoppingList"))||[],s;const n=e.findIndex(a=>t._id===a._id);n===-1?(e.push(t),s="remove from shopping list"):(e.splice(n,1),s="add to shopping list"),localStorage.setItem("shoppingList",JSON.stringify(e)),o.textContent=s}function g(t){const o=document.querySelector(".modal-btn");let e=JSON.parse(localStorage.getItem("shoppingList"))||[],s;e.findIndex(a=>t._id===a._id)===-1?s="add to shopping list":s="remove from shopping list",o.textContent=s}function p(t){return`<div class="modal-backdrop">
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
    </div>`}function k(t){document.body.insertAdjacentHTML("beforeend",t)}function b(){const t=document.querySelector(".modal-backdrop"),o=document.querySelector(".modal-close-btn");document.addEventListener("keydown",e=>{e.preventDefault(),e.key==="Escape"&&c()}),o.addEventListener("click",e=>{e.preventDefault(),c()}),t.addEventListener("click",e=>{e.preventDefault(),e.target===t&&c()})}function c(){const t=document.querySelector(".modal-backdrop"),o=document.querySelector(".modal-close-btn");t.parentNode.removeChild(t),document.removeEventListener("keydown",e=>{console.log("listener is remove")}),o.removeEventListener("click",e=>{console.log("listener is remove")}),t.removeEventListener("click",e=>{console.log("listener is remove")})}const d={categoriesMain:document.querySelector(".all-categories-main")},f=document.querySelector(".categories-list-main");function y(t){return t.map(o=>`<li class='categories-list-item'><a href="">${o.list_name}</a></li>`).join("")}function h(t){const o=y(t);f.insertAdjacentHTML("beforeend",o)}function v(t){const{book_image:o,title:e,author:s,_id:n}=t;return`<li class="book-item" data-id="${n}">
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
  </li>`}function L(t){return t.map(v).join("")}function B(t){const o=L(t);d.categoriesMain.insertAdjacentHTML("beforeend",o)}const r=new m;async function S(){let t;try{t=await r.getCategoriesList()}catch(o){console.log(o);return}h(t)}S();let l;const C=document.querySelector(".categories-list-main");C.addEventListener("click",x);async function x(t){t.preventDefault();let o;if(d.categoriesMain.innerHTML="",t.target!==t.currentTarget){if(l=t.target.closest("li"),l.textContent==="All categories")try{const e=await r.getPopularBooks();console.log(e)}catch{console.log("error")}try{o=await r.getSelectedCategory(l.textContent)}catch{console.log("error")}B(o)}}const A=document.querySelector(".all-categories-main");A.addEventListener("click",async t=>{if(t.target===t.currentTarget)return;const o=t.target.closest(".book-item").dataset.id,e=await r.getBookDetailedInfo(o),s=p(e);k(s),g(e),document.querySelector(".modal-btn").addEventListener("click",a=>{a.preventDefault(),u(e),b()})});
//# sourceMappingURL=commonHelpers.js.map
