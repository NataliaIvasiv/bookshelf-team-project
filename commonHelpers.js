import{r as n}from"./assets/support-89583a6d.js";import{a as l,i as v}from"./assets/vendor-e2ce0d38.js";class m{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books"}async getCategoriesList(){const e=this.BASE_URL+"/category-list";return(await l.get(e)).data}async getPopularBooks(){const e=this.BASE_URL+"/top-books ";return(await l.get(e)).data}async getSelectedCategory(e){const o=this.BASE_URL+`/category?category=${e}`;return(await l.get(o)).data}async getBookDetailedInfo(e){const o=this.BASE_URL+`/${e}`;return(await l.get(o)).data}}function L(t){const e=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],s;const a=o.findIndex(i=>t._id===i._id);a===-1?(o.push(t),s="remove from shopping list"):(o.splice(a,1),s="add to shopping list"),localStorage.setItem("shoppingList",JSON.stringify(o)),e.textContent=s}function y(t){const e=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],s;o.findIndex(i=>t._id===i._id)===-1?s="add to shopping list":s="remove from shopping list",e.textContent=s}function C(t){return`<div class="modal-backdrop">
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
    </div>`}function S(t){document.body.insertAdjacentHTML("beforeend",t)}function B(){const t=document.querySelector(".modal-backdrop"),e=document.querySelector(".modal-close-btn");document.addEventListener("keydown",o=>{o.preventDefault(),o.key==="Escape"&&c()}),e.addEventListener("click",o=>{o.preventDefault(),c()}),t.addEventListener("click",o=>{o.preventDefault(),o.target===t&&c()})}function c(){const t=document.querySelector(".modal-backdrop"),e=document.querySelector(".modal-close-btn");t&&t.parentNode&&t.parentNode.removeChild(t),e&&(document.removeEventListener("keydown",o=>{console.log("listener is remove")}),e.removeEventListener("click",o=>{console.log("listener is remove")}),t.removeEventListener("click",o=>{console.log("listener is remove")}))}function $(t){const{book_image:e,title:o,author:s,_id:a}=t;return`<li class="book-item" data-id="${a}">
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
  </li>`}function x(t){return`<ul class='all-categories-main'>${t.map($).join("")}</ul>`}function k(t){const e=x(t);n.allCategoriesContainer.insertAdjacentHTML("beforeend",e)}function T(t){if(t.textContent!=="All categories"){const e=`<h2 class="title-book-section">${t.textContent}</h2>`;n.allCategoriesContainer.insertAdjacentHTML("beforeend",e),u()}}function w(t){if(t!=="All categories"){const e=`<h2 class="title-book-section">${t}</h2>`;n.allCategoriesContainer.insertAdjacentHTML("beforeend",e),u()}}function u(){document.querySelectorAll(".title-book-section").forEach(function(e){const o=e.textContent.trim(),s=o.lastIndexOf(" "),a=o.slice(0,s)+'<span class="last-word">'+o.slice(s)+"</span>";e.innerHTML=a})}function g(){v.error({title:"",backgroundColor:"rgb(230, 92, 33)",message:"there are no books in this category",position:"topLeft"})}const A=new m;async function b(t){if(t.textContent==="All categories"||t==="All categories"){I("Best Sellers Books");let e;try{e=await A.getPopularBooks()}catch{console.log("error"),g()}const o=e.map(s=>`
      <h3 class="book-author popular-title">${s.list_name}</h3>
<ul class="all-categories-main">`+s.books.map(a=>{const{book_image:i,title:p,author:h,_id:f}=a;return`<li class="book-item" data-id="${f}">
       <div class="book-item-container">
           <div class="book-card-container"> 
            <img class="book-card" src="${i}" alt="${p}">
               <p class="book-card-hover-text">QUICK VIEW</p>
           </div>
           <div class="book-details">
               <p class="book-title">${p}</p>
               <p class="book-author">${h}</p>
           </div>
       </div>
  </li>`}).join("")+`</ul><button class='see-more-btn' data-id='${s.list_name}'>See more</button>`).join("");n.allCategoriesContainer.insertAdjacentHTML("beforeend",o)}}function I(t){const e=`<h2 class="title-book-section">${t}</h2>`;n.allCategoriesContainer.insertAdjacentHTML("afterbegin",e),u()}const M=document.querySelector(".categories-list-main"),_=new m;function j(t){return t.map(e=>`<li class='categories-list-item'><a href="">${e.list_name}</a></li>`).join("")}function H(t){const e=j(t);M.insertAdjacentHTML("beforeend",e)}async function q(){let t;try{t=await _.getCategoriesList()}catch(e){console.log(e);return}H(t)}const d=new m;let r;window.addEventListener("load",async()=>{await q(),await b("All categories")});n.categoriesListMain.addEventListener("click",E);async function E(t){t.preventDefault();let e;if(n.allCategoriesContainer.innerHTML="",t.target!==t.currentTarget){r=t.target.closest("li"),N(r),await b(r);try{e=await d.getSelectedCategory(r.textContent)}catch{console.log("error"),g()}T(r),k(e)}}function N(t){const e=document.querySelectorAll(".categories-list-item");for(const o of e)o.textContent===t.textContent?o.classList.add("categories-list-active"):o.classList.remove("categories-list-active")}n.allCategoriesContainer.addEventListener("click",async t=>{if(t.target.nodeName!="H2")if(t.target.nodeName=="BUTTON"){n.allCategoriesContainer.innerHTML="";const e=t.target.closest(".see-more-btn").dataset.id;let o;try{o=await d.getSelectedCategory(e),w(e),k(o)}catch{console.log("error"),g()}}else{const e=t.target.closest(".book-item").dataset.id,o=await d.getBookDetailedInfo(e),s=C(o);S(s),y(o),document.querySelector(".modal-btn").addEventListener("click",i=>{i.preventDefault(),L(o)}),B()}});
//# sourceMappingURL=commonHelpers.js.map
