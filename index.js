import{A as p,S as l,N as y,K as L,i as h}from"./assets/vendor-C2iGZDYF.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".js-header-menu-toggle"),t=document.querySelector(".js-header-navigation-list"),r=document.querySelectorAll(".js-header-navigation-link");e.addEventListener("click",s=>{s.stopPropagation(),t.classList.toggle("active")}),r.forEach(s=>{s.addEventListener("click",()=>{t.classList.remove("active")})}),document.addEventListener("click",s=>{!t.contains(s.target)&&!e.contains(s.target)&&t.classList.remove("active")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".header"),t=document.querySelector(".js-about-me");let r=window.scrollY;function s(){if(!t)return;t.getBoundingClientRect().top<window.innerHeight?e.style.backgroundColor="rgba(0, 0, 0, 0.4)":e.style.backgroundColor="transparent"}window.addEventListener("scroll",function(){let o=window.scrollY;o>r&&o>100?e.classList.add("hidden"):o<r&&e.classList.remove("hidden"),s(),r=o}),s()});(()=>{const e={openModalBtn:document.querySelector("[data-menu-burger-open]"),closeModalBtn:document.querySelectorAll("[data-menu-burger-close]"),modal:document.querySelector("[data-menu-burger]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.forEach(r=>r.addEventListener("click",t));function t(){e.modal.classList.toggle("is-open")}})();document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".hero-container").style.opacity="1",document.querySelector(".hero-container").style.transform="translateY(0)"});document.querySelectorAll(".hero-sm-link, .hero-email-link").forEach(e=>{e.addEventListener("mouseenter",()=>{e.classList.add("hovered")}),e.addEventListener("mouseleave",()=>{e.classList.remove("hovered")}),e.addEventListener("focus",()=>{e.classList.add("hovered")}),e.addEventListener("blur",()=>{e.classList.remove("hovered")})});const b=()=>{new p(".about-me-accordion-list.accordion-container",{duration:400,showFirst:!0}).open(0)},E=document.querySelector(".about-me-swiper-btn"),f=document.querySelectorAll(".about-me-swiper-item.swiper-slide"),d=()=>{const e=document.querySelector(".about-me-swiper-item.swiper-slide.active-slide-first");e&&e.classList.remove("active-slide-first")};f.forEach(e=>{e.setAttribute("tabindex","0")});const S=()=>{f.forEach(e=>{e.addEventListener("click",d),e.addEventListener("keydown",t=>{(t.key==="ArrowLeft"||t.key==="ArrowRight"||t.key==="Tab")&&d()}),e.addEventListener("touchstart",d)})},q=()=>{document.querySelectorAll(".about-me-swiper-item.swiper-slide").forEach(t=>{t.classList.remove("active-slide")});const e=document.querySelector(".swiper-slide-active");e&&e.classList.add("active-slide")},A=()=>{new l(".about-me-swiper-gen-wrap.swiper",{modules:[y,L],speed:400,slidesPerView:2,loop:!0,navigation:{nextEl:".about-me-swiper-btn.swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},on:{slideChangeTransitionEnd:q}})};document.addEventListener("DOMContentLoaded",function(){b(),A(),S(),E.addEventListener("click",()=>{const e=document.querySelector(".about-me-swiper-item.swiper-slide");e&&e.classList.remove("active-slide-first")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".flip-card"),t=()=>"ontouchstart"in window||navigator.maxTouchPoints>0;e.forEach(r=>{const s=r.querySelector(".flip-card-inner");r.setAttribute("tabindex","0"),t()&&r.addEventListener("click",()=>{s.classList.toggle("flipped")}),r.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" "||o.key==="ArrowLeft"||o.key==="ArrowRight")&&(o.preventDefault(),s.classList.toggle("flipped"))})})});document.addEventListener("DOMContentLoaded",()=>{new l(".ps-swiper",{direction:"horizontal",loop:!1,speed:1200,navigation:{nextEl:".ps-btn-next",prevEl:".ps-btn-prev",disabledClass:"swiper-button-disabled"},keyboard:{enabled:!0,onlyInViewport:!1},a11y:{prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide"},spaceBetween:30,on:{init:function(){e(this)},slideChange:function(){e(this)}}});function e(t){const r=document.querySelector(".ps-btn-prev"),s=document.querySelector(".ps-btn-next");t.isBeginning?r.classList.add("swiper-button-disabled"):r.classList.remove("swiper-button-disabled"),t.isEnd?s.classList.add("swiper-button-disabled"):s.classList.remove("swiper-button-disabled")}});new p(".faq .accordion-container",{duration:700,showMultiple:!0});const k=document.querySelectorAll(".faq .ac-trigger");k.forEach(e=>{e.addEventListener("click",()=>{e.querySelector(".faq .ac-svg").classList.toggle("active")})});function P(){const t=document.querySelector(".covers").getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}window.addEventListener("scroll",()=>{P()?document.querySelectorAll(".cover-list").forEach(e=>{e.style.animationPlayState="running"}):document.querySelectorAll(".cover-list").forEach(e=>{e.style.animationPlayState="paused"})});document.querySelectorAll(".cover-list").forEach(e=>{e.style.animationPlayState="paused"});const m=document.querySelector(".reviews-list"),B=document.querySelector(".reviews-buttons"),C=e=>`
    <li class="reviews-card swiper-slide">
                <img class="reviews-card-avatar" src="${e.avatar_url}"></img>
                <h4 class="reviews-card-name">${e.author}</h4>
                <p class="reviews-card-description">${e.review}</p>
            </li>
    `;fetch("https://portfolio-js.b.goit.study/api/reviews").then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{const t=e.map(r=>C(r)).join("");m.innerHTML=t}).catch(e=>{e.message==="404"&&(h.error({title:"Error",position:"topRight",message:"Sorry, there are no reviews of this autohor yet. Please try again later!"}),m.innerHTML='<h3 class="reviews-title">Not Found</h3>',B.classList.add("hidden-card"))});const M=()=>{const e=document.querySelectorAll(".reviews-card.swiper-slide");new l(".reviews-container-card.swiper",{speed:400,slidesPerView:1,loop:e.length>3,navigation:{nextEl:".reviews-button.swiper-button-next",prevEl:".reviews-button.swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},on:{init:function(){v(this)},slideChange:function(){v(this)}}})},v=e=>{const t=document.querySelector(".reviews-button-left"),r=document.querySelector(".reviews-button-right");e.isBeginning?(t.setAttribute("disabled",!0),t.classList.add("disabled")):(t.removeAttribute("disabled"),t.classList.remove("disabled")),e.isEnd?(r.setAttribute("disabled",!0),r.classList.add("disabled")):(r.removeAttribute("disabled"),r.classList.remove("disabled"))};document.addEventListener("DOMContentLoaded",function(){M()});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".work-together-contact-form"),t=document.getElementById("email"),r=document.getElementById("user-comment"),s=document.getElementById("modal"),o=document.getElementById("modal-close");if(!e||!t||!r||!s||!o)return;e.addEventListener("submit",async i=>{i.preventDefault();const c=t.value.trim(),u=r.value.trim();if(!/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(c)){iziToast.error({title:"Error",message:"Please enter a valid email address."});return}if(!c||!u){iziToast.warning({title:"Warning",message:"Please fill in all fields."});return}try{(await fetch("https://reqres.in/api/form",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c,comment:u})})).ok?(t.value="",r.value="",s.classList.add("modal-active")):iziToast.error({title:"Error",message:"An error occurred. Please check your details and try again."})}catch{iziToast.error({title:"Server Error",message:"Please try again later."})}}),o.addEventListener("click",()=>{s.classList.remove("modal-active")}),s.addEventListener("click",i=>{i.target===s&&s.classList.remove("modal-active")}),document.addEventListener("keydown",i=>{i.key==="Escape"&&s.classList.remove("modal-active")});const n=50;r.addEventListener("input",()=>{r.value.length>n&&(r.value=r.value.substring(0,n)+"...")});const a=document.querySelectorAll(".work-together-btn"),w=document.querySelectorAll(".work-together-contact-link, .tel-link");[...a,...w].forEach(i=>{i.addEventListener("mouseenter",()=>{i.classList.add("hovered")}),i.addEventListener("mouseleave",()=>{i.classList.remove("hovered")}),i.addEventListener("focus",()=>{i.classList.add("hovered")}),i.addEventListener("blur",()=>{i.classList.remove("hovered")})})});
//# sourceMappingURL=index.js.map
