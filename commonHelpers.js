import{r as s}from"./assets/modal-sign-up-b6142d24.js";import{a as l,i as g}from"./assets/vendor-fe89f55d.js";class u{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books"}async getCategoriesList(){const e=this.BASE_URL+"/category-list";return(await l.get(e)).data}async getPopularBooks(){const e=this.BASE_URL+"/top-books ";return(await l.get(e)).data}async getSelectedCategory(e){const o=this.BASE_URL+`/category?category=${e}`;return(await l.get(o)).data}async getBookDetailedInfo(e){const o=this.BASE_URL+`/${e}`;return(await l.get(o)).data}}function k(t){const e=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],n;const i=o.findIndex(a=>t._id===a._id);i===-1?(o.push(t),n="remove from shopping list"):(o.splice(i,1),n="add to shopping list"),localStorage.setItem("shoppingList",JSON.stringify(o)),e.textContent=n}function b(t){const e=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],n;o.findIndex(a=>t._id===a._id)===-1?n="add to shopping list":n="remove from shopping list",e.textContent=n}function f(t){return`<div class="modal-backdrop">
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
    </div>`}function h(t){document.body.insertAdjacentHTML("beforeend",t)}function L(){const t=document.querySelector(".modal-backdrop"),e=document.querySelector(".modal-close-btn");document.addEventListener("keydown",o=>{o.preventDefault(),o.key==="Escape"&&c()}),e.addEventListener("click",o=>{o.preventDefault(),c()}),t.addEventListener("click",o=>{o.preventDefault(),o.target===s.modalBackdrop&&c()})}function c(){const t=document.querySelector(".modal-backdrop"),e=document.querySelector(".modal-close-btn");t.parentNode.removeChild(t),document.removeEventListener("keydown",o=>{console.log("listener is remove")}),e.removeEventListener("click",o=>{console.log("listener is remove")}),t.removeEventListener("click",o=>{console.log("listener is remove")})}const y=document.querySelector(".categories-list-main");function v(t){return t.map(e=>`<li class='categories-list-item'><a href="">${e.list_name}</a></li>`).join("")}function B(t){const e=v(t);y.insertAdjacentHTML("beforeend",e)}function T(t){const{book_image:e,title:o,author:n,_id:i}=t;return`<li class="book-item" data-id="${i}">
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
  </li>`}function C(t){return t.map(T).join("")}function m(t){A();const e=C(t);s.categoriesMain.insertAdjacentHTML("beforeend",e)}function S(t){if(t.textContent!=="All categories"){const e=`${t.textContent}`;s.categoriesMainTitle.insertAdjacentHTML("beforeend",e)}}function A(){document.querySelectorAll(".title-book-section").forEach(function(e){const o=e.textContent.trim(),n=o.lastIndexOf(" "),i=o.slice(0,n)+'<span class="last-word">'+o.slice(n)+"</span>";e.innerHTML=i})}function x(){g.error({title:"",backgroundColor:"rgb(230, 92, 33)",message:"there are no books in this category",position:"topLeft"})}const M=new u;async function p(t){if(t.textContent==="All categories"||t==="All categories"){I("Best Sellers Books");try{(await M.getPopularBooks()).map(o=>{w(o)})}catch{console.log("error"),x()}}}function $(t){return`<li class="li-title"><h3 class="book-author popular-title">${t.list_name}</h3></li>`}function w(t){s.categoriesMain.insertAdjacentHTML("beforeend",$(t)),m(t.books)}function I(t){const e=`${t}`;s.categoriesMainTitle.insertAdjacentHTML("afterbegin",e)}const d=new u;async function _(){let t;try{t=await d.getCategoriesList()}catch(e){console.log(e);return}B(t)}_();let r;window.addEventListener("load",p("All categories"));s.categoriesListMain.addEventListener("click",q);async function q(t){t.preventDefault();let e;if(s.categoriesMain.innerHTML="",s.categoriesMainTitle.innerHTML="",t.target!==t.currentTarget){r=t.target.closest("li"),E(r),p(r);try{e=await d.getSelectedCategory(r.textContent)}catch{console.log("error"),emptyPage()}S(r),m(e)}}function E(t){const e=document.querySelectorAll(".categories-list-item");console.log(e);for(const o of e)o.textContent===t.textContent?o.classList.add("categories-list-active"):o.classList.remove("categories-list-active")}s.categoriesMain.addEventListener("click",async t=>{if(t.target===t.currentTarget)return;const e=t.target.closest(".book-item").dataset.id,o=await d.getBookDetailedInfo(e),n=f(o);h(n),b(o),document.querySelector(".modal-btn").addEventListener("click",a=>{a.preventDefault(),k(o)}),L()});
//# sourceMappingURL=commonHelpers.js.map
