import"./assets/themes-fa0af762.js";import{a as s}from"./assets/vendor-de8bc860.js";class l{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books"}async getCategoriesList(){const e=this.BASE_URL+"/category-list";return(await s.get(e)).data}async getPopularBooks(){const e=this.BASE_URL+"/top-books ";return(await s.get(e)).data}async getSelectedCategory(e){const o=this.BASE_URL+`/category?category=${e}`;return(await s.get(o)).data}async getBookDetailedInfo(e){const o=this.BASE_URL+`/${e}`;return(await s.get(o)).data}}const g=document.querySelector(".categories-list-main");function d(t){return t.map(e=>`<li class='categories-list-item'><a href="">${e.list_name}</a></li>`).join("")}function u(t){const e=d(t);g.insertAdjacentHTML("beforeend",e)}function k(t){const{book_image:e,title:o,author:a,_id:n}=t;return`<li class="book-item" data-id="${n}">
       <div class="book-item-container">
           <div class="book-card-container"> 
            <img class="book-card" src="${e}" alt="${o}">
               <p class="book-card-hover-text">QUICK VIEW</p>
           </div>
           <div class="book-details">
               <p class="book-title">${o}</p>
               <p class="book-author">${a}</p>
           </div>
       </div>
  </li>`}function p(t){return t.map(k).join("")}function m(t){const e=document.querySelector(".all-categories-main"),o=p(t);e.insertAdjacentHTML("beforeend",o)}const r=new l;async function b(){const t=await r.getCategoriesList();u(t)}b();let i;const y=document.querySelector(".categories-list-main");y.addEventListener("click",L);async function L(t){t.preventDefault();let e;if(t.target!==t.currentTarget){if(i=t.target.closest("li"),i.textContent==="All categories")try{const o=await r.getPopularBooks();console.log(o)}catch{console.log("error")}try{e=await r.getSelectedCategory(i.textContent)}catch{console.log("error")}m(e)}}const f=document.querySelector(".categories-list-main");f.addEventListener("click",async t=>{if(t.target===t.currentTarget)return;const e=t.target.dataset.id,o=await r.getBookDetailedInfo(e),a=createModalMarkup(o);pushMarkup(a);const n=document.querySelector(".modal-btn");checkBookStatus(o),n.addEventListener("click",c=>{c.preventDefault(),toggleShoppingList(o)})});
//# sourceMappingURL=commonHelpers.js.map
