import{a as h,b as x,c as T,d as f,e as $,f as w,r as n}from"./assets/support-12fb6444.js";import{a as r,i as S}from"./assets/vendor-e2ce0d38.js";class u{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books"}async getCategoriesList(){const t=this.BASE_URL+"/category-list";return(await r.get(t)).data}async getPopularBooks(){const t=this.BASE_URL+"/top-books ";return(await r.get(t)).data}async getSelectedCategory(t){const o=this.BASE_URL+`/category?category=${t}`;return(await r.get(o)).data}async getBookDetailedInfo(t){const o=this.BASE_URL+`/${t}`;return(await r.get(o)).data}}function B(e){return`<div class="modal-backdrop">
    <div class="modal-content-container">
    <svg class="modal-close-btn" width="24" height="24"><use href="/bookshelf-team-project/assets/symbol-defs-b5bfa89c.svg#icon-x-close1"></use></svg>
    <img src="${e.book_image}" class="modal-book-image" />
    <div class="modal-book-info">
    <h3 class="modal-title">${e.title}</h3>
    <p class="modal-author">${e.author}</p>
    <p class="modal-description">${e.description}</p>
    <ul class="modal-shops-list">
    <li class="modal-shops-item"><a class="test-link" href="${e.buy_links[0].url}" target="_blank" rel="noopener noreferrer">
    <img width="32" height="11" class="shopping-list-amazon" srcset="
    ${h} 1x,
    ${x} 2x,
    ${T} 3x
  " src="${h}" alt="amazon" />
          </a></li>
    <li class="modal-shops-item"><a class="test-link" href="${e.buy_links[1].url}" target="_blank" rel="noopener noreferrer">
    <img width="16" height="16" class="shopping-list-apple" srcset="
    ${f} 1x,
    ${$} 2x,
    ${w} 3x" src="${f}" alt="apple" />
          </a></li>
    </ul>
    </div>
    <button type="submit" class="modal-btn"></button>

    </div>
    </div>`}function A(e){document.body.insertAdjacentHTML("beforeend",e)}function I(){const e=document.querySelector(".modal-backdrop"),t=document.querySelector(".modal-close-btn");document.addEventListener("keydown",o=>{o.key==="Escape"&&c()}),t.addEventListener("click",o=>{c()}),e.addEventListener("click",o=>{o.target===e&&c()})}function c(){const e=document.querySelector(".modal-backdrop"),t=document.querySelector(".modal-close-btn");e&&e.parentNode&&e.parentNode.removeChild(e),t&&(document.removeEventListener("keydown",o=>{console.log("listener is remove")}),t.removeEventListener("click",o=>{console.log("listener is remove")}),e.removeEventListener("click",o=>{console.log("listener is remove")})),document.body.style.overflow=null}function M(){const e=document.querySelector(".modal-success-text"),t=document.querySelector(".modal-btn");if(e)t.textContent.trim().toLowerCase()==="remove from shopping list"&&e.parentNode.removeChild(e);else{if(t.textContent.trim().toLowerCase()==="remove from shopping list")return;_(`<p class="modal-success-text">Congratulations! You have added the book to the shopping list.
       To delete, press the button "Remove from the shopping list".</p>`)}}function _(e){document.querySelector(".modal-content-container").insertAdjacentHTML("beforeend",e)}function E(e){const t=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],s;const a=o.findIndex(i=>e._id===i._id);a===-1?(o.push(e),s="remove from shopping list"):(o.splice(a,1),s="add to shopping list"),localStorage.setItem("shoppingList",JSON.stringify(o)),t.textContent=s}function j(e){const t=document.querySelector(".modal-btn");let o=JSON.parse(localStorage.getItem("shoppingList"))||[],s;o.findIndex(i=>e._id===i._id)===-1?s="add to shopping list":s="remove from shopping list",t.textContent=s}function q(e){const{book_image:t,title:o,author:s,_id:a}=e;return`<li class="book-item" data-id="${a}">
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
  </li>`}function H(e){return`<ul class='all-categories-main'>${e.map(q).join("")}</ul>`}function v(e){const t=H(e);n.allCategoriesContainer.insertAdjacentHTML("beforeend",t)}function U(e){if(e.textContent!=="All categories"){const t=`<h2 class="title-book-section">${e.textContent}</h2>`;n.allCategoriesContainer.insertAdjacentHTML("beforeend",t),p()}}function N(e){if(e!=="All categories"){const t=`<h2 class="title-book-section">${e}</h2>`;n.allCategoriesContainer.insertAdjacentHTML("beforeend",t),p()}}function p(){document.querySelectorAll(".title-book-section").forEach(function(t){const o=t.textContent.trim(),s=o.lastIndexOf(" "),a=o.slice(0,s)+'<span class="last-word">'+o.slice(s)+"</span>";t.innerHTML=a})}function g(){S.error({title:"",backgroundColor:"rgb(230, 92, 33)",message:"there are no books in this category",position:"topLeft"})}function z(){n.loadElem.classList.remove("hide-loader")}function P(){n.loadElem.classList.add("hide-loader")}const W=new u;async function y(e){if(e.textContent==="All categories"||e==="All categories"){D("Best Sellers Books");let t;try{t=await W.getPopularBooks()}catch{console.log("error"),g()}const o=t.map(s=>`
      <h3 class="book-author popular-title">${s.list_name}</h3>
<ul class="all-categories-main">`+s.books.map(a=>{const{book_image:i,title:b,author:L,_id:C}=a;return`<li class="book-item" data-id="${C}">
       <div class="book-item-container">
           <div class="book-card-container"> 
            <img class="book-card" src="${i}" alt="${b}">
               <p class="book-card-hover-text">QUICK VIEW</p>
           </div>
           <div class="book-details">
               <p class="book-title">${b}</p>
               <p class="book-author">${L}</p>
           </div>
       </div>
  </li>`}).join("")+`</ul><button class='see-more-btn' data-id='${s.list_name}'>See more</button>`).join("");n.allCategoriesContainer.insertAdjacentHTML("beforeend",o)}}function D(e){const t=`<h2 class="title-book-section">${e}</h2>`;n.allCategoriesContainer.insertAdjacentHTML("afterbegin",t),p()}const J=document.querySelector(".categories-list-main"),K=new u;function Q(e){return e.map(t=>`<li class='categories-list-item'><a href="">${t.list_name}</a></li>`).join("")}function Y(e){const t=Q(e);J.insertAdjacentHTML("beforeend",t)}async function G(){let e;try{e=await K.getCategoriesList()}catch(t){console.log(t);return}Y(e)}const d=document.getElementById("scrollUpBtn");function O(){document.body.scrollTop>80||document.documentElement.scrollTop>80?d.style.display="block":d.style.display="none"}function X(){window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("scroll",O);d.addEventListener("click",X);const m=new u;let l;window.addEventListener("load",async()=>{z(),await G(),k("All categories"),await y("All categories"),P()});n.categoriesListMain.addEventListener("click",Z);async function Z(e){e.preventDefault();let t;if(n.allCategoriesContainer.innerHTML="",e.target!==e.currentTarget){l=e.target.closest("li"),k(l),await y(l);try{t=await m.getSelectedCategory(l.textContent)}catch{console.log("error"),g()}U(l),v(t)}}function k(e){const t=document.querySelectorAll(".categories-list-item");for(const o of t)o.textContent===e.textContent||o.textContent===e?o.classList.add("categories-list-active"):o.classList.remove("categories-list-active")}n.allCategoriesContainer.addEventListener("click",async e=>{if(e.target.nodeName!="H2")if(e.target.nodeName=="BUTTON"){n.allCategoriesContainer.innerHTML="";const t=e.target.closest(".see-more-btn").dataset.id;let o;try{o=await m.getSelectedCategory(t),N(t),k(t),v(o)}catch{console.log("error"),g()}}else{const t=e.target.closest(".book-item").dataset.id,o=await m.getBookDetailedInfo(t),s=B(o);A(s),document.body.style.overflow="hidden",j(o),document.querySelector(".modal-btn").addEventListener("click",i=>{i.preventDefault(),M(),E(o)}),I()}});
//# sourceMappingURL=commonHelpers.js.map
