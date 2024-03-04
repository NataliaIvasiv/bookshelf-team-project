import{r as s}from"./assets/header-c5243998.js";import{a as r}from"./assets/vendor-d34a1206.js";class u{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books"}async getCategoriesList(){const e=this.BASE_URL+"/category-list";return(await r.get(e)).data}async getPopularBooks(){const e=this.BASE_URL+"/top-books ";return(await r.get(e)).data}async getSelectedCategory(e){const o=this.BASE_URL+`/category?category=${e}`;return(await r.get(o)).data}async getBookDetailedInfo(e){const o=this.BASE_URL+`/${e}`;return(await r.get(o)).data}}function g(t){const e=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],n;const a=o.findIndex(i=>t._id===i._id);a===-1?(o.push(t),n="remove from shopping list"):(o.splice(a,1),n="add to shopping list"),localStorage.setItem("shoppingList",JSON.stringify(o)),e.textContent=n}function k(t){const e=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],n;o.findIndex(i=>t._id===i._id)===-1?n="add to shopping list":n="remove from shopping list",e.textContent=n}function b(t){return`<div class="modal-backdrop">
    <div class="modal-content-container">
    <button type="submit" class="modal-close-btn"><img src="../img/symbol-defs.svg#icon-x-close" width=24 heigh=24/></button>
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
    </div>`}function f(t){document.body.insertAdjacentHTML("beforeend",t)}function h(){const t=document.querySelector(".modal-backdrop"),e=document.querySelector(".modal-close-btn");document.addEventListener("keydown",o=>{o.preventDefault(),o.key==="Escape"&&c()}),e.addEventListener("click",o=>{o.preventDefault(),c()}),t.addEventListener("click",o=>{o.preventDefault(),o.target===s.modalBackdrop&&c()})}function c(){const t=document.querySelector(".modal-backdrop"),e=document.querySelector(".modal-close-btn");t.parentNode.removeChild(t),document.removeEventListener("keydown",o=>{console.log("listener is remove")}),e.removeEventListener("click",o=>{console.log("listener is remove")}),t.removeEventListener("click",o=>{console.log("listener is remove")})}const L=document.querySelector(".categories-list-main");function v(t){return t.map(e=>`<li class='categories-list-item'><a href="">${e.list_name}</a></li>`).join("")}function y(t){const e=v(t);L.insertAdjacentHTML("beforeend",e)}function B(t){const{book_image:e,title:o,author:n,_id:a}=t;return`<li class="book-item" data-id="${a}">
       <div class="book-item-container">
           <div class="book-card-container"> 
            <img class="book-card" src="${e}" alt="${o}">
               <p class="book-card-hover-text">QUICK VIEW</p>
           </div>
           <div class="book-details">
               <p class="book-title">${o}</p>
               <p class="book-author">${n}</p>
           </div>
       </div>
  </li>`}function T(t){return t.map(B).join("")}function m(t){S();const e=T(t);s.categoriesMain.insertAdjacentHTML("beforeend",e)}function A(t){if(t.textContent!=="All categories"){const e=`${t.textContent}`;s.categoriesMainTitle.insertAdjacentHTML("beforeend",e)}}function S(){document.querySelectorAll(".title-book-section").forEach(function(e){const o=e.textContent.trim(),n=o.lastIndexOf(" "),a=o.slice(0,n)+'<span class="last-word">'+o.slice(n)+"</span>";e.innerHTML=a})}const C=new u;async function p(t){if(t.textContent==="All categories"||t==="All categories"){$("Best Sellers Books");try{(await C.getPopularBooks()).map(o=>{M(o)})}catch{console.log("error")}}}function x(t){return`<li class="li-title"><h3 class="book-author popular-title">${t.list_name}</h3></li>`}function M(t){s.categoriesMain.insertAdjacentHTML("beforeend",x(t)),m(t.books)}function $(t){const e=`${t}`;s.categoriesMainTitle.insertAdjacentHTML("afterbegin",e)}const d=new u;async function w(){let t;try{t=await d.getCategoriesList()}catch(e){console.log(e);return}y(t)}w();let l;window.addEventListener("load",p("All categories"));s.categoriesListMain.addEventListener("click",I);async function I(t){t.preventDefault();let e;if(s.categoriesMain.innerHTML="",s.categoriesMainTitle.innerHTML="",t.target!==t.currentTarget){l=t.target.closest("li"),p(l);try{e=await d.getSelectedCategory(l.textContent)}catch{console.log("error")}A(l),m(e)}}s.categoriesMain.addEventListener("click",async t=>{if(t.target===t.currentTarget)return;const e=t.target.closest(".book-item").dataset.id,o=await d.getBookDetailedInfo(e),n=b(o);f(n),k(o),document.querySelector(".modal-btn").addEventListener("click",i=>{i.preventDefault(),g(o)}),h()});
//# sourceMappingURL=commonHelpers.js.map
