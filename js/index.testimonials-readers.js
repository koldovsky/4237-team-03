const testimonials = [
  {
    text: "“I’ve been using this site for over a year, and I love how easy it is to browse and buy eBooks. The selection is vast, and I always find something new to read. Highly recommended!”",
    name: "James M.",
    img: "../img/testimonials/james.webp",
  },
  {
    text: "“The user experience here is fantastic. I love how easy it is to find exactly what I'm looking for, plus the recommendations have helped me discover some amazing new authors!”",
    name: "Sarah K.",
    img: "../img/testimonials/sara.webp",
  },
  {
    text: "“I've been a book lover for years, and this site is now my go-to! The selection is impressive, especially for romance and thriller fans like me. I always find something fresh and exciting!”",
    name: "Kathleen J.",
    img: "../img/testimonials/kathleen.webp",
  },
  {
    text: "“So many eBooks for affordable prices! I appreciate that they feature both bestselling authors and new talent, making every visit a chance to find something cool.”",
    name: "Jadis E.",
    img: "../img/testimonials/jadis.webp",
  },
];

const carouselTrack = document.getElementById("carouselTrack");

// Вставка відгуків у карусель
testimonials.forEach((t) => {
  carouselTrack.innerHTML += createCard(t);
});

// Клонування слайдів для безкінечного ефекту
testimonials.forEach((t) => {
  carouselTrack.innerHTML += createCard(t); // Додати ще раз слайди в кінець для циклічності
});

function createCard(t) {
  return `
        <div class="testimonials__card">
          <div class="testimonials__inner">
            <img src="${t.img}" class="testimonials__img" alt="">
            <p>${t.text}</p>
            <div class="testimonials__name">— ${t.name}</div>
          </div>
        </div>
      `;
}

let position = 0;
let visibleCards;
let cardWidthPercent;

function getVisibleCardsCount() {
  const width = window.innerWidth;
  if (width < 768) return 1;
  if (width < 992) return 2;
  return 3;
}

function updateCardWidths() {
  visibleCards = getVisibleCardsCount();
  cardWidthPercent = 100 / visibleCards;

  // Встановлення без анімації перед зміною
  carouselTrack.style.transition = "none";
  carouselTrack.style.transform = `translateX(${
    -position * cardWidthPercent
  }%)`;

  // Відновлення анімації через коротку затримку
  setTimeout(() => {
    carouselTrack.style.transition = "transform 0.5s ease-in-out";
  }, 0);
}

function moveCarousel(direction) {
  position += direction;
  const totalCards = testimonials.length;

  // Циклічне переміщення
  if (position < 0) {
    position = totalCards; // Крок назад до початку каруселі
    updateCarouselPosition();
    return;
  }

  if (position >= totalCards) {
    position = 0; // Крок вперед до першого елемента
    updateCarouselPosition();
    return;
  }

  updateCarouselPosition();
}

function updateCarouselPosition() {
  carouselTrack.style.transition = "none";
  carouselTrack.style.transform = `translateX(${
    -position * cardWidthPercent
  }%)`;

  // Відновлення анімації
  setTimeout(() => {
    carouselTrack.style.transition = "transform 0.5s ease-in-out";
  }, 0);
}

// Ініціалізація
updateCardWidths();
window.addEventListener("resize", updateCardWidths);

document
  .querySelector(".testimonials__btn--prev")
  .addEventListener("click", () => moveCarousel(-1));
document
  .querySelector(".testimonials__btn--next")
  .addEventListener("click", () => moveCarousel(1));
