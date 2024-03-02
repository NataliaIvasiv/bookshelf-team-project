import"./assets/shopping-list-render-function-2ef65412.js";import{a as r}from"./assets/vendor-de8bc860.js";class m{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books"}async getCategoriesList(){const e=this.BASE_URL+"/category-list",o=await r.get(e);return console.log(o),o.data}async getPopularBooks(){const e=this.BASE_URL+"/top-books ";return(await r.get(e)).data}async getSelectedCategory(e){const o=this.BASE_URL+`/category?category=${e}`;return(await r.get(o)).data}async getBookDetailedInfo(e){const o=this.BASE_URL+`/${e}`;return(await r.get(o)).data}}const u=document.querySelectorAll(".nav-list-item"),p=window.location.href;let d;function y(){function t(){u.forEach(n=>n.classList.remove("current-page"))}function e(n){n&&n.href===p&&n.closest(".nav-list-item").classList.add("current-page")}function o(n){t(),n.currentTarget.classList.add("current-page")}u.forEach(n=>{d=n.querySelector(".nav-link"),e(d),n.addEventListener("click",o)})}y();const i=document.querySelector(".burger-menu-open-btn"),l=document.querySelector(".burger-menu-close-btn"),g=document.querySelector(".burger-menu");function b(){i.style.display="none",l.style.display="block",g.style.display="block"}function f(){i.style.display="block",l.style.display="none",g.style.display="none"}i.addEventListener("click",b);l.addEventListener("click",f);const L=document.querySelector(".categories-list-main");function h(t){return t.map(e=>`<li class='categories-list-item'><a href="">${e.list_name}</a></li>`).join("")}function v(t){const e=h(t);L.insertAdjacentHTML("beforeend",e)}function C(t){const{book_image:e,title:o,author:n,_id:a}=t;return`<li class="book-item" data-id="${a}">
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
  </li>`}function S(t){return t.map(C).join("")}function B(t){const e=document.querySelector(".all-categories-main"),o=S(t);e.insertAdjacentHTML("beforeend",o)}const s=new m;async function E(){let t;try{t=await s.getCategoriesList()}catch(e){console.log(e);return}v(t)}E();let c;const A=document.querySelector(".categories-list-main");A.addEventListener("click",M);async function M(t){t.preventDefault();let e;if(t.target!==t.currentTarget){if(c=t.target.closest("li"),c.textContent==="All categories")try{const o=await s.getPopularBooks();console.log(o)}catch{console.log("error")}try{e=await s.getSelectedCategory(c.textContent)}catch{console.log("error")}B(e)}}const w=document.querySelector(".categories-list-main");w.addEventListener("click",async t=>{if(t.target===t.currentTarget)return;const e=t.target.dataset.id;if(!e)return;const o=await s.getBookDetailedInfo(e),n=createModalMarkup(o);pushMarkup(n);const a=document.querySelector(".modal-btn");checkBookStatus(o),a.addEventListener("click",k=>{k.preventDefault(),toggleShoppingList(o)})});
//# sourceMappingURL=commonHelpers.js.map
