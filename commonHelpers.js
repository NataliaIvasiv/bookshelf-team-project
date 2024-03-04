import{r as s}from"./assets/modal-sign-up-6d1c0031.js";import{a as l,i as k}from"./assets/vendor-fe89f55d.js";class u{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books"}async getCategoriesList(){const e=this.BASE_URL+"/category-list";return(await l.get(e)).data}async getPopularBooks(){const e=this.BASE_URL+"/top-books ";return(await l.get(e)).data}async getSelectedCategory(e){const o=this.BASE_URL+`/category?category=${e}`;return(await l.get(o)).data}async getBookDetailedInfo(e){const o=this.BASE_URL+`/${e}`;return(await l.get(o)).data}}function b(t){const e=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],n;const i=o.findIndex(a=>t._id===a._id);i===-1?(o.push(t),n="remove from shopping list"):(o.splice(i,1),n="add to shopping list"),localStorage.setItem("shoppingList",JSON.stringify(o)),e.textContent=n}function f(t){const e=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],n;o.findIndex(a=>t._id===a._id)===-1?n="add to shopping list":n="remove from shopping list",e.textContent=n}function h(t){return`<div class="modal-backdrop">
    <div class="modal-content-container">
    <button type="submit" class="modal-close-btn"><svg width=24 height=24><use href="../img/symbol-defs.svg#icon-x-close"></use></svg></button>
    <img src="${t.book_image}" class="modal-book-image" />
    <div class="modal-book-info">
    <h3 class="modal-title">${t.title}</h3>
    <p class="modal-author">${t.author}</p>
    <p class="modal-description">${t.description}</p>
    <ul class="modal-shops-list">
    <li class="modal-shops-item"><a href="${t.buy_links[0].url}"><img src="../img/amazon-l.png" width=62 height=19/></a></li>
    <li class="modal-shops-item"><a href="${t.buy_links[1].url}"><img src="../img/apple-l.png" width=33 height=32/></a></li>
    </ul>
    </div>
    <button type="submit" class="modal-btn"></button>

    </div>
    </div>`}function L(t){document.body.insertAdjacentHTML("beforeend",t)}function v(){const t=document.querySelector(".modal-backdrop"),e=document.querySelector(".modal-close-btn");document.addEventListener("keydown",o=>{o.preventDefault(),o.key==="Escape"&&c()}),e.addEventListener("click",o=>{o.preventDefault(),c()}),t.addEventListener("click",o=>{o.preventDefault(),o.target===t&&c()})}function c(){const t=document.querySelector(".modal-backdrop"),e=document.querySelector(".modal-close-btn");t&&t.parentNode&&t.parentNode.removeChild(t),e&&(document.removeEventListener("keydown",o=>{console.log("listener is remove")}),e.removeEventListener("click",o=>{console.log("listener is remove")}),t.removeEventListener("click",o=>{console.log("listener is remove")}))}const y=document.querySelector(".categories-list-main");function T(t){return t.map(e=>`<li class='categories-list-item'><a href="">${e.list_name}</a></li>`).join("")}function B(t){const e=T(t);y.insertAdjacentHTML("beforeend",e)}function C(t){const{book_image:e,title:o,author:n,_id:i}=t;return`<li class="book-item" data-id="${i}">
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
  </li>`}function S(t){return t.map(C).join("")}function m(t){M();const e=S(t);s.categoriesMain.insertAdjacentHTML("beforeend",e)}function x(t){if(t.textContent!=="All categories"){const e=`${t.textContent}`;s.categoriesMainTitle.insertAdjacentHTML("beforeend",e)}}function M(){document.querySelectorAll(".title-book-section").forEach(function(e){const o=e.textContent.trim(),n=o.lastIndexOf(" "),i=o.slice(0,n)+'<span class="last-word">'+o.slice(n)+"</span>";e.innerHTML=i})}function p(){k.error({title:"",backgroundColor:"rgb(230, 92, 33)",message:"there are no books in this category",position:"topLeft"})}const A=new u;async function g(t){if(t.textContent==="All categories"||t==="All categories"){I("Best Sellers Books");try{(await A.getPopularBooks()).map(o=>{$(o),_()})}catch{console.log("error"),p()}}}function w(t){return`<li class="li-title"><h3 class="book-author popular-title">${t.list_name}</h3></li>`}function $(t){s.categoriesMain.insertAdjacentHTML("beforeend",w(t)),m(t.books)}function I(t){const e=`${t}`;s.categoriesMainTitle.insertAdjacentHTML("afterbegin",e)}function _(){const t="<button class='see-more-btn'>See more</button>";s.categoriesMain.insertAdjacentHTML("beforeend",t)}const d=new u;async function q(){let t;try{t=await d.getCategoriesList()}catch(e){console.log(e);return}B(t)}q();let r;window.addEventListener("load",g("All categories"));s.categoriesListMain.addEventListener("click",H);async function H(t){t.preventDefault();let e;if(s.categoriesMain.innerHTML="",s.categoriesMainTitle.innerHTML="",t.target!==t.currentTarget){r=t.target.closest("li"),j(r),g(r);try{e=await d.getSelectedCategory(r.textContent)}catch{console.log("error"),p()}x(r),m(e)}}function j(t){const e=document.querySelectorAll(".categories-list-item");for(const o of e)o.textContent===t.textContent?o.classList.add("categories-list-active"):o.classList.remove("categories-list-active")}s.categoriesMain.addEventListener("click",async t=>{if(t.target===t.currentTarget)return;const e=t.target.closest(".book-item").dataset.id,o=await d.getBookDetailedInfo(e),n=h(o);L(n),f(o),document.querySelector(".modal-btn").addEventListener("click",a=>{a.preventDefault(),b(o)}),v()});
//# sourceMappingURL=commonHelpers.js.map
