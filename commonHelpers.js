import{r as s}from"./assets/support-b44b8dbe.js";import{a as l,i as k}from"./assets/vendor-e2ce0d38.js";class d{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books"}async getCategoriesList(){const e=this.BASE_URL+"/category-list";return(await l.get(e)).data}async getPopularBooks(){const e=this.BASE_URL+"/top-books ";return(await l.get(e)).data}async getSelectedCategory(e){const o=this.BASE_URL+`/category?category=${e}`;return(await l.get(o)).data}async getBookDetailedInfo(e){const o=this.BASE_URL+`/${e}`;return(await l.get(o)).data}}function b(t){const e=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],n;const i=o.findIndex(a=>t._id===a._id);i===-1?(o.push(t),n="remove from shopping list"):(o.splice(i,1),n="add to shopping list"),localStorage.setItem("shoppingList",JSON.stringify(o)),e.textContent=n}function f(t){const e=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],n;o.findIndex(a=>t._id===a._id)===-1?n="add to shopping list":n="remove from shopping list",e.textContent=n}function h(t){return`<div class="modal-backdrop">
    <div class="modal-content-container">
    <button type="submit" class="modal-close-btn"><svg width=24 height=24><use href="../img/symbol-defs.svg#icon-x-close"></use></svg></button>
    <img src="${t.book_image}" class="modal-book-image" />
    <div class="modal-book-info">
    <h3 class="modal-title">${t.title}</h3>
    <p class="modal-author">${t.author}</p>
    <p class="modal-description">${t.description}</p>
    <ul class="modal-shops-list">
    <li class="modal-shops-item"><a href="${t.buy_links[0].url}" target="_blank"><img src="../img/amazon-l.png" width=62 height=19/></a></li>
    <li class="modal-shops-item"><a href="${t.buy_links[1].url}" target="_blank"><img src="../img/apple-l.png" width=33 height=32/></a></li>
    </ul>
    </div>
    <button type="submit" class="modal-btn"></button>

    </div>
    </div>`}function L(t){document.body.insertAdjacentHTML("beforeend",t)}function v(){const t=document.querySelector(".modal-backdrop"),e=document.querySelector(".modal-close-btn");document.addEventListener("keydown",o=>{o.preventDefault(),o.key==="Escape"&&c()}),e.addEventListener("click",o=>{o.preventDefault(),c()}),t.addEventListener("click",o=>{o.preventDefault(),o.target===t&&c()})}function c(){const t=document.querySelector(".modal-backdrop"),e=document.querySelector(".modal-close-btn");t&&t.parentNode&&t.parentNode.removeChild(t),e&&(document.removeEventListener("keydown",o=>{console.log("listener is remove")}),e.removeEventListener("click",o=>{console.log("listener is remove")}),t.removeEventListener("click",o=>{console.log("listener is remove")}))}function y(t){const{book_image:e,title:o,author:n,_id:i}=t;return`<li class="book-item" data-id="${i}">
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
  </li>`}function T(t){return t.map(y).join("")}function u(t){C();const e=T(t);s.categoriesMain.insertAdjacentHTML("beforeend",e)}function B(t){if(t.textContent!=="All categories"){const e=`${t.textContent}`;s.categoriesMainTitle.insertAdjacentHTML("beforeend",e)}}function C(){document.querySelectorAll(".title-book-section").forEach(function(e){const o=e.textContent.trim(),n=o.lastIndexOf(" "),i=o.slice(0,n)+'<span class="last-word">'+o.slice(n)+"</span>";e.innerHTML=i})}function m(){k.error({title:"",backgroundColor:"rgb(230, 92, 33)",message:"there are no books in this category",position:"topLeft"})}const S=new d;async function p(t){if(t.textContent==="All categories"||t==="All categories"){M("Best Sellers Books");try{(await S.getPopularBooks()).map(o=>{A(o),w()})}catch{console.log("error"),m()}}}function x(t){return`<li class="li-title"><h3 class="book-author popular-title">${t.list_name}</h3></li>`}function A(t){s.categoriesMain.insertAdjacentHTML("beforeend",x(t)),u(t.books)}function M(t){const e=`${t}`;s.categoriesMainTitle.insertAdjacentHTML("afterbegin",e)}function w(){const t="<button class='see-more-btn'>See more</button>";s.categoriesMain.insertAdjacentHTML("beforeend",t)}const $=document.querySelector(".categories-list-main"),I=new d;function _(t){return t.map(e=>`<li class='categories-list-item'><a href="">${e.list_name}</a></li>`).join("")}function q(t){const e=_(t);$.insertAdjacentHTML("beforeend",e)}async function H(){let t;try{t=await I.getCategoriesList()}catch(e){console.log(e);return}q(t)}function j(){H(),p("All categories")}const g=new d;let r;window.addEventListener("load",j);s.categoriesListMain.addEventListener("click",E);async function E(t){t.preventDefault();let e;if(s.categoriesMain.innerHTML="",s.categoriesMainTitle.innerHTML="",t.target!==t.currentTarget){r=t.target.closest("li"),D(r),p(r);try{e=await g.getSelectedCategory(r.textContent)}catch{console.log("error"),m()}B(r),u(e)}}function D(t){const e=document.querySelectorAll(".categories-list-item");for(const o of e)o.textContent===t.textContent?o.classList.add("categories-list-active"):o.classList.remove("categories-list-active")}s.categoriesMain.addEventListener("click",async t=>{if(t.target===t.currentTarget)return;const e=t.target.closest(".book-item").dataset.id,o=await g.getBookDetailedInfo(e),n=h(o);L(n),f(o),document.querySelector(".modal-btn").addEventListener("click",a=>{a.preventDefault(),b(o)}),v()});
//# sourceMappingURL=commonHelpers.js.map
