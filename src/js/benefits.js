document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.flip-card');

    // ======= Функция определения мобильного устройства =======
    const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    cards.forEach(card => {
        const innerCard = card.querySelector('.flip-card-inner');
        
        // ======= Добавляем tabindex для взаимодействия с клавиатуры =======
        card.setAttribute('tabindex', '0');

        if (isTouchDevice()) {
            // ======= Обработчик клика для мобильных устройств =======
            card.addEventListener('click', () => {
                innerCard.classList.toggle('flipped');
            });
        }

        // ======= Обработчик клавиатуры для планшетов и ПК =======
        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ' || event.key === "ArrowLeft" || event.key === "ArrowRight") {
                event.preventDefault(); // ======= Предотвращаем прокрутку при нажатии пробела =======
                innerCard.classList.toggle('flipped');
            }
        });
    });
});