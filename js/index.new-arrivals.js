const newArrivals = [
  {
    id: 1,
    bookImage: "img/new-arrivals/ascendant-cover.png",
    bookName: "Ascendant - Michael Kane",
    bookPrice: "$25,00 USD",
  },
  {
    id: 2,
    bookImage: "img/new-arrivals/broken-wings-cover.png",
    bookName: "Broken Wings - Lili Monroe",
    bookPrice: "$22,00 USD",
  },
  {
    id: 3,
    bookImage: "img/new-arrivals/mirage-cover.png",
    bookName: "Mirage - Anthan Cole",
    bookPrice: "$21,00 USD",
  },
  {
    id: 4,
    bookImage: "img/new-arrivals/phantom-cover.png",
    bookName: "Phantom - Liam Hayes",
    bookPrice: "$22,45 USD",
  },
  {
    id: 5,
    bookImage: "img/new-arrivals/resonance-cover.png",
    bookName: "Resonance - Emilia Fox",
    bookPrice: "$29,50 USD",
  },
];

function renderNewArrivals(newArrivals) {
  let newArrivalsHTML = "";
  for (const newArrival of newArrivals) {
    newArrivalsHTML += `
        <div class="new-arrivals-carousel__item">
        <a class="book-container__link" href="book-details.html">
          <div class="book-container__image-wrapper">
            <img
              class="book-container__image"
              src="${newArrival.bookImage}"
              alt="Coverage of ${newArrival.bookName}"
            />
          </div>
        </a>
        <p class="book-container__name">${newArrival.bookName}</p>
        <p class="book-container__price">${newArrival.bookPrice}</p>
        <button class="book-container__buy">Buy Now</button>
      </div>
      `;
  }

  const newArrivalsList = document.querySelector(
    ".new-arrivals-carousel_track"
  );
  newArrivalsList.innerHTML = newArrivalsHTML;
}

renderNewArrivals(newArrivals);
