import{r as a}from"./assets/support-fac4ea44.js";import{a as r,i as y}from"./assets/vendor-e2ce0d38.js";class u{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books"}async getCategoriesList(){const e=this.BASE_URL+"/category-list";return(await r.get(e)).data}async getPopularBooks(){const e=this.BASE_URL+"/top-books ";return(await r.get(e)).data}async getSelectedCategory(e){const o=this.BASE_URL+`/category?category=${e}`;return(await r.get(o)).data}async getBookDetailedInfo(e){const o=this.BASE_URL+`/${e}`;return(await r.get(o)).data}}function L(t){const e=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],s;const n=o.findIndex(i=>t._id===i._id);n===-1?(o.push(t),s="remove from shopping list"):(o.splice(n,1),s="add to shopping list"),localStorage.setItem("shoppingList",JSON.stringify(o)),e.textContent=s}function C(t){const e=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],s;o.findIndex(i=>t._id===i._id)===-1?s="add to shopping list":s="remove from shopping list",e.textContent=s}function B(t){return`<div class="modal-backdrop">
    <div class="modal-content-container">
    <svg class="modal-close-btn" width="24" height="24"><use href="./img/symbol-defs.svg#icon-x-close1"></use></svg>
    <img src="${t.book_image}" class="modal-book-image" />
    <div class="modal-book-info">
    <h3 class="modal-title">${t.title}</h3>
    <p class="modal-author">${t.author}</p>
    <p class="modal-description">${t.description}</p>
    <ul class="modal-shops-list">
    <li class="modal-shops-item"><a class="test-link" href="${t.buy_links[0].url}" target="_blank">
              <img width="32" height="11" class="shopping-list-amazon"  src="../img/amazon-1x.png" alt="amazon" />
          </a></li>
    <li class="modal-shops-item"><a class="test-link" href="${t.buy_links[1].url}" target="_blank">
              <img width="16" height="16" class="shopping-list-apple"  src="../img/book-1x.png" alt="apple" />
          </a></li>
    </ul>
    </div>
    <button type="submit" class="modal-btn"></button>

    </div>
    </div>`}function S(t){document.body.insertAdjacentHTML("beforeend",t)}function T(){const t=document.querySelector(".modal-backdrop"),e=document.querySelector(".modal-close-btn");document.addEventListener("keydown",o=>{o.preventDefault(),o.key==="Escape"&&c()}),e.addEventListener("click",o=>{o.preventDefault(),c()}),t.addEventListener("click",o=>{o.preventDefault(),o.target===t&&c()})}function c(){const t=document.querySelector(".modal-backdrop"),e=document.querySelector(".modal-close-btn");t&&t.parentNode&&t.parentNode.removeChild(t),e&&(document.removeEventListener("keydown",o=>{console.log("listener is remove")}),e.removeEventListener("click",o=>{console.log("listener is remove")}),t.removeEventListener("click",o=>{console.log("listener is remove")}))}function w(t){const{book_image:e,title:o,author:s,_id:n}=t;return`<li class="book-item" data-id="${n}">
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
  </li>`}function $(t){return`<ul class='all-categories-main'>${t.map(w).join("")}</ul>`}function b(t){const e=$(t);a.allCategoriesContainer.insertAdjacentHTML("beforeend",e)}function x(t){if(t.textContent!=="All categories"){const e=`<h2 class="title-book-section">${t.textContent}</h2>`;a.allCategoriesContainer.insertAdjacentHTML("beforeend",e),p()}}function A(t){if(t!=="All categories"){const e=`<h2 class="title-book-section">${t}</h2>`;a.allCategoriesContainer.insertAdjacentHTML("beforeend",e),p()}}function p(){document.querySelectorAll(".title-book-section").forEach(function(e){const o=e.textContent.trim(),s=o.lastIndexOf(" "),n=o.slice(0,s)+'<span class="last-word">'+o.slice(s)+"</span>";e.innerHTML=n})}function g(){y.error({title:"",backgroundColor:"rgb(230, 92, 33)",message:"there are no books in this category",position:"topLeft"})}const I=new u;async function h(t){if(t.textContent==="All categories"||t==="All categories"){M("Best Sellers Books");let e;try{e=await I.getPopularBooks()}catch{console.log("error"),g()}const o=e.map(s=>`
      <h3 class="book-author popular-title">${s.list_name}</h3>
<ul class="all-categories-main">`+s.books.map(n=>{const{book_image:i,title:k,author:f,_id:v}=n;return`<li class="book-item" data-id="${v}">
       <div class="book-item-container">
           <div class="book-card-container"> 
            <img class="book-card" src="${i}" alt="${k}">
               <p class="book-card-hover-text">QUICK VIEW</p>
           </div>
           <div class="book-details">
               <p class="book-title">${k}</p>
               <p class="book-author">${f}</p>
           </div>
       </div>
  </li>`}).join("")+`</ul><button class='see-more-btn' data-id='${s.list_name}'>See more</button>`).join("");a.allCategoriesContainer.insertAdjacentHTML("beforeend",o)}}function M(t){const e=`<h2 class="title-book-section">${t}</h2>`;a.allCategoriesContainer.insertAdjacentHTML("afterbegin",e),p()}const _=document.querySelector(".categories-list-main"),E=new u;function j(t){return t.map(e=>`<li class='categories-list-item'><a href="">${e.list_name}</a></li>`).join("")}function H(t){const e=j(t);_.insertAdjacentHTML("beforeend",e)}async function U(){let t;try{t=await E.getCategoriesList()}catch(e){console.log(e);return}H(t)}const d=document.getElementById("scrollUpBtn");function q(){document.body.scrollTop>80||document.documentElement.scrollTop>80?d.style.display="block":d.style.display="none"}function N(){window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("scroll",q);d.addEventListener("click",N);const m=new u;let l;window.addEventListener("load",async()=>{await U(),await h("All categories")});a.categoriesListMain.addEventListener("click",D);async function D(t){t.preventDefault();let e;if(a.allCategoriesContainer.innerHTML="",t.target!==t.currentTarget){l=t.target.closest("li"),P(l),await h(l);try{e=await m.getSelectedCategory(l.textContent)}catch{console.log("error"),g()}x(l),b(e)}}function P(t){const e=document.querySelectorAll(".categories-list-item");for(const o of e)o.textContent===t.textContent?o.classList.add("categories-list-active"):o.classList.remove("categories-list-active")}a.allCategoriesContainer.addEventListener("click",async t=>{if(t.target.nodeName!="H2")if(t.target.nodeName=="BUTTON"){a.allCategoriesContainer.innerHTML="";const e=t.target.closest(".see-more-btn").dataset.id;let o;try{o=await m.getSelectedCategory(e),A(e),b(o)}catch{console.log("error"),g()}}else{const e=t.target.closest(".book-item").dataset.id,o=await m.getBookDetailedInfo(e),s=B(o);S(s),C(o),document.querySelector(".modal-btn").addEventListener("click",i=>{i.preventDefault(),L(o)}),T()}});
//# sourceMappingURL=commonHelpers.js.map
