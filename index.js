import{A as p,S as l,N as f,K as w,i as y}from"./assets/vendor-C2iGZDYF.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".js-header-menu-toggle"),t=document.querySelector(".js-header-navigation-list"),s=document.querySelectorAll(".js-header-navigation-link");e.addEventListener("click",()=>{t.classList.toggle("active")}),s.forEach(i=>{i.addEventListener("click",()=>{t.classList.remove("active")})})});let d=0;window.addEventListener("scroll",function(){let e=document.querySelector(".header"),t=window.scrollY;t>d&&t>100?e.classList.add("hidden"):t<d&&e.classList.remove("hidden"),(t=100)?e.classList.remove("transparent"):e.classList.add("transparent"),d=t});(()=>{const e={openModalBtn:document.querySelector("[data-menu-burger-open]"),closeModalBtn:document.querySelectorAll("[data-menu-burger-close]"),modal:document.querySelector("[data-menu-burger]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.forEach(s=>s.addEventListener("click",t));function t(){e.modal.classList.toggle("is-open")}})();document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".hero-container").style.opacity="1",document.querySelector(".hero-container").style.transform="translateY(0)"});document.querySelectorAll(".hero-sm-link, .hero-email-link").forEach(e=>{e.addEventListener("mouseenter",()=>{e.classList.add("hovered")}),e.addEventListener("mouseleave",()=>{e.classList.remove("hovered")}),e.addEventListener("focus",()=>{e.classList.add("hovered")}),e.addEventListener("blur",()=>{e.classList.remove("hovered")})});const h=()=>{new p(".about-me-accordion-list.accordion-container",{duration:400,showFirst:!0}).open(0)},g=document.querySelector(".about-me-swiper-btn"),L=document.querySelectorAll(".about-me-swiper-item.swiper-slide"),c=()=>{const e=document.querySelector(".about-me-swiper-item.swiper-slide.active-slide-first");e&&e.classList.remove("active-slide-first")};L.forEach(e=>{e.setAttribute("tabindex","0")});const E=()=>{L.forEach(e=>{e.addEventListener("click",c),e.addEventListener("keydown",t=>{(t.key==="ArrowLeft"||t.key==="ArrowRight"||t.key==="Tab")&&c()}),e.addEventListener("touchstart",c)})},S=()=>{document.querySelectorAll(".about-me-swiper-item.swiper-slide").forEach(t=>{t.classList.remove("active-slide")});const e=document.querySelector(".swiper-slide-active");e&&e.classList.add("active-slide")},q=()=>{new l(".about-me-swiper-gen-wrap.swiper",{modules:[f,w],speed:400,slidesPerView:2,loop:!0,navigation:{nextEl:".about-me-swiper-btn.swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},on:{slideChangeTransitionEnd:S}})};document.addEventListener("DOMContentLoaded",function(){h(),q(),E(),g.addEventListener("click",()=>{const e=document.querySelector(".about-me-swiper-item.swiper-slide");e&&e.classList.remove("active-slide-first")})});document.addEventListener("DOMContentLoaded",()=>{new l(".ps-swiper",{direction:"horizontal",loop:!1,speed:1200,navigation:{nextEl:".ps-btn-next",prevEl:".ps-btn-prev",disabledClass:"swiper-button-disabled"},keyboard:{enabled:!0,onlyInViewport:!1},a11y:{prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide"},spaceBetween:30,on:{init:function(){e(this)},slideChange:function(){e(this)}}});function e(t){const s=document.querySelector(".ps-btn-prev"),i=document.querySelector(".ps-btn-next");t.isBeginning?s.classList.add("swiper-button-disabled"):s.classList.remove("swiper-button-disabled"),t.isEnd?i.classList.add("swiper-button-disabled"):i.classList.remove("swiper-button-disabled")}});new p(".faq .accordion-container",{duration:700,showMultiple:!0});const A=document.querySelectorAll(".faq .ac-trigger");A.forEach(e=>{e.addEventListener("click",()=>{e.querySelector(".faq .ac-svg").classList.toggle("active")})});const m=document.querySelector(".reviews-list"),B=document.querySelector(".reviews-buttons"),P=e=>`
    <li class="reviews-card swiper-slide">
                <img class="reviews-card-avatar" src="${e.avatar_url}"></img>
                <h4 class="reviews-card-name">${e.author}</h4>
                <p class="reviews-card-description">${e.review}</p>
            </li>
    `;fetch("https://portfolio-js.b.goit.study/api/reviews").then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{const t=e.map(s=>P(s)).join("");m.innerHTML=t}).catch(e=>{e.message==="404"&&(y.error({title:"Error",position:"topRight",message:"Sorry, there are no reviews of this autohor yet. Please try again later!"}),m.innerHTML='<h3 class="reviews-title">Not Found</h3>',B.classList.add("hidden-card"))});const M=()=>{new l(".reviews-container-card.swiper",{modules:[f,w],speed:400,slidesPerView:1,loop:!0,navigation:{nextEl:".reviews-button.swiper-button-next",prevEl:".reviews-button.swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},on:{init:function(){v(this)},slideChange:function(){v(this)}}})},v=e=>{const t=document.querySelector(".reviews-button-left"),s=document.querySelector(".reviews-button-right");e.isBeginning?(t.setAttribute("disabled",!0),t.classList.add("disabled")):(t.removeAttribute("disabled"),t.classList.remove("disabled")),e.isEnd?(s.setAttribute("disabled",!0),s.classList.add("disabled")):(s.removeAttribute("disabled"),s.classList.remove("disabled"))};document.addEventListener("DOMContentLoaded",function(){M()});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".work-together-contact-form"),t=document.getElementById("email"),s=document.getElementById("user-comment"),i=document.getElementById("modal"),r=document.getElementById("modal-close");if(!e||!t||!s||!i||!r)return;e.addEventListener("submit",async n=>{n.preventDefault();const a=t.value.trim(),u=s.value.trim();if(!/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(a)){alert("Please enter a valid email address.");return}if(!a||!u){alert("Please fill in all fields.");return}try{(await fetch("https://reqres.in/api/form",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,comment:u})})).ok?(t.value="",s.value="",i.classList.add("modal-active")):alert("An error occurred. Please check your details and try again.")}catch{alert("Server error. Please try again later.")}}),r.addEventListener("click",()=>{i.classList.remove("modal-active")}),i.addEventListener("click",n=>{n.target===i&&i.classList.remove("modal-active")}),document.addEventListener("keydown",n=>{n.key==="Escape"&&i.classList.remove("modal-active")});const o=50;s.addEventListener("input",()=>{s.value.length>o&&(s.value=s.value.substring(0,o)+"...")})});
//# sourceMappingURL=index.js.map
