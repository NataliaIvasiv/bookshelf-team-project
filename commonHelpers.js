import"./assets/themes-9b259b68.js";import{a as o}from"./assets/vendor-de8bc860.js";class i{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books"}async getCategoriesList(){const t=this.BASE_URL+"/category-list";return(await o.get(t)).data}async getPopularBooks(){const t=this.BASE_URL+"/top-books ";return(await o.get(t)).data}async getSelectedCategory(t){const s=this.BASE_URL+`/category?category=${t}`;return(await o.get(s)).data}async getBookDetailedInfo(t){const s=this.BASE_URL+`/${t}`;return(await o.get(s)).data}}const n=document.querySelector(".categories-list-main");function c(e){return e.map(t=>`<li class='categories-list-item'><a href="">${t.list_name}</a></li>`).join("")}function g(e){const t=c(e);n.insertAdjacentHTML("beforeend",t)}const a=new i;a.getSelectedCategory("Advice How-To and Miscellaneous");a.getBookDetailedInfo("643282b1e85766588626a080");a.getCategoriesList();async function l(){const e=await a.getCategoriesList();g(e)}l();
//# sourceMappingURL=commonHelpers.js.map
