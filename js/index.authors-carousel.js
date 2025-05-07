
const authorsContainer = document.querySelector('.authors');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');

if (!authorsContainer || !prevArrow || !nextArrow) {
    console.error("Елементи каруселі не знайдено");
} else {
    // Клонуємо авторів для безкінечного скролу
    function setupInfiniteScroll() {
        const authors = document.querySelectorAll('.author');
        const authorsList = [...authors].map(author => author.cloneNode(true));

        // Додаємо клони на початок і кінець
        authorsList.forEach(author => {
            authorsContainer.appendChild(author.cloneNode(true));
        });
        authorsList.forEach(author => {
            authorsContainer.insertBefore(author.cloneNode(true), authorsContainer.firstChild);
        });
    }

    setupInfiniteScroll();

    // Налаштування
    const authorWidth = 200;
    const authors = document.querySelectorAll('.author');
    const originalCount = authors.length / 3;
    let currentIndex = originalCount;

    // Встановлюємо початкову позицію
    authorsContainer.scrollLeft = currentIndex * authorWidth;

    // Функція для плавного переходу
    function smoothScroll(direction) {
        const newIndex = currentIndex + direction;
        currentIndex = newIndex;

        authorsContainer.scrollTo({
            left: currentIndex * authorWidth,
            behavior: 'smooth'
        });

        // Перевірка на необхідність перестрибування
        setTimeout(() => {
            if (currentIndex >= authors.length - originalCount) {
                currentIndex = originalCount;
                authorsContainer.style.scrollBehavior = 'auto';
                authorsContainer.scrollLeft = currentIndex * authorWidth;
                authorsContainer.style.scrollBehavior = 'smooth';
            } else if (currentIndex <= originalCount - 1) {
                currentIndex = authors.length - originalCount * 2;
                authorsContainer.style.scrollBehavior = 'auto';
                authorsContainer.scrollLeft = currentIndex * authorWidth;
                authorsContainer.style.scrollBehavior = 'smooth';
            }
        }, 300);
    }

    // Обробники кліків
    nextArrow.addEventListener('click', () => smoothScroll(1));
    prevArrow.addEventListener('click', () => smoothScroll(-1));

    // Підтримка свайпів для мобільних пристроїв
    let touchStartX = 0;
    let touchEndX = 0;

    authorsContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    authorsContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const swipeDistance = touchStartX - touchEndX;

        if (Math.abs(swipeDistance) > 50) {
            if (swipeDistance > 0) {
                smoothScroll(1);
            } else {
                smoothScroll(-1);
            }
        }
    }, { passive: true });

    // Запобігання горизонтальному скролу
    authorsContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            smoothScroll(e.deltaX > 0 ? 1 : -1);
        }
    }, { passive: false });
}