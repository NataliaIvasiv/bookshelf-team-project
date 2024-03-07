import{a as b,b as C,c as x,d as h,e as T,f as $,r as n}from"./assets/support-74f551e0.js";import{a as l,i as w}from"./assets/vendor-e2ce0d38.js";class u{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books"}async getCategoriesList(){const t=this.BASE_URL+"/category-list";return(await l.get(t)).data}async getPopularBooks(){const t=this.BASE_URL+"/top-books ";return(await l.get(t)).data}async getSelectedCategory(t){const o=this.BASE_URL+`/category?category=${t}`;return(await l.get(o)).data}async getBookDetailedInfo(t){const o=this.BASE_URL+`/${t}`;return(await l.get(o)).data}}function S(e){return`<div class="modal-backdrop">
    <div class="modal-content-container">
    <svg class="modal-close-btn" width="24" height="24"><use href="./img/symbol-defs.svg#icon-x-close1"></use></svg>
    <img src="${e.book_image}" class="modal-book-image" />
    <div class="modal-book-info">
    <h3 class="modal-title">${e.title}</h3>
    <p class="modal-author">${e.author}</p>
    <p class="modal-description">${e.description}</p>
    <ul class="modal-shops-list">
    <li class="modal-shops-item"><a class="test-link" href="${e.buy_links[0].url}" target="_blank" rel="noopener noreferrer">
    <img width="32" height="11" class="shopping-list-amazon" srcset="
    ${b} 1x,
    ${C} 2x,
    ${x} 3x
  " src="${b}" alt="amazon" />
          </a></li>
    <li class="modal-shops-item"><a class="test-link" href="${e.buy_links[1].url}" target="_blank" rel="noopener noreferrer">
    <img width="16" height="16" class="shopping-list-apple" srcset="
    ${h} 1x,
    ${T} 2x,
    ${$} 3x" src="${h}" alt="apple" />
          </a></li>
    </ul>
    </div>
    <button type="submit" class="modal-btn"></button>

    </div>
    </div>`}function B(e){document.body.insertAdjacentHTML("beforeend",e)}function A(){const e=document.querySelector(".modal-backdrop"),t=document.querySelector(".modal-close-btn");document.addEventListener("keydown",o=>{o.key==="Escape"&&c()}),t.addEventListener("click",o=>{c()}),e.addEventListener("click",o=>{o.target===e&&c()})}function c(){const e=document.querySelector(".modal-backdrop"),t=document.querySelector(".modal-close-btn");e&&e.parentNode&&e.parentNode.removeChild(e),t&&(document.removeEventListener("keydown",o=>{console.log("listener is remove")}),t.removeEventListener("click",o=>{console.log("listener is remove")}),e.removeEventListener("click",o=>{console.log("listener is remove")})),document.body.style.overflow=null}function I(){const e=document.querySelector(".modal-success-text"),t=document.querySelector(".modal-btn");if(e)t.textContent.trim().toLowerCase()==="remove from shopping list"&&e.parentNode.removeChild(e);else{if(t.textContent.trim().toLowerCase()==="remove from shopping list")return;M(`<p class="modal-success-text">Congratulations! You have added the book to the shopping list.
       To delete, press the button "Remove from the shopping list".</p>`)}}function M(e){document.querySelector(".modal-content-container").insertAdjacentHTML("beforeend",e)}function _(e){const t=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],s;const a=o.findIndex(i=>e._id===i._id);a===-1?(o.push(e),s="remove from shopping list"):(o.splice(a,1),s="add to shopping list"),localStorage.setItem("shoppingList",JSON.stringify(o)),t.textContent=s}function E(e){const t=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],s;o.findIndex(i=>e._id===i._id)===-1?s="add to shopping list":s="remove from shopping list",t.textContent=s}function q(e){const{book_image:t,title:o,author:s,_id:a}=e;return`<li class="book-item" data-id="${a}">
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
  </li>`}function j(e){return`<ul class='all-categories-main'>${e.map(q).join("")}</ul>`}function f(e){const t=j(e);n.allCategoriesContainer.insertAdjacentHTML("beforeend",t)}function H(e){if(e.textContent!=="All categories"){const t=`<h2 class="title-book-section">${e.textContent}</h2>`;n.allCategoriesContainer.insertAdjacentHTML("beforeend",t),p()}}function U(e){if(e!=="All categories"){const t=`<h2 class="title-book-section">${e}</h2>`;n.allCategoriesContainer.insertAdjacentHTML("beforeend",t),p()}}function p(){document.querySelectorAll(".title-book-section").forEach(function(t){const o=t.textContent.trim(),s=o.lastIndexOf(" "),a=o.slice(0,s)+'<span class="last-word">'+o.slice(s)+"</span>";t.innerHTML=a})}function g(){w.error({title:"",backgroundColor:"rgb(230, 92, 33)",message:"there are no books in this category",position:"topLeft"})}function N(){n.loadElem.classList.remove("hide-loader")}function z(){n.loadElem.classList.add("hide-loader")}const P=new u;async function v(e){if(e.textContent==="All categories"||e==="All categories"){W("Best Sellers Books");let t;try{t=await P.getPopularBooks()}catch{console.log("error"),g()}const o=t.map(s=>`
      <h3 class="book-author popular-title">${s.list_name}</h3>
<ul class="all-categories-main">`+s.books.map(a=>{const{book_image:i,title:k,author:y,_id:L}=a;return`<li class="book-item" data-id="${L}">
       <div class="book-item-container">
           <div class="book-card-container"> 
            <img class="book-card" src="${i}" alt="${k}">
               <p class="book-card-hover-text">QUICK VIEW</p>
           </div>
           <div class="book-details">
               <p class="book-title">${k}</p>
               <p class="book-author">${y}</p>
           </div>
       </div>
  </li>`}).join("")+`</ul><button class='see-more-btn' data-id='${s.list_name}'>See more</button>`).join("");n.allCategoriesContainer.insertAdjacentHTML("beforeend",o)}}function W(e){const t=`<h2 class="title-book-section">${e}</h2>`;n.allCategoriesContainer.insertAdjacentHTML("afterbegin",t),p()}const D=document.querySelector(".categories-list-main"),J=new u;function K(e){return e.map(t=>`<li class='categories-list-item'><a href="">${t.list_name}</a></li>`).join("")}function Q(e){const t=K(e);D.insertAdjacentHTML("beforeend",t)}async function Y(){let e;try{e=await J.getCategoriesList()}catch(t){console.log(t);return}Q(e)}const d=document.getElementById("scrollUpBtn");function G(){document.body.scrollTop>80||document.documentElement.scrollTop>80?d.style.display="block":d.style.display="none"}function O(){window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("scroll",G);d.addEventListener("click",O);const m=new u;let r;window.addEventListener("load",async()=>{N(),await Y(),await v("All categories"),z()});n.categoriesListMain.addEventListener("click",X);async function X(e){e.preventDefault();let t;if(n.allCategoriesContainer.innerHTML="",e.target!==e.currentTarget){r=e.target.closest("li"),Z(r),await v(r);try{t=await m.getSelectedCategory(r.textContent)}catch{console.log("error"),g()}H(r),f(t)}}function Z(e){const t=document.querySelectorAll(".categories-list-item");for(const o of t)o.textContent===e.textContent?o.classList.add("categories-list-active"):o.classList.remove("categories-list-active")}n.allCategoriesContainer.addEventListener("click",async e=>{if(e.target.nodeName!="H2")if(e.target.nodeName=="BUTTON"){n.allCategoriesContainer.innerHTML="";const t=e.target.closest(".see-more-btn").dataset.id;let o;try{o=await m.getSelectedCategory(t),U(t),f(o)}catch{console.log("error"),g()}}else{const t=e.target.closest(".book-item").dataset.id,o=await m.getBookDetailedInfo(t),s=S(o);B(s),document.body.style.overflow="hidden",E(o),document.querySelector(".modal-btn").addEventListener("click",i=>{i.preventDefault(),I(),_(o)}),A()}});
//# sourceMappingURL=commonHelpers.js.map
