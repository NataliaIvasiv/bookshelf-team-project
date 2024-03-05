import{r as i}from"./assets/support-84347159.js";import{a as l,i as f}from"./assets/vendor-e2ce0d38.js";class d{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books"}async getCategoriesList(){const e=this.BASE_URL+"/category-list";return(await l.get(e)).data}async getPopularBooks(){const e=this.BASE_URL+"/top-books ";return(await l.get(e)).data}async getSelectedCategory(e){const o=this.BASE_URL+`/category?category=${e}`;return(await l.get(o)).data}async getBookDetailedInfo(e){const o=this.BASE_URL+`/${e}`;return(await l.get(o)).data}}function v(t){const e=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],s;const a=o.findIndex(n=>t._id===n._id);a===-1?(o.push(t),s="remove from shopping list"):(o.splice(a,1),s="add to shopping list"),localStorage.setItem("shoppingList",JSON.stringify(o)),e.textContent=s}function L(t){const e=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],s;o.findIndex(n=>t._id===n._id)===-1?s="add to shopping list":s="remove from shopping list",e.textContent=s}function y(t){return`<div class="modal-backdrop">
    <div class="modal-content-container">
    <svg class="modal-close-btn" width="24" height="24"><use href="/img/symbol-defs.svg#icon-x-close1"></use></svg>
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
    </div>`}function C(t){document.body.insertAdjacentHTML("beforeend",t)}function B(){const t=document.querySelector(".modal-backdrop"),e=document.querySelector(".modal-close-btn");document.addEventListener("keydown",o=>{o.preventDefault(),o.key==="Escape"&&c()}),e.addEventListener("click",o=>{o.preventDefault(),c()}),t.addEventListener("click",o=>{o.preventDefault(),o.target===t&&c()})}function c(){const t=document.querySelector(".modal-backdrop"),e=document.querySelector(".modal-close-btn");t&&t.parentNode&&t.parentNode.removeChild(t),e&&(document.removeEventListener("keydown",o=>{console.log("listener is remove")}),e.removeEventListener("click",o=>{console.log("listener is remove")}),t.removeEventListener("click",o=>{console.log("listener is remove")}))}function $(t){const{book_image:e,title:o,author:s,_id:a}=t;return`<li class="book-item" data-id="${a}">
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
  </li>`}function S(t){return`<ul class='all-categories-main'>${t.map($).join("")}</ul>`}function x(t){const e=S(t);i.allCategoriesContainer.insertAdjacentHTML("beforeend",e)}function w(t){if(t.textContent!=="All categories"){const e=`<h2 class="title-book-section">${t.textContent}</h2>`;i.allCategoriesContainer.insertAdjacentHTML("beforeend",e),m()}}function m(){document.querySelectorAll(".title-book-section").forEach(function(e){const o=e.textContent.trim(),s=o.lastIndexOf(" "),a=o.slice(0,s)+'<span class="last-word">'+o.slice(s)+"</span>";e.innerHTML=a})}function p(){f.error({title:"",backgroundColor:"rgb(230, 92, 33)",message:"there are no books in this category",position:"topLeft"})}const A=new d;async function g(t){if(t.textContent==="All categories"||t==="All categories"){T("Best Sellers Books");let e;try{e=await A.getPopularBooks()}catch{console.log("error"),p()}const o=e.map(s=>`
      <h3 class="book-author popular-title">${s.list_name}</h3>
<ul class="all-categories-main">`+s.books.map(a=>{const{book_image:n,title:u,author:b,_id:h}=a;return`<li class="book-item" data-id="${h}">
       <div class="book-item-container">
           <div class="book-card-container"> 
            <img class="book-card" src="${n}" alt="${u}">
               <p class="book-card-hover-text">QUICK VIEW</p>
           </div>
           <div class="book-details">
               <p class="book-title">${u}</p>
               <p class="book-author">${b}</p>
           </div>
       </div>
  </li>`}).join("")+`</ul><button class='see-more-btn' id='${s.list_name}'>See more</button>`).join("");i.allCategoriesContainer.insertAdjacentHTML("beforeend",o)}}function T(t){const e=`<h2 class="title-book-section">${t}</h2>`;i.allCategoriesContainer.insertAdjacentHTML("afterbegin",e),m()}const I=document.querySelector(".categories-list-main"),_=new d;function M(t){return t.map(e=>`<li class='categories-list-item'><a href="">${e.list_name}</a></li>`).join("")}function j(t){const e=M(t);I.insertAdjacentHTML("beforeend",e)}async function q(){let t;try{t=await _.getCategoriesList()}catch(e){console.log(e);return}j(t)}const k=new d;let r;window.addEventListener("load",async()=>{await q(),await g("All categories")});i.categoriesListMain.addEventListener("click",E);async function E(t){t.preventDefault();let e;if(i.allCategoriesContainer.innerHTML="",t.target!==t.currentTarget){r=t.target.closest("li"),H(r),g(r);try{e=await k.getSelectedCategory(r.textContent)}catch{console.log("error"),p()}w(r),x(e)}}function H(t){const e=document.querySelectorAll(".categories-list-item");for(const o of e)o.textContent===t.textContent?o.classList.add("categories-list-active"):o.classList.remove("categories-list-active")}i.allCategoriesContainer.addEventListener("click",async t=>{if(t.target.nodeName=="BUTTON"||t.target.nodeName=="H2")return;const e=t.target.closest(".book-item").dataset.id,o=await k.getBookDetailedInfo(e),s=y(o);C(s),L(o),document.querySelector(".modal-btn").addEventListener("click",n=>{n.preventDefault(),v(o)}),B()});
//# sourceMappingURL=commonHelpers.js.map
