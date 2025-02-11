function isSectionInViewport() {
    const section = document.querySelector('.covers');
    const rect = section.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', () => {
    if (isSectionInViewport()) {
        document.querySelectorAll('.cover-list').forEach((list) => {
            list.style.animationPlayState = 'running';
        });
    } else {
        document.querySelectorAll('.cover-list').forEach((list) => {
            list.style.animationPlayState = 'paused';
        });
    }
});

document.querySelectorAll('.cover-list').forEach((list) => {
    list.style.animationPlayState = 'paused';
});


