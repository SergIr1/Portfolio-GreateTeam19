import{A as d,S as l,N as a,K as u}from"./assets/vendor-Bh-tAMUx.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const f=()=>{new d(".accordion-container",{duration:400,showFirst:!0}).open(0)},p=document.querySelector(".about-me-swiper-btn");p.addEventListener("click",()=>{const r=document.querySelector(".swiper-slide");r&&r.classList.remove("active-slide-first")});const n=()=>{document.querySelectorAll(".swiper-slide").forEach(i=>{i.classList.remove("active-slide")});const r=document.querySelector(".swiper-slide-active");r&&r.classList.add("active-slide")};n();const m=()=>{new l(".swiper",{modules:[a,u],speed:400,slidesPerView:2,loop:!0,navigation:{nextEl:".swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:3},1024:{slidesPerView:6}},on:{slideChangeTransitionEnd:n}})};document.addEventListener("DOMContentLoaded",function(){f(),m()});
//# sourceMappingURL=index.js.map
