import{a as c}from"./assets/vendor-de8bc860.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();class l{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books"}async getCategoriesList(){const e=this.BASE_URL+"/category-list";return(await c.get(e)).data}async getPopularBooks(){const e=this.BASE_URL+"/top-books ";return(await c.get(e)).data}async getSelectedCategory(e){const s=this.BASE_URL+`/category?category=${e}`;return(await c.get(s)).data}async getBookDetailedInfo(e){const s=this.BASE_URL+`/${e}`;return(await c.get(s)).data}}const d=document.getElementById("switch-theme-checkbox");d.addEventListener("change",()=>{document.body.classList.toggle("dark")});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".nav").getElementsByTagName("li"),s=window.location.href;for(let r=0;r<e.length;r++){const t=e[r].querySelector(".nav-link");t&&t.href===s&&e[r].classList.add("current-page"),e[r].addEventListener("click",function(o){for(let n=0;n<e.length;n++)e[n].classList.remove("current-page");o.currentTarget.classList.add("current-page")})}});const i=new l;i.getSelectedCategory("Advice How-To and Miscellaneous");i.getBookDetailedInfo("643282b1e85766588626a080");
//# sourceMappingURL=commonHelpers.js.map
