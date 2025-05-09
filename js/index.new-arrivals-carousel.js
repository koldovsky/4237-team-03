const newArrivalsSlides = [
  `<div class="new-arrivals-carousel__item">
      <a class="book-container__link" href="book-details.html">
      <div>
      <div class="new-arrivals-carousel__new-tag">New</div>
      <img src="img/new-arrivals/ascendant-cover.png" alt="Coverage of the book Ascendant"></div>
      </a>
      <p class="book-container__name">Ascendant - Michael Kane</p>
      <p class="book-container__price">$25,00 USD</p>
      <button class="book-container__buy">Buy Now</button>
    </div>`,
  `<div class="new-arrivals-carousel__item">
      <a class="book-container__link" href="book-details.html">
        <img
          class="book-container__image"
          src="img/new-arrivals/broken-wings-cover.png"
          alt="Coverage of the book Broken Wings"
        />
      </a>
      <p class="book-container__name">Broken Wings - Lili Monroe</p>
      <p class="book-container__price">$22,00 USD</p>
      <button class="book-container__buy">Buy Now</button>
    </div>`,
  `<div class="new-arrivals-carousel__item">
      <a class="book-container__link" href="book-details.html">
        <img
          class="book-container__image"
          src="img/new-arrivals/mirage-cover.png"
          alt="Coverage of the book Mirage"
        />
      </a>
      <p class="book-container__name">Mirage - Anthan Cole</p>
      <p class="book-container__price">$21,00 USD</p>
      <button class="book-container__buy">Buy Now</button>
    </div>`,
  `<div class="new-arrivals-carousel__item">
      <a class="book-container__link" href="book-details.html">
      <div class="new-arrivals-carousel__new-tag">New</div>  
      <img
          src="img/new-arrivals/phantom-cover.png"
          alt="Coverage of the book Phantom"
        />
      </a>
      <p class="book-container__name">Phantom - Liam Hayes</p>
      <p class="book-container__price">$22,45 USD</p>
      <button class="book-container__buy">Buy Now</button>
    </div>`,
  ` <div class="new-arrivals-carousel__item">
      <a class="book-container__link" href="book-details.html">
        <img
          class="book-container__image"
          src="img/new-arrivals/resonance-cover.png"
          alt="Coverage of the book Resonance"
        />
      </a>
      <p class="book-container__name">Resonance - Emilia Fox</p>
      <p class="book-container__price">$29,50 USD</p>
      <button class="book-container__buy">Buy Now</button>
    </div>`,
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
  currentSlide =
    (currentSlide - 1 + newArrivalsSlides.length) % newArrivalsSlides.length;
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
