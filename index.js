import{A as w,S as u,N as m,K as v,i as f}from"./assets/vendor-C2iGZDYF.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".js-header-menu-toggle"),t=document.querySelector(".js-header-navigation-list"),s=document.querySelectorAll(".js-header-navigation-link");e.addEventListener("click",()=>{t.classList.toggle("active")}),s.forEach(o=>{o.addEventListener("click",()=>{t.classList.remove("active")})})});let d=0;window.addEventListener("scroll",function(){let e=document.querySelector(".header"),t=window.scrollY;t>d&&t>100?e.classList.add("hidden"):t<d&&e.classList.remove("hidden"),(t=100)?e.classList.remove("transparent"):e.classList.add("transparent"),d=t});(()=>{const e={openModalBtn:document.querySelector("[data-menu-burger-open]"),closeModalBtn:document.querySelectorAll("[data-menu-burger-close]"),modal:document.querySelector("[data-menu-burger]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.forEach(s=>s.addEventListener("click",t));function t(){e.modal.classList.toggle("is-open")}})();document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".hero-container").style.opacity="1",document.querySelector(".hero-container").style.transform="translateY(0)"});document.querySelectorAll(".hero-sm-link, .hero-email-link").forEach(e=>{e.addEventListener("mouseenter",()=>{e.classList.add("hovered")}),e.addEventListener("mouseleave",()=>{e.classList.remove("hovered")}),e.addEventListener("focus",()=>{e.classList.add("hovered")}),e.addEventListener("blur",()=>{e.classList.remove("hovered")})});const h=()=>{new w(".about-me-accordion-list.accordion-container",{duration:400,showFirst:!0}).open(0)},L=document.querySelector(".about-me-swiper-btn"),p=document.querySelectorAll(".about-me-swiper-item.swiper-slide"),a=()=>{const e=document.querySelector(".about-me-swiper-item.swiper-slide.active-slide-first");e&&e.classList.remove("active-slide-first")};p.forEach(e=>{e.setAttribute("tabindex","0")});const b=()=>{p.forEach(e=>{e.addEventListener("click",a),e.addEventListener("keydown",t=>{(t.key==="ArrowLeft"||t.key==="ArrowRight"||t.key==="Tab")&&a()}),e.addEventListener("touchstart",a)})},y=()=>{document.querySelectorAll(".about-me-swiper-item.swiper-slide").forEach(t=>{t.classList.remove("active-slide")});const e=document.querySelector(".swiper-slide-active");e&&e.classList.add("active-slide")},g=()=>{new u(".about-me-swiper-gen-wrap.swiper",{modules:[m,v],speed:400,slidesPerView:2,loop:!0,navigation:{nextEl:".about-me-swiper-btn.swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},on:{slideChangeTransitionEnd:y}})};document.addEventListener("DOMContentLoaded",function(){h(),g(),b(),L.addEventListener("click",()=>{const e=document.querySelector(".about-me-swiper-item.swiper-slide");e&&e.classList.remove("active-slide-first")})});const c=document.querySelector(".reviews-list"),S=document.querySelector(".reviews-buttons"),E=e=>`
    <li class="reviews-card swiper-slide">
                <img class="reviews-card-avatar" src="${e.avatar_url}"></img>
                <h4 class="reviews-card-name">${e.author}</h4>
                <p class="reviews-card-description">${e.review}</p>
            </li>
    `;fetch("https://portfolio-js.b.goit.study/api/reviews").then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{const t=e.map(s=>E(s)).join("");c.innerHTML=t}).catch(e=>{e.message==="404"&&(f.error({title:"Error",position:"topRight",message:"Sorry, there are no reviews of this autohor yet. Please try again later!"}),c.innerHTML='<h3 class="reviews-title">Not Found</h3>',S.classList.add("hidden-card"))});const q=()=>{new u(".reviews-container-card.swiper",{modules:[m,v],speed:400,slidesPerView:1,loop:!0,navigation:{nextEl:".reviews-button.swiper-button-next",prevEl:".reviews-button.swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},on:{init:function(){l(this)},slideChange:function(){l(this)}}})},l=e=>{const t=document.querySelector(".reviews-button-left"),s=document.querySelector(".reviews-button-right");e.isBeginning?(t.setAttribute("disabled",!0),t.classList.add("disabled")):(t.removeAttribute("disabled"),t.classList.remove("disabled")),e.isEnd?(s.setAttribute("disabled",!0),s.classList.add("disabled")):(s.removeAttribute("disabled"),s.classList.remove("disabled"))};document.addEventListener("DOMContentLoaded",function(){q()});
//# sourceMappingURL=index.js.map
