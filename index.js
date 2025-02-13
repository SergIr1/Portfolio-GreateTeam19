import{A as g,S as f,N as L,K as y,i as r}from"./assets/vendor-C2iGZDYF.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=o(i);fetch(i.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".js-header-menu-toggle"),t=document.querySelector(".js-header-navigation-list"),o=document.querySelectorAll(".js-header-navigation-link");e.addEventListener("click",s=>{s.stopPropagation(),t.classList.toggle("active")}),o.forEach(s=>{s.addEventListener("click",()=>{t.classList.remove("active")})}),document.addEventListener("click",s=>{!t.contains(s.target)&&!e.contains(s.target)&&t.classList.remove("active")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".header"),t=document.querySelector(".js-about-me");let o=window.scrollY;function s(){if(!t)return;t.getBoundingClientRect().top<window.innerHeight?e.style.backgroundColor="rgba(0, 0, 0, 0.4)":e.style.backgroundColor="transparent"}window.addEventListener("scroll",function(){let i=window.scrollY;i>o&&i>100?e.classList.add("hidden"):i<o&&e.classList.remove("hidden"),s(),o=i}),s()});(()=>{const e={openModalBtn:document.querySelector("[data-menu-burger-open]"),closeModalBtn:document.querySelectorAll("[data-menu-burger-close]"),modal:document.querySelector("[data-menu-burger]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.forEach(o=>o.addEventListener("click",t));function t(){e.modal.classList.toggle("is-open")}})();document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".hero-container").style.opacity="1",document.querySelector(".hero-container").style.transform="translateY(0)"});document.querySelectorAll(".hero-sm-link, .hero-email-link").forEach(e=>{e.addEventListener("mouseenter",()=>{e.classList.add("hovered")}),e.addEventListener("mouseleave",()=>{e.classList.remove("hovered")}),e.addEventListener("focus",()=>{e.classList.add("hovered")}),e.addEventListener("blur",()=>{e.classList.remove("hovered")})});const C=()=>{new g(".about-me-accordion-list.accordion-container",{duration:400,showFirst:!0}).open(0)},b=document.querySelector(".about-me-swiper-btn"),w=document.querySelectorAll(".about-me-swiper-item.swiper-slide"),u=()=>{const e=document.querySelector(".about-me-swiper-item.swiper-slide.active-slide-first");e&&e.classList.remove("active-slide-first")};w.forEach(e=>{e.setAttribute("tabindex","0")});const E=()=>{w.forEach(e=>{e.addEventListener("click",u),e.addEventListener("keydown",t=>{(t.key==="ArrowLeft"||t.key==="ArrowRight"||t.key==="Tab")&&u()}),e.addEventListener("touchstart",u)})},S=()=>{document.querySelectorAll(".about-me-swiper-item.swiper-slide").forEach(t=>{t.classList.remove("active-slide")});const e=document.querySelector(".swiper-slide-active");e&&e.classList.add("active-slide")},q=()=>{new f(".about-me-swiper-gen-wrap.swiper",{modules:[L,y],speed:400,slidesPerView:2,loop:!0,navigation:{nextEl:".about-me-swiper-btn.swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},on:{slideChangeTransitionEnd:S}})};document.addEventListener("DOMContentLoaded",function(){C(),q(),E(),b.addEventListener("click",()=>{const e=document.querySelector(".about-me-swiper-item.swiper-slide");e&&e.classList.remove("active-slide-first")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".flip-card"),t=()=>"ontouchstart"in window||navigator.maxTouchPoints>0;e.forEach(o=>{const s=o.querySelector(".flip-card-inner");o.setAttribute("tabindex","0"),t()&&o.addEventListener("click",()=>{s.classList.toggle("flipped")}),o.addEventListener("keydown",i=>{(i.key==="Enter"||i.key===" "||i.key==="ArrowLeft"||i.key==="ArrowRight")&&(i.preventDefault(),s.classList.toggle("flipped"))})})});document.addEventListener("DOMContentLoaded",()=>{new f(".ps-swiper",{direction:"horizontal",loop:!1,speed:1200,navigation:{nextEl:".ps-btn-next",prevEl:".ps-btn-prev",disabledClass:"swiper-button-disabled"},keyboard:{enabled:!0,onlyInViewport:!1},a11y:{prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide"},spaceBetween:30,on:{init:function(){e(this)},slideChange:function(){e(this)}}});function e(t){const o=document.querySelector(".ps-btn-prev"),s=document.querySelector(".ps-btn-next");t.isBeginning?o.classList.add("swiper-button-disabled"):o.classList.remove("swiper-button-disabled"),t.isEnd?s.classList.add("swiper-button-disabled"):s.classList.remove("swiper-button-disabled")}});new g(".faq .accordion-container",{duration:700,showMultiple:!0});const k=document.querySelectorAll(".faq .ac-trigger");k.forEach(e=>{e.addEventListener("click",()=>{e.querySelector(".faq .ac-svg").classList.toggle("active")})});function A(){const t=document.querySelector(".covers").getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}window.addEventListener("scroll",()=>{A()?document.querySelectorAll(".cover-list").forEach(e=>{e.style.animationPlayState="running"}):document.querySelectorAll(".cover-list").forEach(e=>{e.style.animationPlayState="paused"})});document.querySelectorAll(".cover-list").forEach(e=>{e.style.animationPlayState="paused"});const p=document.querySelector(".reviews-list"),P=document.querySelector(".reviews-buttons"),I=e=>`
    <li class="reviews-card swiper-slide">
                <img class="reviews-card-avatar" src="${e.avatar_url}"></img>
                <h4 class="reviews-card-name">${e.author}</h4>
                <p class="reviews-card-description">${e.review}</p>
            </li>
    `;fetch("https://portfolio-js.b.goit.study/api/reviews").then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{const t=e.map(o=>I(o)).join("");p.innerHTML=t}).catch(e=>{e.message==="404"&&(r.error({title:"Error",position:"topRight",message:"Sorry, there are no reviews of this autohor yet. Please try again later!"}),p.innerHTML='<h3 class="reviews-title">Not Found</h3>',P.classList.add("hidden-card"))});const M=()=>{const e=document.querySelectorAll(".reviews-card.swiper-slide");new f(".reviews-container-card.swiper",{speed:400,slidesPerView:1,loop:e.length>3,navigation:{nextEl:".reviews-button.swiper-button-next",prevEl:".reviews-button.swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},on:{init:function(){v(this)},slideChange:function(){v(this)}}})},v=e=>{const t=document.querySelector(".reviews-button-left"),o=document.querySelector(".reviews-button-right");e.isBeginning?(t.setAttribute("disabled",!0),t.classList.add("disabled")):(t.removeAttribute("disabled"),t.classList.remove("disabled")),e.isEnd?(o.setAttribute("disabled",!0),o.classList.add("disabled")):(o.removeAttribute("disabled"),o.classList.remove("disabled"))};document.addEventListener("DOMContentLoaded",function(){M()});const l="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_602_57)'%3e%3cpath%20d='M6.81%200.219C6.95056%200.0787966%207.14097%204.21785e-05%207.3395%200L16.6605%200C16.859%204.21785e-05%2017.0494%200.0787966%2017.19%200.219L23.781%206.81C23.9212%206.95056%2024%207.14097%2024%207.3395V16.6605C24%2016.859%2023.9212%2017.0494%2023.781%2017.19L17.19%2023.781C17.0494%2023.9212%2016.859%2024%2016.6605%2024H7.3395C7.14097%2024%206.95056%2023.9212%206.81%2023.781L0.219%2017.19C0.0787966%2017.0494%204.21785e-05%2016.859%200%2016.6605L0%207.3395C4.21785e-05%207.14097%200.0787966%206.95056%200.219%206.81L6.81%200.219ZM7.65%201.5L1.5%207.65V16.35L7.65%2022.5H16.35L22.5%2016.35V7.65L16.35%201.5H7.65Z'%20fill='%23FAFAFB'%20/%3e%3cpath%20d='M6.969%206.96912C7.03867%206.89927%207.12143%206.84386%207.21255%206.80605C7.30366%206.76824%207.40135%206.74878%207.5%206.74878C7.59865%206.74878%207.69633%206.76824%207.78745%206.80605C7.87857%206.84386%207.96133%206.89927%208.031%206.96912L12%2010.9396L15.969%206.96912C16.0387%206.89939%2016.1215%206.84407%2016.2126%206.80633C16.3037%206.7686%2016.4014%206.74917%2016.5%206.74917C16.5986%206.74917%2016.6963%206.7686%2016.7874%206.80633C16.8785%206.84407%2016.9613%206.89939%2017.031%206.96912C17.1007%207.03885%2017.156%207.12164%2017.1938%207.21274C17.2315%207.30385%2017.2509%207.4015%2017.2509%207.50012C17.2509%207.59874%2017.2315%207.69639%2017.1938%207.7875C17.156%207.8786%2017.1007%207.96139%2017.031%208.03112L13.0605%2012.0001L17.031%2015.9691C17.1007%2016.0389%2017.156%2016.1216%2017.1938%2016.2127C17.2315%2016.3039%2017.2509%2016.4015%2017.2509%2016.5001C17.2509%2016.5987%2017.2315%2016.6964%2017.1938%2016.7875C17.156%2016.8786%2017.1007%2016.9614%2017.031%2017.0311C16.9613%2017.1009%2016.8785%2017.1562%2016.7874%2017.1939C16.6963%2017.2316%2016.5986%2017.2511%2016.5%2017.2511C16.4014%2017.2511%2016.3037%2017.2316%2016.2126%2017.1939C16.1215%2017.1562%2016.0387%2017.1009%2015.969%2017.0311L12%2013.0606L8.031%2017.0311C7.96127%2017.1009%207.87848%2017.1562%207.78737%2017.1939C7.69626%2017.2316%207.59861%2017.2511%207.5%2017.2511C7.40138%2017.2511%207.30373%2017.2316%207.21262%2017.1939C7.12151%2017.1562%207.03873%2017.1009%206.969%2017.0311C6.89927%2016.9614%206.84395%2016.8786%206.80621%2016.7875C6.76847%2016.6964%206.74905%2016.5987%206.74905%2016.5001C6.74905%2016.4015%206.76847%2016.3039%206.80621%2016.2127C6.84395%2016.1216%206.89927%2016.0389%206.969%2015.9691L10.9395%2012.0001L6.969%208.03112C6.89915%207.96145%206.84374%207.87869%206.80593%207.78757C6.76812%207.69645%206.74866%207.59877%206.74866%207.50012C6.74866%207.40147%206.76812%207.30379%206.80593%207.21267C6.84374%207.12155%206.89915%207.03879%206.969%206.96912Z'%20fill='%23FAFAFB'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_602_57'%3e%3crect%20width='24'%20height='24'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".work-together-contact-form"),t=document.getElementById("email"),o=document.getElementById("user-comment"),s=document.getElementById("modal"),i=document.getElementById("modal-close");if(!e||!t||!o||!s||!i)return;const n=new RegExp(t.getAttribute("pattern"));e.setAttribute("novalidate","true"),e.addEventListener("submit",async a=>{a.preventDefault();const d=t.value.trim(),m=o.value.trim();if(!d){r.error({message:"Sorry, there are no images matching your search query. Please try again!",timeout:3500,position:"topRight",maxWidth:432,titleColor:"#ffffff",messageColor:"#ffffff",backgroundColor:"#ef4040",close:!1,closeIcon:!0,closeIconColor:"#ffffff",closeOnEscape:!0,closeOnClick:!0,icon:"font-icon",iconUrl:l});return}if(!n.test(d)){r.error({message:"Please enter a valid email address.",timeout:3500,position:"topRight",maxWidth:432,titleColor:"#ffffff",messageColor:"#ffffff",backgroundColor:"#ef4040",close:!1,closeIcon:!0,closeIconColor:"#ffffff",closeOnEscape:!0,closeOnClick:!0,icon:"font-icon",iconUrl:l});return}if(!m){r.warning({message:"Please fill in all fields.",timeout:2500,position:"topRight",backgroundColor:"#f0ad4e",messageColor:"#ffffff"});return}try{(await fetch("https://reqres.in/api/form",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:d,comment:m})})).ok?(t.value="",o.value="",s.classList.add("modal-active"),r.success({message:"Application sent!",timeout:2500,position:"topRight"})):r.error({message:"Please enter a valid email address.",timeout:3500,position:"topRight",maxWidth:432,titleColor:"#ffffff",messageColor:"#ffffff",backgroundColor:"#ef4040",close:!1,closeIcon:!0,closeIconColor:"#ffffff",closeOnEscape:!0,closeOnClick:!0,icon:"font-icon",iconUrl:l})}catch{r.error({message:"Please enter a valid email address.",timeout:3500,position:"topRight",maxWidth:432,titleColor:"#ffffff",messageColor:"#ffffff",backgroundColor:"#ef4040",close:!1,closeIcon:!0,closeIconColor:"#ffffff",closeOnEscape:!0,closeOnClick:!0,icon:"font-icon",iconUrl:l})}}),i.addEventListener("click",()=>{s.classList.remove("modal-active")}),s.addEventListener("click",a=>{a.target===s&&s.classList.remove("modal-active")}),document.addEventListener("keydown",a=>{a.key==="Escape"&&s.classList.remove("modal-active")});const c=50;o.addEventListener("input",()=>{o.value.length>c&&(o.value=o.value.substring(0,c)+"...")})});
//# sourceMappingURL=index.js.map
