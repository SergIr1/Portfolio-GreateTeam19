document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.flip-card');
    const isMobile = () => window.innerWidth < 768;
    if (isMobile()) {
    cards.forEach(card => {
    card.addEventListener('click', () => {
    const innerCard = card.querySelector('.flip-card-inner');
    innerCard.classList.toggle('flipped');
});
});
}
});