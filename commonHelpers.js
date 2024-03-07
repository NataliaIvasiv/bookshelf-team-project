import{r as a}from"./assets/support-1beaf3d1.js";import{a as r,i as y}from"./assets/vendor-e2ce0d38.js";class m{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books"}async getCategoriesList(){const t=this.BASE_URL+"/category-list";return(await r.get(t)).data}async getPopularBooks(){const t=this.BASE_URL+"/top-books ";return(await r.get(t)).data}async getSelectedCategory(t){const o=this.BASE_URL+`/category?category=${t}`;return(await r.get(o)).data}async getBookDetailedInfo(t){const o=this.BASE_URL+`/${t}`;return(await r.get(o)).data}}function L(e){return`<div class="modal-backdrop">
    <div class="modal-content-container">
    <svg class="modal-close-btn" width="24" height="24"><use href="./img/symbol-defs.svg#icon-x-close1"></use></svg>
    <img src="${e.book_image}" class="modal-book-image" />
    <div class="modal-book-info">
    <h3 class="modal-title">${e.title}</h3>
    <p class="modal-author">${e.author}</p>
    <p class="modal-description">${e.description}</p>
    <ul class="modal-shops-list">
    <li class="modal-shops-item"><a class="test-link" href="${e.buy_links[0].url}" target="_blank" rel="noopener noreferrer">
              <img width="32" height="11" class="shopping-list-amazon"  src="../img/amazon-1x.png" alt="amazon" />
          </a></li>
    <li class="modal-shops-item"><a class="test-link" href="${e.buy_links[1].url}" target="_blank" rel="noopener noreferrer">
              <img width="16" height="16" class="shopping-list-apple"  src="../img/book-1x.png" alt="apple" />
          </a></li>
    </ul>
    </div>
    <button type="submit" class="modal-btn"></button>

    </div>
    </div>`}function C(e){document.body.insertAdjacentHTML("beforeend",e)}function T(){const e=document.querySelector(".modal-backdrop"),t=document.querySelector(".modal-close-btn");document.addEventListener("keydown",o=>{o.key==="Escape"&&c()}),t.addEventListener("click",o=>{c()}),e.addEventListener("click",o=>{o.target===e&&c()})}function c(){const e=document.querySelector(".modal-backdrop"),t=document.querySelector(".modal-close-btn");e&&e.parentNode&&e.parentNode.removeChild(e),t&&(document.removeEventListener("keydown",o=>{console.log("listener is remove")}),t.removeEventListener("click",o=>{console.log("listener is remove")}),e.removeEventListener("click",o=>{console.log("listener is remove")})),document.body.style.overflow=null}function x(){const e=document.querySelector(".modal-success-text"),t=document.querySelector(".modal-btn");if(!e){if(t.textContent.trim().toLowerCase()==="remove from shopping list")return;S(`<p class="modal-success-text">Congratulations! You have added the book to the shopping list.
       To delete, press the button "Remove from the shopping list".</p>`)}}function S(e){document.querySelector(".modal-content-container").insertAdjacentHTML("beforeend",e)}function w(e){const t=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],s;const n=o.findIndex(i=>e._id===i._id);n===-1?(o.push(e),s="remove from shopping list"):(o.splice(n,1),s="add to shopping list"),localStorage.setItem("shoppingList",JSON.stringify(o)),t.textContent=s}function B(e){const t=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],s;o.findIndex(i=>e._id===i._id)===-1?s="add to shopping list":s="remove from shopping list",t.textContent=s}function $(e){const{book_image:t,title:o,author:s,_id:n}=e;return`<li class="book-item" data-id="${n}">
       <div class="book-item-container">
           <div class="book-card-container"> 
            <img class="book-card" src="${t}" alt="${o}">
               <p class="book-card-hover-text">QUICK VIEW</p>
           </div>
           <div class="book-details">
               <p class="book-title">${o}</p>
               <p class="book-author">${s}</p>
           </div>
       </div>
  </li>`}function A(e){return`<ul class='all-categories-main'>${e.map($).join("")}</ul>`}function b(e){const t=A(e);a.allCategoriesContainer.insertAdjacentHTML("beforeend",t)}function I(e){if(e.textContent!=="All categories"){const t=`<h2 class="title-book-section">${e.textContent}</h2>`;a.allCategoriesContainer.insertAdjacentHTML("beforeend",t),p()}}function M(e){if(e!=="All categories"){const t=`<h2 class="title-book-section">${e}</h2>`;a.allCategoriesContainer.insertAdjacentHTML("beforeend",t),p()}}function p(){document.querySelectorAll(".title-book-section").forEach(function(t){const o=t.textContent.trim(),s=o.lastIndexOf(" "),n=o.slice(0,s)+'<span class="last-word">'+o.slice(s)+"</span>";t.innerHTML=n})}function g(){y.error({title:"",backgroundColor:"rgb(230, 92, 33)",message:"there are no books in this category",position:"topLeft"})}const _=new m;async function h(e){if(e.textContent==="All categories"||e==="All categories"){q("Best Sellers Books");let t;try{t=await _.getPopularBooks()}catch{console.log("error"),g()}const o=t.map(s=>`
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
  </li>`}).join("")+`</ul><button class='see-more-btn' data-id='${s.list_name}'>See more</button>`).join("");a.allCategoriesContainer.insertAdjacentHTML("beforeend",o)}}function q(e){const t=`<h2 class="title-book-section">${e}</h2>`;a.allCategoriesContainer.insertAdjacentHTML("afterbegin",t),p()}const E=document.querySelector(".categories-list-main"),j=new m;function H(e){return e.map(t=>`<li class='categories-list-item'><a href="">${t.list_name}</a></li>`).join("")}function U(e){const t=H(e);E.insertAdjacentHTML("beforeend",t)}async function N(){let e;try{e=await j.getCategoriesList()}catch(t){console.log(t);return}U(e)}const d=document.getElementById("scrollUpBtn");function P(){document.body.scrollTop>80||document.documentElement.scrollTop>80?d.style.display="block":d.style.display="none"}function W(){window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("scroll",P);d.addEventListener("click",W);const u=new m;let l;window.addEventListener("load",async()=>{await N(),await h("All categories")});a.categoriesListMain.addEventListener("click",z);async function z(e){e.preventDefault();let t;if(a.allCategoriesContainer.innerHTML="",e.target!==e.currentTarget){l=e.target.closest("li"),D(l),await h(l);try{t=await u.getSelectedCategory(l.textContent)}catch{console.log("error"),g()}I(l),b(t)}}function D(e){const t=document.querySelectorAll(".categories-list-item");for(const o of t)o.textContent===e.textContent?o.classList.add("categories-list-active"):o.classList.remove("categories-list-active")}a.allCategoriesContainer.addEventListener("click",async e=>{if(e.target.nodeName!="H2")if(e.target.nodeName=="BUTTON"){a.allCategoriesContainer.innerHTML="";const t=e.target.closest(".see-more-btn").dataset.id;let o;try{o=await u.getSelectedCategory(t),M(t),b(o)}catch{console.log("error"),g()}}else{const t=e.target.closest(".book-item").dataset.id,o=await u.getBookDetailedInfo(t),s=L(o);C(s),document.body.style.overflow="hidden",B(o),document.querySelector(".modal-btn").addEventListener("click",i=>{i.preventDefault(),x(),w(o)}),T()}});
//# sourceMappingURL=commonHelpers.js.map
