const newArrivalsSlides = [
  '<div><img src="img/new-arrivals/ascendant-cover.png" alt="Coverage of the book Ascendant"></div>',
  '<div><img src="img/new-arrivals/broken-wings-cover.png" alt="Coverage of the book Broken Wings"></div>',
  '<div><img src="img/new-arrivals/mirage-cover.png" alt="Coverage of the book Mirage"></div>',
  '<div><img src="img/new-arrivals/phantom-cover.png" alt="Coverage of the book Phantom"></div>',
  '<div><img src="img/new-arrivals/resonance-cover.png" alt="Coverage of the book Resonance"></div>',
];

let currentSlide = 0;

function renderNewArrivalsCarousel() {
  const slidesContainer = document.querySelector(
    ".new-arrivals-carousel__slides"
  );
  slidesContainer.innerHTML = newArrivalsSlides[currentSlide];

  if (window.matchMedia("(min-width: 480px)").matches) {
    const secondSlide = (currentSlide + 1) % newArrivalsSlides.length;
    slidesContainer.innerHTML += newArrivalsSlides[secondSlide];
    if (window.matchMedia("(min-width: 760px)").matches) {
      const thirdSlide = (currentSlide + 2) % newArrivalsSlides.length;
      slidesContainer.innerHTML += newArrivalsSlides[thirdSlide];
      if (window.matchMedia("(min-width: 760px)").matches) {
        const fourthSlide = (currentSlide + 3) % newArrivalsSlides.length;
        slidesContainer.innerHTML += newArrivalsSlides[fourthSlide];
        if (window.matchMedia("(min-width: 1020px)").matches) {
          const fifthSlide = (currentSlide + 4) % newArrivalsSlides.length;
          slidesContainer.innerHTML += newArrivalsSlides[fifthSlide];
        }
      }
    }
  }
}

function nextNewArrivalsSlide() {
  currentSlide = (currentSlide + 1) % newArrivalsSlides.length;
  renderNewArrivalsCarousel();
}

function prevNewArrivalsSlide() {
  currentSlide = (currentSlide - 1) % newArrivalsSlides.length;
  renderNewArrivalsCarousel();
}

renderNewArrivalsCarousel();

const nextButton = document.querySelector(
  ".new-arrivals-carousel__button--next"
);
nextButton.addEventListener("click", nextNewArrivalsSlide);

const prevButton = document.querySelector(
  ".new-arrivals-carousel__button--prev"
);
prevButton.addEventListener("click", prevNewArrivalsSlide);

window.addEventListener("resize", renderNewArrivalsCarousel);
