import { Accordion } from './module-libs';

const accordionfaq = new Accordion('.faq .accordion-container', {
  duration: 700,
  showMultiple: true,
});

const faqButtons = document.querySelectorAll('.faq .ac-trigger');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const arrowIcon = button.querySelector('.faq .ac-svg');
    arrowIcon.classList.toggle('active');
  });
});